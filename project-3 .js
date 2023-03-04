
const mobile = document.getElementById("mobile");
const image = document.getElementById("image");
// let num = prompt("enter the any number.")
mobile.addEventListener("dblclick",()=>{
   
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
});