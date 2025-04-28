export class Personagem {
    nome
    vida = 100 //variável que futuramente não será fixa
    mana = 100 //variável que futuramente não será fixa
    #level //encapsulando a variável "level" tornando inacessível externamente
    tipo
    descricao

    constructor(nome) {
        this.nome = nome
        this.#level = 1
    }

    aumentarLevel() {
        this.level += 1
    }

    diminuirLevel() {
        this.level -= 1
    }

    //método "get" associa a propriedade de um objeto a uma função, a função get é chamada quando a propriedade é acessada.
    //então é habilitado o acesso externo ao atributo "level" automaticamente. 
    get level() {
        return this.#level
    }

    set level(novoLevel) {
        if (novoLevel >= 1 && novoLevel <= 10) {
            this.#level = novoLevel
        }
    }

    obterInsignia() {
        if(this.#level >= 5){
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