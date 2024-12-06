function affichagetab() {
    document.write("<table border='2' width='30%'>");
    for (let i = 0; i <= 5; i++) {
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}

function affichagetab2() {
    let len = prompt("Combien de lignes?");
    document.write("<table border='2' width='30%'>");
    for (let i = 0; i < len; i++) {
        document.write("<tr><td>" + (i + 1) + "</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}

function cdc() {
    let chaine = prompt("Donner un mot");
    document.write(chaine.toUpperCase() + "<br>");
    document.write(chaine.toLowerCase() + "<br>");
    document.write("La chaîne contient " + chaine.length + " caractères.<br>");
    document.write("La première lettre est : " + chaine.charAt(0) + "<br>");
}

function seconecter() {
    let login = prompt("Donnez votre nom d'utilisateur");
    let password = prompt("Entrez votre mot de passe");
    if (login === "admin" && password === "admin") {
        document.write("Bienvenue : " + login);
    } else {
        alert("Accès refusé");
    }
}

function seconecter3() {
    let i = 0;
    do {
        let login = prompt("Donnez votre nom d'utilisateur");
        let password = prompt("Entrez votre mot de passe");
        if (login === "admin" && password === "admin") {
            document.write("Bienvenue : " + login);
            break;
        } else {
            alert("Accès refusé");
            i++;
        }
    } while (i < 3);
    if (i === 3) alert("Délai dépassé");
}

function ajouterLigne() {
    let nom = document.getElementById("t1").value;
    let age = document.getElementById("t2").value;
    if (nom === "" || age === "") {
        alert("Un ou deux champs sont vides.");
    } else if (Number(age) < 10 || Number(age) > 20) {
        alert("Âge invalide.");
    } else {
        let table = document.getElementById("myTable");
        let newRow = table.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        cell1.innerHTML = nom;
        cell2.innerHTML = age;
    }
}
