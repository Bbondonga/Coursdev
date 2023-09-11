// var audio = document.createElement('audio');
// var first = true;
// window.addEventListener('mousedown', oky);
// function oky(){
//     if(!first) return;
//     first = false ;
//     audio.src="../asset/AUDIO PAGE.mp3";
//     audio.play()
// }
    document.getElementById('form').addEventListener('submit', function(e){
        e.preventDefault()
       let span_nom = document.getElementById('nom1').innerHTML ;
       let span_comm = document.getElementById('comm').innerHTML ;
       let nom = document.getElementById('nom').value ;
       let mes = document.getElementById('message').value ;
    if(span_nom == "" || span_comm == ''){
        let Newclass = document.querySelector(".com") ;
         Newclass.classList.toggle('new')
       document.getElementById('nom1').innerHTML = nom ;
       document.getElementById('comm').innerHTML = mes ;
        if(document.querySelector("span").innerHTML != ""){
            let vide = "";
            document.getElementById('nom').value = vide ;
            document.getElementById('message').value = vide ;
        }
    }
    else{
        let resul = confirm("souhaite vous change le information du commentaire")
        if(resul == true){
            setInterval(() =>{
                document.getElementById('nom1').innerHTML = nom ;
                document.getElementById('comm').innerHTML = mes ;
            },1000)
        }
        else{
            let vide = "";
            document.getElementById('nom').value = vide ;
            document.getElementById('message').value = vide ;
        }
    }
    })