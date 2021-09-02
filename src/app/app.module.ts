import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaFuncionariosComponent } from './components/tabela-funcionarios/tabela-funcionarios.component';
import { FieldsFuncionarioComponent } from './components/fields-funcionario/fields-funcionario.component';
import { DetalhesFuncionarioComponent } from './components/detalhes-funcionario/detalhes-funcionario.component';
import ptBr from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TabelaFuncionariosComponent,
    FieldsFuncionarioComponent,
    DetalhesFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot([])
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
