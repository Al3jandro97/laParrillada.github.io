const orden = document.querySelectorAll('.modalMenu'),
      ObjectFood = document.querySelectorAll('.objectFood'),
      objectCortes = document.querySelectorAll('.objectCortes'),
      nameFood = document.querySelectorAll('.nameFood'),
      priceFood = document.querySelectorAll('priceFood'),
      captionFood = document.querySelectorAll('.captionFood'),
      modalName = document.querySelector('#modalNameFood'),
      modalCaption = document.querySelector('#modalCaptionFood'),
      modal = document.querySelector('.modalContainer'),
      imgCortes = document.querySelector('.imgCortes')
      btnClose = document.querySelectorAll('.modalBtnClose'),
      btnNext = document.querySelectorAll('.btnNext'),
      simbol = document.querySelector('.simbol'),
      btnSig = document.querySelectorAll('.modalBtnNext'),
      containerImgModal = document.querySelector('#imgContainer');
 
for (let i = 0; i < ObjectFood.length; i++) {
    ObjectFood[i].addEventListener('click', function(){
        modal.style.display = "flex";
        modalName.textContent = nameFood[i].textContent;
        if (captionFood[i].textContent != "") {
            modalCaption.textContent = captionFood[i].textContent;
        }
        btnNext[0].textContent = "Agregar a mi Orden";
        simbol.src = "./Vectores/orden.svg";      
    }); 
}
for (let i = 0; i < objectCortes.length; i++) {
    objectCortes[i].addEventListener('click', function(){
        containerImgModal.style.maxWidth = "380px";
        imgCortes.src = "./img/Entradas y Cortes/TBone.png";     
    });   
}
btnClose[0].addEventListener('click', function(){
    modal.style.display = "none";
    imgCortes.src = "./logoN.png";
    modalCaption.textContent = "";
    simbol.src = "./Vectores/fuego.svg"; 
    btnNext[0].textContent = "Escoger el Término";
    containerImgModal.style.maxWidth = "340px";
});
btnClose[1].addEventListener('click', function(){
    orden[1].style.display = "none";
});
btnSig[0].addEventListener('click', function(){
    if (btnNext[0].textContent == "Escoger el Término") {
        orden[1].style.display = "flex";
        btnNext[1].textContent = "Ver Guarniciones";
    }
});
