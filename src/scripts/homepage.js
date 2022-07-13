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


