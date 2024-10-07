function test_age(){
    let age = prompt("quelle est votre age ? ");
    if (age<18)
{
    document.write("Attention accès refusé, vous êtes mineur");
    document.body.style.backgroundColor ="red";
    
}

else
{
    document.write("Vous êtes majeur");
    document.body.style.backgroundColor ="green"
}
}

function affichage(){

    let prenom = prompt("saisir  votre prenom");
    let nom = prompt("sasir est votre nom");
    document.write ('<div style="border:5px solid blue; width:400px; height:300px; margin:auto; padding:150px;">');
    document.write ("bonjour "+prenom +" " + nom);
    document.write ("/<div");
    }

    function test_couleur() { 
        let couleur = prompt("Donner une couleur ")
        if (couleur=="rouge") {
            document.body.style.backgroundColor = "red"
        } 
        else if (couleur=="bleu") {
            document.body.style.backgroundColor = "blue"
        }
        
        else if (couleur=="vert") {
            document.body.style.backgroundColor = "green"
        }
        
        else {
            document.write("couleur non comprise")
        }

    }

    function calcul_moyenne() {
        var n1 = prompt("Donner la première note :");
        var n2 = prompt("Donner la deuxième note :");
        var n3 = prompt("Donner la troisième note :");
    
        var somme = Number(n1) + Number(n2) + Number(n3);
        var moyenne = somme / 3;
    
        document.write("Voici la somme des notes : " + somme + "<br>");
        document.write("Voici la moyenne : " + moyenne + "<br>");
    
        if (moyenne >= 10 && moyenne <= 14) {
            document.write("Admis<br>");
            document.body.style.backgroundColor = "green";
        } else if (moyenne < 10) {
            document.write("Non admis<br>");
            document.body.style.backgroundColor = "red";
        } else {
            document.write("Moyenne invalide<br>");
        }
        if (moyenne>14 && moyenne <= 20))
        document.write("Admis bien<br>");
        document.body.style.backgroundColor = "#01f308";
    }
     