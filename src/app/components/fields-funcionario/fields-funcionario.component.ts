import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnumFilial } from 'src/app/model/enumfilial';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-fields-funcionario',
  templateUrl: './fields-funcionario.component.html',
  styleUrls: ['./fields-funcionario.component.css']
})
export class FieldsFuncionarioComponent implements OnInit {

  @Input() formCadastro:any;
  @Input() f:any;
  @Output() fecharCampos:any = new EventEmitter();
  @Output() atualizarTabela:any = new EventEmitter();
  filiais:String[] = Object.values(EnumFilial);
  funcionarioSalvo:Funcionario = {} as Funcionario;

  constructor(private funcionarioService:FuncionarioService) { }

  ngOnInit(): void {
  }

  cadastrarFuncionario(funcionario:NgForm) {
    this.funcionarioSalvo = {
      nome: funcionario.value.nome,
      filial: funcionario.value.filial,
      cargo: funcionario.value.cargo,
      salario: funcionario.value.salario,
      admissao: funcionario.value.admissao
    }

    this.funcionarioService.addFuncionario(this.funcionarioSalvo)
      .subscribe(() => {
        this.atualizarTabela.emit();
        this.fechar();
      });

  }

  alterarFuncionario(funcionario:NgForm) {
    this.funcionarioSalvo = {
      nome: funcionario.value.nome,
      filial: funcionario.value.filial,
      cargo: funcionario.value.cargo,
      salario: funcionario.value.salario,
      admissao: funcionario.value.admissao
    }

    this.funcionarioService.alterarFuncionario(funcionario.value.id, this.funcionarioSalvo)
      .subscribe(() => {
        this.atualizarTabela.emit();
        this.fechar();
      });
  }

  fechar() {
    this.fecharCampos.emit();
  }
}
