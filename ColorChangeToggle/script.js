
const input = document.querySelector('.input');
const body = document.querySelector("body");
const label = document.querySelector("label");
const heading = document.querySelector("h1");

input.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

input.addEventListener("click",()=>{
   updateBody();
   updateLocalStorage();
})

function updateBody(){
    if(input.checked){
        body.style.backgroundColor = "black";
        heading.style.color = "#fff";

    }
    else{
         body.style.backgroundColor = "white";
         heading.style.color = "#000000";
    }
}

function updateLocalStorage() {
    localStorage.setItem('mode', JSON.stringify(input.checked));
}


