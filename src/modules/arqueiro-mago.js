import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago' //transformando uma variável em static já que ela permanecerá assim
    static descricao = 'Detentor de lancas e flechas mágicas!'

    constructor(nome, destreza, elementoMago, levelMago, inteligencia) {
        super(nome)
        this.ladoArqueiro = new Arqueiro(nome, destreza) //instanciando a classe Arqueiro na variavel ladoArqueiro
        this.ladoMago = new Mago(nome, elementoMago, levelMago, inteligencia) //instanciando a classe Mago na variavel ladoMago
    }

    //aqui estamos importando as regras das obterInsignia das classe Arqueiro e Mago
    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} = ${this.ladoMago.obterInsignia()}`
    }
}