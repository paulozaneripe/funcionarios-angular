import { EnumFilial } from "./enumfilial";

export interface Funcionario {
    id?:number,
    nome: string,
    filial: EnumFilial,
    cargo: string,
    salario: number,
    admissao: Date
}