const nombre = document.querySelector('.tBoxName'),
      addName = document.querySelector('.addName'),
      formulario = document.querySelector('#form'),
      bName= document.querySelector('.welcome');

nombre.addEventListener('keyup',(e)=>{
    let valorInput = e.target.value;
    bName.textContent=("Bienvenido " + valorInput);  
})
