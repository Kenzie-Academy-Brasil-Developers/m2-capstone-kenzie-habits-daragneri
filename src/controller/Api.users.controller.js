export default class Users {
    static baseUrl = 'https://habits-kenzie.herokuapp.com'   
    
    static async userLogin(data){
        return await fetch(`${this.baseUrl}/api/userLogin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then((res) => {
            localStorage.setItem('@captsone:token', res.token)
            localStorage.setItem('@captsone:username', res.response.usr_name)
            localStorage.setItem('@captsone:usr_img', res.response.usr_image)
        })
        .catch(err => console.log(err))
    }

    static async updateProfile(data){
        const token = JSON.parse(localStorage.getItem('@captsone:token'))
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

