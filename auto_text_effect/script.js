const container = document.querySelector("div");

const careers = ["web devloper", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

updtaeText();
function updtaeText(){
    container.innerHTML = `<h1> I am ${careers[careerIndex] === "Instructor"?"an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    characterIndex++;
    if(characterIndex > careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0
    }

    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(() => {
        updtaeText();
    },300);
}

