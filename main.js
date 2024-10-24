// toggle icon navbar//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active');
};



/scroll sections active links/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');

     if(top => offset && top < offset + height){
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id+ ']').classList.add('active');
         });
     };
    });

};


const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("mobilenumber");
const subject = document.getElementById("emailsub");
const mess = document.getElementById("msg");

function sendEmail()
{
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Mobile Number: ${phone.value}<br> Message: ${mess.value}<br>`;

    Email.send({

        Host : "smtp.elasticemail.com",
        Username : "kavyaadepu07@gmail.com",
        Password : "D6D8A49F3FCE4ACAE39CC56FF0047AA4D410",
        To : 'kavyaadepu07@gmail.com',
        From : "kavyaadepu07@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message =>{
        if(message=="OK"){
            Swal.fire({
                title: "Sucess!",
                text: "Message sent sucessfully!",
                icon: "success"
              });
        }
      } 
      
    );

   
}

form.addEventListener("submit",(e) =>
{
    e.preventDefault();
    sendEmail();


});