const ENG_button = document.querySelector(".eng");
const JPN_button = document.querySelector(".jpn");

const home = document.getElementById('home');
const home_ENG = home.textContent;
const home_JPN = "ホーム";

const projects = document.getElementById('projects');
const projects_ENG = projects.textContent;
const projects_JPN = "プロジェクト";

const language = document.getElementById('navbarDropdown');
const language_ENG = language.textContent;
const language_JPN = "言語";

const texts = [home, projects, language]
const ENG_texts = [home_ENG, projects_ENG, language_ENG]
const JPN_texts = [home_JPN, projects_JPN, language_JPN]


function changeToJPN(){
    for (let i = 0; i < texts.length; i++){
            texts[i].textContent = JPN_texts[i]
        }
}

function changeToENG(){
    for (let i = 0; i < texts.length; i++){
        texts[i].textContent = ENG_texts[i]
    }
}

ENG_button.addEventListener('click', function(){
    changeToENG();
})

JPN_button.addEventListener('click', function(){
    changeToJPN();
})