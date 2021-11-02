document.addEventListener("DOMContentLoaded", () =>{
    let ul = document.querySelector(".ul");
    

    fetch('/users').then((data) =>{
        return data.json();
    }).then( (users) =>{
        for (const user of users) {
            console.log("User : " + user.name);
            console.log("Password : " + user.password);

        }
    })
});