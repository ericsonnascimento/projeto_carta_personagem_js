import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    tipo = 'ArqueiroMago'

    constructor(nome, level, destreza, elementoMago, levelMago, inteligencia) {
        super(nome, level)
        this.ladoArqueiro = new Arqueiro(nome, level, destreza) //instanciando a classe Arqueiro na variavel ladoArqueiro
        this.ladoMago = new Mago(nome, level, elementoMago, levelMago, inteligencia) //instanciando a classe Mago na variavel ladoMago
    }

    //aqui estamos importando as regras das obterInsignia das classe Arqueiro e Mago
    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} = ${this.ladoMago.obterInsignia()}`
    }
}