let arrClass = document.getElementsByClassName('tabview');
let menuBtn = document.getElementsByClassName('menu-btn');

function selectTab(tabIndex) {

    for (let i = 0; i < arrClass.length; i++) {
        arrClass[i].style.cssText = "display:none;";
        menuBtn[i].classList.remove('menuColor');
    }

    let arr = arrClass[tabIndex].style.cssText = "display:block;";
    let changedMenuColor = menuBtn[tabIndex].classList.add('menuColor')
}
selectTab(0);


let speacial = document.getElementsByClassName('speacialTabview');
let speacialBtn = document.getElementsByClassName('vertical-tabview');

function speacialView(tabIndex) {

    for (let i = 0; i < speacial.length; i++) {
        speacial[i].style.cssText = "display:none;";
        speacialBtn[i].classList.remove('speacial-btn');
    }
    let speacialArr = speacial[tabIndex].style.cssText = "display:block;";
    let check = speacialBtn[tabIndex].classList.add('speacial-btn');
}
speacialView(0);

// slider events

let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        dots.forEach((dot, index) => {
            dot.classList.remove("active");
        })
    })
    slides[n].style.display = "block";
    dots[n].classList.add("active");
}
document.addEventListener("DOMContentLoaded", init(currentSlide))

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        console.log(currentSlide);
        init(i);
        currentSlide = i;
    })
})
// setInterval(() => {

// }, 5000);

let userName = document.getElementById('yourName');
let yourEmail = document.getElementById('yourEmail');
let yourPhone = document.getElementById('yourPhone');
// let EnteredDate = document.getElementById('date');
// let EnteredTime = document.getElementById('time');
// let EnteredNumber = document.getElementById('number');
// let EnteredMessage = document.getElementById('Message');



let formBtn = document.getElementById('formBtn');

formBtn.addEventListener('click', function (e) {

    // selection of all

    // user validation
    let UserNameValue = document.getElementById('UserNameValue');
    let UserEmailValue = document.getElementById('UserEmailValue');
    let UserPhoneValue = document.getElementById('UserPhoneValue');


    if (userName.value == "") {
        UserNameValue.innerHTML = "please enter your name";

        e.preventDefault();
    }
    else if (userName.value.length < 4) {
        UserNameValue.innerHTML = "minimun four charater required";

        e.preventDefault();
    }
    else {
        UserNameValue.innerHTML = "";
    }


    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // console.log(regex_pattern.test(yourEmail.value) === false);
    if (regex_pattern.test(yourEmail.value) === "") {
        UserEmailValue.innerHTML = "required field";
        e.preventDefault();
    }

    else if (regex_pattern.test(yourEmail.value) == true) {
        UserEmailValue.innerHTML = "validate";
        e.preventDefault();
    }

    else {
        UserEmailValue.innerHTML = "You have entered an invalid email address!";
        e.preventDefault();
    }

    const tel_regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (tel_regex.test(yourPhone.value) == "") {
        UserPhoneValue.innerHTML = "required field"
        e.preventDefault();
    }
    else if (tel_regex.test(yourPhone.value)) {
        UserPhoneValue.innerHTML = "validate"
        e.preventDefault();
    }
    else {
        UserPhoneValue.innerHTML = "Please enter a valid phone number"
        e.preventDefault();
    }
})

