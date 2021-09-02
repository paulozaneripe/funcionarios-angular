import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  url:string = 'http://localhost:3000/funcionarios/';

  constructor(private http: HttpClient) {
  }

  addFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.url}`, funcionario);
  }

  alterarFuncionario(id:number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.url}${id}`, funcionario);
  }

  removerFuncionario(id?:number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.url}${id}`);
  }

  obterFuncionario(id:number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.url}${id}`);
  }

  obterFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.url}`);
  }
}
