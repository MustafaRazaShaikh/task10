let userEmail = document.getElementById('email')
let userPassword = document.getElementById('password')
let login = document.getElementById('btn')
login.addEventListener("click", () => {
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;
    if (userEmail == "mustafa778822@gmail.com" && userPassword == 201145) {
    alert('Correct')
    } else {
      alert('Enter your Password');
    }
  });