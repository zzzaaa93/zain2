function loadExercise(exercise) {
    const demoContainer = document.getElementById("demo");
    switch (exercise) {
      case 'somme':
        demoContainer.innerHTML = `
          <h3>Somme</h3>
          <input type="number" id="num1" placeholder="Nombre 1">
          <input type="number" id="num2" placeholder="Nombre 2">
          <button onclick="calculateSum()">Calculer</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'afficher1-10':
        demoContainer.innerHTML = `
          <h3>Afficher les nombres de 1 à 10</h3>
          <button onclick="displayNumbers()">Afficher</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'trouverMax':
        demoContainer.innerHTML = `
          <h3>Trouver le plus grand</h3>
          <input type="number" id="num1" placeholder="Nombre 1">
          <input type="number" id="num2" placeholder="Nombre 2">
          <button onclick="findMax()">Trouver</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'moyenne':
        demoContainer.innerHTML = `
          <h3>Calculer la moyenne</h3>
          <input type="number" id="num1" placeholder="Nombre 1">
          <input type="number" id="num2" placeholder="Nombre 2">
          <input type="number" id="num3" placeholder="Nombre 3">
          <button onclick="calculateAverage()">Calculer</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'pairImpair':
        demoContainer.innerHTML = `
          <h3>Vérifier si un nombre est pair</h3>
          <input type="number" id="num" placeholder="Entrez un nombre">
          <button onclick="checkEvenOdd()">Vérifier</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'inverserChaine':
        demoContainer.innerHTML = `
          <h3>Inverser une chaîne</h3>
          <input type="text" id="text" placeholder="Entrez un texte">
          <button onclick="reverseString()">Inverser</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'compterVoyelles':
        demoContainer.innerHTML = `
          <h3>Compter les voyelles</h3>
          <input type="text" id="text" placeholder="Entrez un texte">
          <button onclick="countVowels()">Compter</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'carreNombre':
        demoContainer.innerHTML = `
          <h3>Calculer le carré d'un nombre</h3>
          <input type="number" id="num" placeholder="Entrez un nombre">
          <button onclick="calculateSquare()">Calculer</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'tableMultiplication':
        demoContainer.innerHTML = `
          <h3>Table de multiplication</h3>
          <input type="number" id="num" placeholder="Entrez un nombre">
          <button onclick="generateMultiplicationTable()">Générer</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'nombrePremier':
        demoContainer.innerHTML = `
          <h3>Vérifier un nombre premier</h3>
          <input type="number" id="num" placeholder="Entrez un nombre">
          <button onclick="checkPrime()">Vérifier</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'trierTableau':
        demoContainer.innerHTML = `
          <h3>Trier un tableau</h3>
          <input type="text" id="array" placeholder="Entrez des nombres séparés par des virgules">
          <button onclick="sortArray()">Trier</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'factorielle':
        demoContainer.innerHTML = `
          <h3>Calculer une factorielle</h3>
          <input type="number" id="num" placeholder="Entrez un nombre">
          <button onclick="calculateFactorial()">Calculer</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'nombreAleatoire':
        demoContainer.innerHTML = `
          <h3>Générer un nombre aléatoire</h3>
          <button onclick="generateRandomNumber()">Générer</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'sommeTableau':
        demoContainer.innerHTML = `
          <h3>Calculer la somme d'un tableau</h3>
          <input type="text" id="array" placeholder="Entrez des nombres séparés par des virgules">
          <button onclick="calculateArraySum()">Calculer</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      case 'chercherElement':
        demoContainer.innerHTML = `
          <h3>Trouver un élément dans un tableau</h3>
          <input type="text" id="array" placeholder="Entrez des éléments séparés par des virgules">
          <input type="text" id="element" placeholder="Élément à chercher">
          <button onclick="findElement()">Chercher</button>
          <p>Résultat : <span id="result"></span></p>`;
        break;
      default:
        demoContainer.innerHTML = `<p>Exercice non implémenté.</p>`;
    }
  }
  
  // Fonctions associées aux exercices
  
  function calculateSum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = num1 + num2;
  }
  
  function displayNumbers() {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1).join(", ");
    document.getElementById("result").textContent = numbers;
  }
  
  function findMax() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = Math.max(num1, num2);
  }
  
  // Complétez les fonctions restantes ici pour chaque exercice
  // .
  // Fonction pour vérifier si le nombre est pair ou impair
function checkEvenOdd() {
    const num = parseInt(document.getElementById("num").value);
    if (isNaN(num)) {
      document.getElementById("result").textContent = "Veuillez entrer un nombre valide.";
    } else {
      document.getElementById("result").textContent = num % 2 === 0 ? "Pair" : "Impair";
    }
  }
  
  // Fonction pour vérifier si un nombre est premier
  function checkPrime() {
    const num = parseInt(document.getElementById("num").value);
    if (isNaN(num) || num < 2) {
      document.getElementById("result").textContent = "Veuillez entrer un nombre valide.";
    } else {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      document.getElementById("result").textContent = isPrime ? "Premier" : "Non premier";
    }
  }
  
  // Correction des autres exercices
  // Vérifier l'inverse d'une chaîne de texte
  function reverseString() {
    const text = document.getElementById("text").value;
    if (text.trim() === "") {
      document.getElementById("result").textContent = "Veuillez entrer une chaîne de caractères.";
    } else {
      document.getElementById("result").textContent = text.split("").reverse().join("");
    }
  }
  
  // Compter les voyelles
  function countVowels() {
    const text = document.getElementById("text").value;
    const vowelCount = (text.match(/[aeiouAEIOU]/g) || []).length;
    document.getElementById("result").textContent = `Nombre de voyelles : ${vowelCount}`;
  }
  
  // Complément des autres exercices.