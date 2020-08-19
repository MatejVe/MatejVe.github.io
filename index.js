var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var aboutMeLink = document.getElementById("aboutMeLink");
var skillsLink = document.getElementById("skillsLink");
var workExperienceLink = document.getElementById("workExperienceLink");
var educationLink = document.getElementById("educationLink");
var personalProjectsLink = document.getElementById("personalProjectsLink");
var contactMeLink = document.getElementById("contactMeLink");

var aboutMeSection = document.getElementById("aboutMeSection");
var skills = document.getElementById("skillsAndCertificates");
var workExperience = document.getElementById("workExperience");
var education = document.getElementById("education");
var personalProjects = document.getElementById("personalProjects");
var contactMe = document.getElementById("contactMe");

window.addEventListener('scroll', function (event) {
    if (isInViewport(aboutMeSection)) {
        aboutMeLink.classList.add('active');
    } else {
        aboutMeLink.classList.remove('active');
    }
}, false);

window.addEventListener('scroll', function (event) {
    if (isInViewport(skills)) {
        skillsLink.classList.add('active');
    } else {
        skillsLink.classList.remove('active');
    }
}, false);

window.addEventListener('scroll', function (event) {
    if (isInViewport(workExperience)) {
        workExperienceLink.classList.add('active');
    } else {
        workExperienceLink.classList.remove('active');
    }
}, false);

window.addEventListener('scroll', function (event) {
    if (isInViewport(education)) {
        educationLink.classList.add('active');
    } else {
        educationLink.classList.remove('active');
    }
}, false);

window.addEventListener('scroll', function (event) {
    if (isInViewport(personalProjects)) {
        personalProjectsLink.classList.add('active');
    } else {
        personalProjectsLink.classList.remove('active');
    }
}, false);

window.addEventListener('scroll', function (event) {
    if (isInViewport(contactMe)) {
        contactMeLink.classList.add('active');
    } else {
        contactMeLink.classList.remove('active');
    }
}, false);