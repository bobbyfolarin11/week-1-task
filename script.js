let form = document.querySelector('form');
let submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  alert('Form submitted successfully!');

  let name = document.getElementById('name').value
let mail = document.getElementById('email').value
let pass = document.getElementById('ipass').value
let phone = document.getElementById('phone').value
let gender = document.getElementById('gender').value

if (iname == "" || email == "" || phone == "" || gender == "" || password == "") {

    alert("Please fill out all fields.");

    return false;

}

});


  