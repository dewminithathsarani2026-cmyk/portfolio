
// Welcome Message

function welcome() {

    alert("Welcome to My Portfolio!");

}


// Student Project Details

function showDetails() {

    alert("Student Management System - My Java Project.");

}


// Portfolio Details

function showPortfolio() {

    alert("This is my Personal Portfolio Website.");

}


// Dark and Light Theme

function changeTheme() {

    document.body.classList.toggle("dark");

}


// Contact Form

function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank You " + name + "! Message Submitted.");

    document.querySelector("form").reset();

}


// GitHub API

function loadProjects() {

    fetch("https://api.github.com/users/octocat/repos")

    .then(response => response.json())

    .then(data => {

        let output = "";

        data.forEach(project => {

            output += "<p>" + project.name + "</p>";

        });

        document.getElementById("githubProjects").innerHTML = output;

    })

    .catch(error => {

        document.getElementById("githubProjects").innerHTML =
        "Unable to load projects.";

    });

}

loadProjects();
