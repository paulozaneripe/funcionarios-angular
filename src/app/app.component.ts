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

  funcionarioSelecionado:any = null;
  
  constructor () { 
  }
}
