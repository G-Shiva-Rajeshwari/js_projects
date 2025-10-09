
const button = document.querySelector("button");

button.addEventListener('mouseover',(event)=>{
    const y = (event.pageY - button.offsetTop);
    const x = (event.pageX - button.offsetLeft);

    button.style.setProperty("--xpos", x+"px");
    button.style.setProperty("--ypos", y+"px");
});