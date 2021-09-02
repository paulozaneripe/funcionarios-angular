import { Component } from '@angular/core';
import { EnumFilial } from './model/enumfilial';
import { Funcionario } from './model/funcionario';
import { FuncionarioService } from './services/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title="Funcionários"
  
  funcionarios:any;
  funcionarioSelecionado:any = null;
  funcionarioParaAlterar:any = null;
  campos:boolean = false;
  formularioCadastro:any;
  
  constructor () { 
  }

  mostrarCampos(formCadastro:any) {
    this.campos = true;
    this.formularioCadastro = formCadastro[0];

    if(this.formularioCadastro != true) {
      this.funcionarioParaAlterar = formCadastro[1];
    }
  } 
}
