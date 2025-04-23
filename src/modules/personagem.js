export class Personagem {
    nome
    vida = 100 //variável que futuramente não será fixa
    mana = 100 //variável que futuramente não será fixa
    level
    tipo
    descricao

    constructor(nome, level) {
        this.nome = nome
        this.level = level
    }

    obterInsignia() {
        if(this.level >= 5){
            return `Implacável ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante` 
    }

    //é uma função utilitária que irá cumprir o seu papel independente da instancia da classe
    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.level === personagem2.level) {
            return 'Empate!!!'
        }

        if (personagem1.level > personagem2.level) {
            return `${ personagem1.constructor.tipo } ${personagem1.nome} é o vencedor!`
        }

        return `${ personagem2.constructor.tipo } ${personagem2.nome} é o vencedor!`
    }
}