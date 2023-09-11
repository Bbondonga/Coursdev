// traitement du champs input ( numero)
document.getElementById('num').addEventListener("input", function () {
    let num = document.getElementById('num').value;
    let nombre = num.toString();
    const verifiaction = nombre.substring(0, 3);

    if (verifiaction == "243") {
        if (num.length == 12) {
            console.log('bienvenu !');
            document.getElementById('message').innerHTML = "<span style='color: black';>Bingo ! CLIQUE SUR CONFIRME</span>"
        }
        else if (num.length < 12) {
            document.getElementById('message').innerHTML = "<strong style='color: black';>" + num + "</strong>" + " les numero n'est pas au complet";
        }
        else {
            document.getElementById('message').innerHTML = "<strong style='color: black';>" + num + "</strong>" + " Vous avez depase LA limite";
        }
    } else {
        document.getElementById('message').innerHTML = "<strong style='color: black';> Veuillez inseere le code du pays de la RDC </strong>";
    }

})
let num, nom, post_nom, prenom, email, body, test, phrase;
// formulaire pour ordinateur
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    // ordi
    num = document.getElementById('num').value;
    nom = document.getElementById('nom').value;
    post_nom = document.getElementById('post-nom').value;
    email = document.getElementById('email').value;
    prenom = document.getElementById('prenom').value;
    body;
    phrase = "veuillez insere les +243 code du pays ";
    nom = nom.trim();
    post_nom = post_nom.trim();
    prenom = prenom.trim();
    email = email.trim();
    if (nom == "" || prenom == "" || post_nom == "") {
        alert("Veuillez remplir les champs vide !")
    }
    else if (nom.length <= 2 || prenom.length <= 2 || post_nom.length <= 2) {
        nom = nom.length;
        prenom = prenom.length;
        post_nom = post_nom.length;
        test = Math.min(nom, prenom, post_nom);
        alert("il existe pas de nom,post-nom,prenom a faible caractere " + test);
    }
    else {
        if (num == false) {
            // envoi du formulaire pour ordinateur
            body = "<span style='font-size: 30px;'>nom: <span>" + nom + "<br><span style='font-size: 30px;'>post-nom:<span>" + post_nom + "<br> <span 'font-size: 30px;'>prenom:</span>" > + prenom + "<br><span 'font-size: 30px;'>email:</span>" + email;
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "benybadibanga8@gmail.com",
                Password: "268471E8AF66E9C911557791C0139FD8669A",
                SecureToken: "9b72545c-fe47-44db-9b54-cbcb62c1f22d",
                To: 'benybadibanga8@gmail.com',
                From: "benybadibanga8@gmail.com",
                Subject: "MESSAGE FORMAT ORDINATEUR COURS" + nom,
                Body: body
            }).then(
                message => alert("message envoye avec succes !")
            );
        } else {
            console.log("format phone");
        }
    }
})
// formulaire pour phone
document.getElementById("form").addEventListener('submit', function (e) {
    e.preventDefault()
    // phone
    num = document.getElementById('num').value;
    nom = document.getElementById('nom1').value;
    email = document.getElementById('email1').value;
    prenom = document.getElementById('prenom1').value;
    body;
    phrase = "veuillez insere les +243 code du pays ";
    nom = nom.trim();
    prenom = prenom.trim();
    email = email.trim();
    if (nom == "" || prenom == "") {
        alert("Veuillez remplir les champs vide !");
    }
    else if (nom.length <= 2 || prenom.length <= 2) {
        nom = nom.length;
        prenom = prenom.length;
        test = Math.min(nom, prenom);
        alert("il existe pas de nom,prenom a faible caractere " + test);
    }
    else {
        if (num == false) {
            console.log("machine");
        } else {
            if (num.includes("243")) {
                let nombre = num.toString();
                const verifiaction = nombre.substring(0, 3);
                if (verifiaction == "243") {
                    if (num.length == 12) {
                        body = "<span 'font-size: 30px;'>nom: <span>" + nom + "<br> <span 'font-size: 30px;'>prenom:<span>" + prenom + "<br><span 'font-size: 30px;'> numero:<span>" + num + "<br><span 'font-size: 30px;'> email:<span>" + email;
                        // envoi du formulaire pour phone
                        Email.send({
                            Host: "smtp.elasticemail.com",
                            Username: "benybadibanga8@gmail.com",
                            Password: "268471E8AF66E9C911557791C0139FD8669A",
                            SecureToken: "9b72545c-fe47-44db-9b54-cbcb62c1f22d",
                            To: 'benybadibanga8@gmail.com',
                            From: "benybadibanga8@gmail.com",
                            Subject: "MESSAGE FORMAT phone COURS" + nom,
                            Body: body
                        }).then(
                            message => alert("message envoye avec succes !")
                        );

                        setInterval(() => {
                            location.reload()
                        }, 4000);
                    }
                    else {
                        alert("VEUILLEZ REMPLIR LE CHAMPT NUMERO")
                    }
                }
            }

            else {
                document.getElementById('message').innerHTML = phrase;
            }
        }
    }
});
