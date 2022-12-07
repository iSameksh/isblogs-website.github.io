let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "samekshd@gmail.com",
        Password : "Sameksh1730",
        To : 'dhulapsakshi1930@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Submisssion",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    ); 

}

// const form = document.querySelector('.contact_form'),
// name = document.querySelector('.name'),
// email = document.querySelector('.email'),
// num = document.querySelector('.num'),
// sub = document.querySelector('.sub'),
// msg = document.querySelector('.msg');
