//grab all links
let logo = document.querySelector("#logo");
let aboutLink = document.querySelector("#aboutLink");
let skillsLink = document.querySelector("#skillsLink");
let degreeLink = document.querySelector("#degreeLink")
let certsLink = document.querySelector("#certsLink");
let contactLink = document.querySelector("#contactLink");
let main = document.querySelector("#main");
let about = document.querySelector("#about");
let skills = document.querySelector("#skills");
let degree = document.querySelector("#degree")
let certs = document.querySelector("#certs");
let contact = document.querySelector("#contact");
let mainH1 = document.querySelector("#main h1");
let mainH12 = document.querySelector("#main h1:nth-child(2)");
let mainPara = document.querySelector("#main p");
let mainAnker = document.querySelector("#main a");
let aboutH1 = document.querySelector("#about h1");
let aboutPara = document.querySelector("#about p");
let aboutAnker = document.querySelector("#about a");
let skillsH1 = document.querySelector("#skills h1");
let skillsPara = document.querySelector("#skills p");
let skillsCard = document.querySelector("#skills .skills-card");
let degreeH1 = document.querySelector("#degrees h1");
let degreePara = document.querySelector("#degrees p");
let degreeCard = document.querySelector("#degrees .degree-cards");
let certsH1 = document.querySelector("#certs h1");
let certsPara = document.querySelector("#certs p");
let certsCard = document.querySelector("#certs .certs-cards");
let contactH1 = document.querySelector("#contact h1");
let contactForm = document.querySelector("#contact form");
let contactAnker = document.querySelector("#contact a");


function handleOpacity(opacityOne, opacityZero1, opacityZero2, opacityZero3, opacityZero4, opacityZero5) {
    opacityOne.style.opacity = 1;
    opacityZero1.style.opacity = 0;
    opacityZero2.style.opacity = 0;
    opacityZero3.style.opacity = 0;
    opacityZero4.style.opacity = 0;
    opacityZero5.style.opacity = 0;

}

function handleAnimation() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].classList.remove('main-animation')
        arguments[i].offsetWidth;
        arguments[i].classList.add('main-animation')
    }
}


logo.addEventListener('click', function() {
    handleOpacity(main, about, skills, degrees, certs, contact);
    handleAnimation(mainH1, mainH12, mainPara, mainAnker);
});
aboutLink.addEventListener('click', function() {
    handleOpacity(about, main, skills, degrees, certs, contact);
    handleAnimation(aboutH1, aboutPara, aboutAnker);
});
skillsLink.addEventListener('click', function() {
    handleOpacity(skills, degrees, certs, main, about, contact);
    handleAnimation(skillsH1, skillsPara, skillsAnker);
});
degreeLink.addEventListener('click', function() {
    handleOpacity(degrees, certs, skills, about, main, contact);
    handleAnimation(degreeH1, degreePara, degreeAnker);
});
certsLink.addEventListener('click', function() {
    handleOpacity(certs, skills, about, main, contact, degrees);
    handleAnimation(certsH1, certsPara, certsAnker);
});
contactLink.addEventListener('click', function() {
    handleOpacity(contact, main, about, skills, degrees, certs);
    handleAnimation(contactH1, contactForm, contactAnker);
});


let model = document.querySelector('.model')
let trigger = document.querySelector('.open-model')
let closeButton = document.querySelector('.close-model')

function toggleModel() {
    model.classList.toggle("show-model");
}

function windowOnClick(e) {
    if (e.target === model) {
        toggleModel()
    }
}

trigger.addEventListener('click', toggleModel);
closeButton.addEventListener('click', toggleModel);
window.addEventListener('click', windowOnClick);