function calculer() {
    let prix1 = document.getElementById("prix1").value;
    let quantite1 = document.getElementById("quantite1").value;
    document.getElementById("resultat1").value = prix1 * quantite1;

    let prix2 = document.getElementById("prix2").value;
    let quantite2 = document.getElementById("quantite2").value;
    document.getElementById("resultat2").value = prix2 * quantite2;

    let prix3 = document.getElementById("prix3").value;
    let quantite3 = document.getElementById("quantite3").value;
    document.getElementById("resultat3").value = prix3 * quantite3;

    let total = (prix1 * quantite1) + (prix2 * quantite2) + (prix3 * quantite3);
    document.getElementById("total").value = total;
}

function reinitialiser() {
    document.getElementById("prix1").value = "";
    document.getElementById("quantite1").value = "";
    document.getElementById("resultat1").value = "";

    document.getElementById("prix2").value = "";
    document.getElementById("quantite2").value = "";
    document.getElementById("resultat2").value = "";

    document.getElementById("prix3").value = "";
    document.getElementById("quantite3").value = "";
    document.getElementById("resultat3").value = "";

    document.getElementById("total").value = "";
}