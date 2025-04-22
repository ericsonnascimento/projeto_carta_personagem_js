import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    destreza
    tipo = 'Arqueiro'

    constructor(nome, level, destreza) {
        super(nome, level)
        this.destreza = destreza
    }

    obterInsignia() {
        if (this.destreza >= 5) {
            return 'Dominador de Flechas'
        }
        return super.obterInsignia()
    }
}