import editarPerfil from "../models/editarPerfil.models.js"

class Header {
    static renderizarHeader(){

        const nomeUser  = document.querySelector(".header-nav-h2")
        const fotoUser2 = document.querySelector(".header-nav-img")
        const fotoUser1 = document.querySelector(".header-div-img")
    
        fotoUser1.src = JSON.parse(localStorage.getItem("@capstone:usr_img"))
        fotoUser2.src =  JSON.parse(localStorage.getItem("@capstone:usr_img"))
        nomeUser.innerHTML = JSON.parse(localStorage.getItem("@capstone:username"))    
    }
}
Header.renderizarHeader()


let imgCabecalho = document.getElementById('headerDivImg')
let dropdownContent = document.getElementById('dropdownContent')
let editrPerfil = document.getElementById('editarPerfil')
let sairDoApp = document.getElementById('sairDoApp')


imgCabecalho.addEventListener('click', () => {
    if(dropdownContent.className == 'dropdown-content sumir'){
        dropdownContent.className = 'dropdown-content'
    }
    else{
        dropdownContent.className = 'dropdown-content sumir'
    }
})


sairDoApp.addEventListener('click', () => {
    window.history.back()
    
    localStorage.clear()
})

editrPerfil.addEventListener('click', () => {
    editarPerfil.criarEdit()
})


