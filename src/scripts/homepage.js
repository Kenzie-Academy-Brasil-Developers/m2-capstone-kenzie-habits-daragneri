import editarPerfil from "../models/editarPerfil.models.js"
import Habits from '../controller/Api.habits.controller.js'


class Header {
    static renderizarHeader() {

        const nomeUser = document.querySelector(".header-nav-h2")
        const fotoUser2 = document.querySelector(".header-nav-img")

        fotoUser2.src = JSON.parse(localStorage.getItem("@capstone:usr_img"))
        nomeUser.innerHTML = JSON.parse(localStorage.getItem("@capstone:username"))
    }
}
Header.renderizarHeader()



let imgCabecalho = document.getElementById('headerDivImg')
let dropdownContent = document.getElementById('dropdownContent')
let editrPerfil = document.getElementById('editarPerfil')
let sairDoApp = document.getElementById('sairDoApp')

imgCabecalho.src = JSON.parse(localStorage.getItem('@capstone:usr_img'))
imgCabecalho.addEventListener('click', () => {

    if (dropdownContent.className == 'dropdown-content sumir') {
        dropdownContent.className = 'dropdown-content'
    } else {
        dropdownContent.className = 'dropdown-content sumir'
    }
})


sairDoApp.addEventListener('click', () => {
    window.history.back()

    localStorage.clear()
})

editrPerfil.addEventListener('click', () => {
    editarPerfil.criarEdit()

    const inputNome = document.querySelector(".campo__titulo")
    inputNome.value = JSON.parse(localStorage.getItem("@capstone:username"))
})




async function listarHabitos() {
    let tabela = document.getElementById('tabela')
    let habitos = await Habits.readAllHabits()
    habitos.forEach(elem => {
        console.log(elem)
        let row = document.createElement('tr')
        let status = document.createElement('td')
        let titulo = document.createElement('td')
        let descricao = document.createElement('td')
        let categoria = document.createElement('td')
        let editar = document.createElement('td')
        let tituloReducer = document.createElement('div')
        let categoriaColor = document.createElement('div')

        tituloReducer.className = 'titulo-reducer'
        tituloReducer.innerText = elem.habit_title
        categoriaColor.className = 'categoria-color'
        categoriaColor.innerText = elem.habit_category
        status.className = 'status-conteudo'
        status.innerHTML = '<input class="checkbox-estilizado" type="checkbox">'
        titulo.className = 'titulo-conteudo'
        descricao.className = 'descricao-conteudo'
        descricao.innerText = elem.habit_description
        categoria.className = 'categoria-conteudo'
        editar.className = 'editar-conteudo'
        editar.innerHTML = '<svg width="27" height="7" viewBox="0 0 27 7" fill="none"xmlns="http://www.w3.org/2000/svg"><circle cx="3.8877" cy="3.5" r="3" fill="#ADB5BD" /><circle cx="13.8877" cy="3.5" r="3" fill="#ADB5BD" /><circle cx="23.8877" cy="3.5" r="3" fill="#ADB5BD" /></svg>'

        titulo.appendChild(tituloReducer)
        categoria.appendChild(categoriaColor)
        row.appendChild(status)
        row.appendChild(titulo)
        row.appendChild(descricao)
        row.appendChild(categoria)
        row.appendChild(editar)
        tabela.appendChild(row)
    });
}
listarHabitos()