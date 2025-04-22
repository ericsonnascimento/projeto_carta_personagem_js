import { Personagem } from "./personagem.js"

export class Mago extends Personagem { //Estamos herdando alguns atributos da classe "Personagem" (HERANÇA)
    elementoMagico
    levelMagico
    inteligencia
    tipo = 'Mago' //necessário para renderizar o CSS 'Mago'

    constructor (nome, level, elementoMagico, levelMagico, inteligencia) {
        super(nome, level) //construindo os atributos da classe pai
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia() {
        if (this.levelMagico >= 5 && this.inteligencia >= 5) { //estamos aplicando condicionais exclusivaa na classe Mago
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia() //caso não cumpra os requisitos a cima, utilizaremos as condições de obterInsignia da classe pai (POLIMORFISMO)
    }
}