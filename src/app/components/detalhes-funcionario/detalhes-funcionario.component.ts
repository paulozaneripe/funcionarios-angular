import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-detalhes-funcionario',
  templateUrl: './detalhes-funcionario.component.html',
  styleUrls: ['./detalhes-funcionario.component.css']
})
export class DetalhesFuncionarioComponent implements OnInit {

  @Input() funcionario?:Funcionario;
  @Output() deselecao:any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deselecionarFuncionario() {
    this.deselecao.emit();
  }
}
