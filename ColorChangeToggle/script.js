
const input = document.querySelector('.input');
const body = document.querySelector("body");
const label = document.querySelector("label");

input.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

input.addEventListener("click",()=>{
   updateBody();
   updateLocalStorage();
})
function updateBody(){
    if(input.checked){
        body.style.backgroundColor = "black";
    }
    else{
         body.style.backgroundColor = "white";
    }
}

function updateLocalStorage() {
    localStorage.setItem('mode', JSON.stringify(input.checked));
}


