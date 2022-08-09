document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Hi there")
  });

const userTypeButton = document.querySelector('#user-type-submit')
let userTypeSelect = document.getElementById('user-type-select')
let selectElementValue = userTypeSelect.options[userTypeSelect.selectedIndex].value;
let selectElementText = userTypeSelect.options[userTypeSelect.selectedIndex].value;

/* userTypeButton.addEventListener('click', (event)=>{
    console.log(userTypeSelect.options[userTypeSelect.selectedIndex].value)
}) */
userTypeButton.addEventListener('click', (event)=>{
    console.log(userTypeSelect.value);
})