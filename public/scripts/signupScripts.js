
document.addEventListener("DOMContentLoaded", function() {
    console.log('Hello from signupScripts.js!')})

let submitButton = document.getElementById('submit-button');
let formElem = document.querySelector('form');
const form = document.forms[0]

    form.addEventListener("submit", function(event){
        event.preventDefault();
        const data = new FormData(form);
    })

    form.addEventListener("formdata", event => {
        const data = event.formData;

        const entries = [...data.entries()];
        console.log(entries)

        const values = [...data.values()]
        console.log(values)

        const formDataJSON = JSON.stringify(Object.fromEntries(entries))
        console.log(formDataJSON)

        fetch("/signup", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            }, 
            body: formDataJSON
        })
    })

/* formElem.addEventListener("submit", (event) =>{
    //const formElement = document.querySelector("form")
    event.preventDefault();
    console.log('formdata fired');
    let fd = event.formData
    for (const value of fd.values()){
        console.log(value)
    }

    fetch("/user/signup", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        }, 
        body: JSON.stringify({
            fd
        })
    })
    


}) */