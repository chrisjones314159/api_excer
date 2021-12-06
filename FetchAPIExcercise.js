"use strict"

const output = document.querySelector("section#output");


axios.get("https://reqres.in/api/users?page=2")
    .then(response => {
        const reqresData = response.data.data;
        console.log(response);
       


        const users = document.createElement("ul");
        for (let user of reqresData){

    

            const newUser = document.createElement("div");
            newUser.classList.add("card-body");
            
            const userId = document.createElement("h3");
            userId.innerText = user.id;
            users.appendChild(userId);

            const firstName = document.createElement("p");
            firstName.innerText = user.first_name;
            users.appendChild(firstName);

            const lastName = document.createElement("p");
            lastName.innerText = user.last_name;
            users.appendChild(lastName);

            const email = document.createElement("p");
            email.innerText = user.email;
            users.appendChild(email);

            const avatar = document.createElement("img");
            avatar.src = user.avatar;
            users.appendChild(avatar);

        

            
        }
        output.appendChild(users);
        
    



    }).catch(err => console.error(err));


    document.querySelector("section#post > form").addEventListener('submit', (e) => {
        e.preventDefault();

        const form = e.target;

        const data = {
            name: form.name.value,
            job: form.job.value
        }

        console.log("Data: ", data);

        axios.post(`https://reqres.in/api/users`, data)
        .then((res) => {
            console.log(res);
            // add a get all method that is to be called here

            form.reset();
            form.name.focus();
        }).catch(err => console.log(err));
    });



document.querySelector("section#register > form").addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target;

    const regData = {
        email: form.email.value,
        password: form.password.value
    }

    console.log("Data: ", regData);

    axios.post(`https://reqres.in/api/register`, regData)
    .then((res) => {
        console.log(res);
        // add a get all method that is to be called here

        form.reset();
        form.email.focus();
    }).catch(err => console.log(err));
});