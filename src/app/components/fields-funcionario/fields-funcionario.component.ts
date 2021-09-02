import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EnumFilial } from 'src/app/model/enumfilial';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-fields-funcionario',
  templateUrl: './fields-funcionario.component.html',
  styleUrls: ['./fields-funcionario.component.css']
})
export class FieldsFuncionarioComponent implements OnInit, OnChanges {

  @Input() f:any;
  @Output() fecharCampos:any = new EventEmitter();
  @Output() atualizarTabela:any = new EventEmitter();
  filiais:String[] = Object.values(EnumFilial);

  funcionarioForm:FormGroup = ({}) as FormGroup;

  constructor(private funcionarioService:FuncionarioService) {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      filial: new FormControl(""),
      cargo: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      salario: new FormControl(null, [Validators.required]),
      admissao: new FormControl(null, [Validators.required])
    })
   }

  ngOnChanges(changes: SimpleChanges): void {
    this.funcionarioForm.patchValue(this.f);
  }

  ngOnInit(): void {
  }

  cadastrarFuncionario() {

    if(this.funcionarioForm.valid) {
  
      this.funcionarioService.addFuncionario(this.funcionarioForm.getRawValue())
        .subscribe(() => {
          this.atualizarTabela.emit();
          this.fechar();
        });
    } else {
      alert("Erro ao cadastrar funcionário!");
    }
  }

  alterarFuncionario() {

    if(this.funcionarioForm.valid) {

      this.funcionarioService.alterarFuncionario(this.funcionarioForm.get("id")?.value, this.funcionarioForm.getRawValue())
        .subscribe(() => {
          this.atualizarTabela.emit();
          this.fechar();
        });
    } else {
      alert("Erro ao alterar funcionário!");
    }
  }

  resetarFormulario() {
    this.funcionarioForm.reset();
    this.funcionarioForm.get("filial")?.setValue("");
    this.funcionarioForm.get("id")?.setValue(this.f?.id);
  }

  fechar() {
    this.fecharCampos.emit();
  }
}
