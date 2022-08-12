document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Hi there")
  });

const userTypeButton = document.querySelector('#user-type-submit')
let userTypeSelect = document.getElementById('user-type-select')
let selectElementValue = userTypeSelect.options[userTypeSelect.selectedIndex].value;
let selectElementText = userTypeSelect.options[userTypeSelect.selectedIndex].value;
let userIdNumber = document.getElementById('hiddenUserId')

/* userTypeButton.addEventListener('click', (event)=>{
    console.log(userTypeSelect.options[userTypeSelect.selectedIndex].value)
}) */
userTypeButton.addEventListener('click', (event)=>{
    //console.log(userTypeSelect.value);
    //console.log(userIdNumber.value);
    
    fetch("/admin/user/userType", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
           userId: userIdNumber.value,
           userType: userTypeSelect.value
        })
        
    })
        .then(res => {
                return res.json()
            })
        .then(data => {
            JSON.stringify(data)
            document.getElementById('user-type-el').innerHTML = `<p>user type: ${data.userType}</p>`


            //needs to be looked at when workinggit on error handling
        })

            
        
        /*.then(json => {
            JSON.parse(json)
            //document.getElementById('user-type-el').innerHTML = `<p>user type: ${res.userType}</p>`;
        })
        .then(data => console.log(data))
            /*.catch(err => {
                console.log(err)
            })*/
})