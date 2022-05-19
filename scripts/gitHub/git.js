function getUser(login){
    fetch('https://api.github.com/users/'+login)
        .then((response)=>response.json())
        .then(user=> {
            console.log(user)
           renderDate(user)
        })
        .catch(er=>{
            console.log(er)
        })
}