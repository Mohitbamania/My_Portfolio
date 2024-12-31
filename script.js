let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const form = document.querySelector("form");

function sendemail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mohitbamania8@gmail.com",
    Password: "B51E12AE5ECB621CB29CC435FD6F3190090",
    To: "mohitbamania8@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert("Message have been successfully sent"));
}

const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Backend Developer", "PHP Developer"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});
