// Réponses correctes
const correctAnswers = {
    q1: "2", // Devenir le Roi des Pirates
    q2: "2", // Gomu Gomu no Mi
    q3: "3", // Monkey D. Dragon
    q4: "2", // Sanji
    q5: "1", // Franky
    q6: "1", // Fushia
    q7: "2", // 3 milliards de berries
    q8: "1", // Chopper
    q9: "2", // Koshiro
    q10: "2" // Robin
  };
  
  // Correction des réponses
  document.getElementById("btnCorrection").addEventListener("click", function () {
    const form = document.getElementById("quizForm");
    let score = 0;
  
    for (const question in correctAnswers) {
      const userAnswer = form[question].value;
      if (userAnswer === correctAnswers[question]) {
        score++;
      }
    }
  
    alert(`Votre score est : ${score}/10`);
  });
  
  // Affichage des corrigés
  document.getElementById("btnCorrige").addEventListener("click", function () {
    alert(`Réponses correctes :\n
  1. Devenir le Roi des Pirates\n2. Gomu Gomu no Mi\n3. Monkey D. Dragon\n4. Sanji\n5. Franky\n6. Fushia\n7. 3 milliards de berries\n8. Chopper\n9. Koshiro\n10. Robin`);
  });