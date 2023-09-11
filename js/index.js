// var audio = document.createElement('audio');
//     var first = true;
//     window.addEventListener('mousedown', oky);
//     function oky(){
//         if(!first) return;
//         first = false ;
//         audio.src="../asset/AUDIO PAGE.mp3";
//         audio.play()
//     }


//animation
const texT = document.querySelector('.second-text');
    const textload = () =>{
        setTimeout(() => {
            texT.textContent = "j'espere que vous allez bien" ;
        }, 0);
        setTimeout(() => {
            texT.textContent = "vous etes tombez sur le bon" ;
        }, 3900);
        setTimeout(() => {
            texT.textContent = "ici vous allez apprendre tous " ;
        }, 6800);
        setTimeout(() => {
            texT.textContent = " Ce qui concerner l'informatique " ;
        }, 11400);
    }
    textload();
    setInterval(textload, 12000);




           // format phone
const menu = document.querySelector('.menu-logo') ;
    const lien = document.getElementById('lien');
    menu.addEventListener('click',()=>{
    lien.classList.toggle('new')
        })
        let mot = document.getElementById('bienvenu');
        let text2 = 'SCHOOL CENTER ' ;
    
        let text = 'BIENVENU CHEZ '+ text2;
        const limit= text.length
        const interval = 700 ;
        let index = 0 ;
        const idInterval = setInterval(function () {
            console.log(index)
                if(index <= limit){
                    mot.innerText= text.slice(0, index++)
                }
                else{
                    clearInterval(idInterval)
                }
            }, interval)