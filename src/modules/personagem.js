export class Personagem {
    nome
    vida = 100 //valor fixo, já que todos os personagens comessam com vida completa
    mana = 100 //valor fixo, já que todos os personagens comessam com mana completa
    level
    tipo
    descricao

    constructor(nome, level) {
        this.nome = nome
        this.level = level
    }

    obterInsignia() {
        if(this.level >= 5){
            return `Implacável ${this.tipo}`
        }
        return `${this.tipo} iniciante` 
    }
}