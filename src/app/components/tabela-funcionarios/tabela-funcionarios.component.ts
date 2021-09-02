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

  formCadastro:any;
  dadosForm:any;
  @Input() funcionarios:Funcionario[] = [] as Funcionario[];
  @Output() detalhesFuncionario:any = new EventEmitter();
  @Output() mostrarCampos = new EventEmitter();
  @Output() remocao = new EventEmitter();

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
    this.formCadastro = true;
    this.dadosForm = [this.formCadastro, null];
    this.mostrarCampos.emit(this.formCadastro);
  }

  alterarFuncionario(funcionario:Funcionario) {
    this.formCadastro = false;
    this.dadosForm = [this.formCadastro, funcionario];
    this.mostrarCampos.emit(this.dadosForm);
  }

  removerFuncionario(funcionario:Funcionario) {
    this.funcionarioService.removerFuncionario(funcionario.id)
    .subscribe(() => {
      this.obterFuncionarios();
    });
  }

  removerUltimoFuncionario() {
    this.removerFuncionario(this.funcionarios.slice(-1)[0]);
  }

  async removerFuncionarios() {
    for(let i = this.funcionarios.length; i > 0; i--) {
      await new Promise(f => setTimeout(f, 50));
      this.removerFuncionario(this.funcionarios[i - 1]);
    }
  }

  mostrarFuncionario(funcionario: Funcionario) {
    this.detalhesFuncionario.emit(funcionario);
  }
}
