var audio = document.createElement('audio');
    var first = true;
    window.addEventListener('mousedown', oky);
    function oky(){
        if(!first) return;
        first = false ;
        audio.src="../asset/AUDIO PAGE.mp3";
        audio.play()
    }
    // pour format phone
document.getElementById('form1').addEventListener("submit", function (e){
    let nom = document.getElementById('nom_login').value ;
    let mot2 = document.getElementById('mot_de_passe').value;
    if(nom == mot2){
        alert('bienenu') ;
    }
    else{
        e.preventDefault()
        let mot = document.querySelector("p") ;
        let pharse = ' clique ici pour crée un compte'
        const limit= pharse.length
        const interval = 600 ;
        let index = 0 ;
        const idInterval = setInterval(function () {
                if(index <= limit){
                    mot.innerText = pharse.slice(0, index++)
                }
                else{
                    clearInterval(idInterval)
                }
            }, interval)
    }
})
document.querySelector('p').addEventListener('click', function(){
    let lien = document.querySelector('.center3') ;
    lien.classList.toggle('new')
    let div = document.querySelector('.div');
    div.classList.toggle('new2')
    let header = document.querySelector('header');
    header.classList.toggle('new1')
    let mot_de_passe = document.getElementById('mot_de_passe');
    let vide = ""
    mot_de_passe.value = vide ;
})
document.getElementById('form').addEventListener('submit', function (e){
    let nom = document.getElementById('nom_inscription').value ;
    let message = 'Bienvenue' ;
    alert(message+' '+nom)
})
// pour format ordinateur