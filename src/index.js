import { PersonagemView } from "./components/personagem-view.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { Mago } from "./modules/mago.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroEricson = new Arqueiro('Ericson', 17, 5)
const arqueiroMagoAntonio = new ArqueiroMago('Antonio', 7, 10, 'ar', 4, 8)

const personagem = [magoAntonio, magaJulia, arqueiroEricson, arqueiroMagoAntonio]

new PersonagemView(personagem).render()