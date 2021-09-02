import { getLocaleDayPeriods } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SimpleChanges } from '@angular/core';
import { EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from '../../model/funcionario';

@Component({
  selector: 'app-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.css']
})

export class TabelaFuncionariosComponent implements OnInit {

  funcionarioSelecionado:any = null;
  funcionarioParaAlterar:any = null;
  campos:boolean = false;
  @Input() funcionarios:Funcionario[] = [] as Funcionario[];
  @Output() detalhesFuncionario:any = new EventEmitter();

  constructor(private funcionarioService: FuncionarioService) { 
    this.obterFuncionarios();
  }

  ngOnInit(): void {
  }

  obterFuncionarios() {
    this.funcionarioService.obterFuncionarios()
    .subscribe(
      funcionarios => {
        this.funcionarios = funcionarios;
      });
  }

  cadastrarFuncionario() {
    this.campos = true;
    this.funcionarioParaAlterar = null;
  }

  alterarFuncionario(funcionario:Funcionario) {
    this.campos = true;
    this.funcionarioParaAlterar = funcionario;
  }

  removerFuncionario(funcionario:Funcionario) {
    this.funcionarioService.removerFuncionario(funcionario.id)
    .subscribe(() => {
      this.obterFuncionarios();
    });
  }

  removerUltimoFuncionario() {
    this.removerFuncionario(this.funcionarios.slice(-1)[0]);
    this.campos = false;
  }

  async removerFuncionarios() {
    for(let i = this.funcionarios.length; i > 0; i--) {
      await new Promise(f => setTimeout(f, 50));
      this.removerFuncionario(this.funcionarios[i - 1]);
    }
    this.campos = false;
  }

  mostrarFuncionario(funcionario: Funcionario) {
    this.detalhesFuncionario.emit(funcionario);
  }
}
