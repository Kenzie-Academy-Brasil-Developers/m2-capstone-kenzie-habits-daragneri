

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
