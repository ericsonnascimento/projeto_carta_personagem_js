import { Personagem } from "../modules/personagem.js"
import { mostrarModal } from "./modal.js"

export class PersonagemView{
    personagens
    personagensSelecionados

    constructor(personagens) {
        this.ulPersonagens = document.querySelector('ul#personagens')
        this.personagens = personagens
        this.personagensSelecionados = [] //vamos gradar as cartas selecionadas nesse array
        this.escutarEventoDuelo() //estamos chamando a função escutarEventoDuelo que está logo a baixo

    }
    
    render() {
        this.ulPersonagens.innerHTML = ''
        this.personagens.forEach(personagem => {
            const personagemLI = this.criaPersonagem(personagem)
            this.ulPersonagens.appendChild(personagemLI)
        })
    }
    
    criaPersonagem = (personagem) => {
        const personagemLI = document.createElement('li')
        personagemLI.classList.add('personagem', personagem.constructor.tipo)
    
        const estaSelecionado = this.personagensSelecionados.indexOf(personagem) !== -1 //sintaxe para quando encontra no array
    
        if (estaSelecionado) personagemLI.classList.add('selecionado')
    
        personagemLI.innerHTML =
    
        `
        <div class="container-superior">
            <div class="cabecalho">
                <div class="combate"></div>
                <div class="level">
                    <button class="diminuir-level">-</button>
                    <p class="level-texto">Level ${personagem.level}</p>
                    <button class="aumentar-level">+</button>
                </div>
            </div>
            <div class="container-imagem">
                <div class="imagem"></div>
                <div class="container-tipo">
                    <h2 class="tipo">${personagem.constructor.tipo}</h2>
                </div>
            </div>
            <div class="container-nome">
                <h3 class="nome">${personagem.nome}</h3>
            </div>
            <div class="container-descricao">
                <p class="descricao">${personagem.constructor.descricao}</p>
            </div>
        </div>
        <div class="container-inferior">
            <img src="./src/assets/img/icone-mana.png" class="icone-mana">
            <p class="insignia">${personagem.obterInsignia()}</p>
            <img src="./src/assets/img/icone-vida.png" class="icone-vida">
            <h4 class="mana">${personagem.mana}</h4>
            <h4 class="vida">${personagem.vida}</h4>
        </div>
        `
        //implementação da lógica dos métodos "diminuirLevel" e "aumentarLevel" e chamando a função "render()" 
        //para atualizar o novo lével na página.
        const containerLevel = personagemLI.querySelector('.level')
        containerLevel.onclick = (evt) => {
            evt.stopPropagation()
    
            if (evt.target.classList.contains('diminuir-level')) personagem.diminuirLevel()
    
            if (evt.target.classList.contains('aumentar-level')) personagem.aumentarLevel()
    
            this.render()
        }
    
        //estafunção torna a carta clicável, aplicando "clicar para adicionar" e "clicar para remover"
        personagemLI.onclick = () => {
            const jaTem2Selecionados = this.personagensSelecionados.length === 2
            if (!jaTem2Selecionados || estaSelecionado) {
                personagemLI.classList.toggle('selecionado')
    
                if (!estaSelecionado) return this.adicionaSelecao(personagem)
    
                this.removeSelecao(personagem)
            }
        }
    
        return personagemLI
    }
    
    //estas funcões estão utilizando o nosso atributo "personagensSelecionados" ou seja, tudo que estiver no array
    
    //aqui estamos ADICIONANDO a carta selecionada ao array "personagensSelecionados"
    adicionaSelecao = (personagem) => {
        this.personagensSelecionados.push(personagem)
        this.render()
    }
    
    //aqui estamos REMOVENDO a carta selecionada ao array "personagensSelecionados"
    removeSelecao = (personagem) => {
        const indexDoPersonagemNoArray = this.personagensSelecionados.indexOf(personagem)
        this.personagensSelecionados.splice(indexDoPersonagemNoArray, 1)
        this.render()
    }
    
    //aqui estamos ADICIONANDO o evento de "click" ao botão DUELAR
    escutarEventoDuelo() {
        const botaoDuelar = document.querySelector('.botao-duelar')
    
        botaoDuelar.addEventListener('click', () => {
            if (this.personagensSelecionados.length < 2) return mostrarModal('Selecione 2 personagens')
    
            //aqui estamos verificando o vencedor selecionando os campos do array [0] e [1], que são os únicos existentes.
            const resultadoDuelo = Personagem.verificarVencedor(this.personagensSelecionados[0], this.personagensSelecionados[1])
    
            //ao final é chamado a função "mostrarModal" do arquivo components/modal.js
            mostrarModal(resultadoDuelo)
    
            this.personagensSelecionados.splice(0, this.personagensSelecionados.length)
    
            this.render()
        })
    }
}



