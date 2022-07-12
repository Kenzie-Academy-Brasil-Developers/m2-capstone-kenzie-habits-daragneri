export default class Users {
    static baseUrl = 'https://habits-kenzie.herokuapp.com'

    static async userLogin(data) {
        return await fetch(`${this.baseUrl}/api/userLogin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                if (res.token) {
                    localStorage.setItem('@capstone:token', JSON.stringify(res.token))
                    localStorage.setItem('@capstone:username', JSON.stringify(res.response.usr_name))
                    localStorage.setItem('@capstone:usr_img', JSON.stringify(res.response.usr_image))
                    window.location.href = "../views/homepage.views.html"
                } else {
                    throw new Error(res.message)
                }

            })
            .catch((err) => {
                const senha = document.querySelector(".senha")
                const erro = document.createElement("p")

                erro.innerText = err
                senha.append(erro)
            })
    }

    static async updateProfile(data) {
        const token = localStorage.getItem('@capstone:token')
        return await fetch(`${this.baseUrl}/api/user/profile`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }

}