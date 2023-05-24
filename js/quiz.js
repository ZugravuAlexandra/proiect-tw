const quizForm = document.getElementById('quiz');
const resultDiv = document.getElementById('results');

let pisiImg = "kitty.jpg";
let motanImg = "puss.jpg";
let peroImg = "perro.jpg";

// Resetați toate câmpurile de tip radio la încărcarea paginii
const radioButtons = quizForm.querySelectorAll('input[type=radio]');
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].checked = false;
}

quizForm.addEventListener('submit', e => {
  e.preventDefault();

  // calculează scorul total
  const q1Value = parseInt(quizForm.querySelector('input[name="q1"]:checked').value);
  const q2Value = parseInt(quizForm.querySelector('input[name="q2"]:checked').value);
  const q3Value = parseInt(quizForm.querySelector('input[name="q3"]:checked').value);
  const q4Value = parseInt(quizForm.querySelector('input[name="q4"]:checked').value);
  const q5Value = parseInt(quizForm.querySelector('input[name="q5"]:checked').value);
  const q6Value = parseInt(quizForm.querySelector('input[name="q6"]:checked').value);

  const totalScore = q1Value + q2Value + q3Value + q4Value + q5Value + q6Value;

  // determină personajul potrivit în funcție de scorul obținut
  let resultText = '';
  let resultImageSrc = '';
  if (totalScore < 5) {
    resultText = 'Felicitari! Ești Kitty Softpaws';
    resultImageSrc = pisiImg;
  } else if (totalScore < 7) {
    resultText = 'Felicitari! Ești Motanul Încălțat';
    resultImageSrc = motanImg;
  } else {
    resultText = 'Felicitari! Ești Pero';
    resultImageSrc = peroImg;
  }

  // afișează scorul și imaginea potrivită
  resultDiv.style.display = 'block';
  document.getElementById('result-text').textContent = resultText;
  document.getElementById('result-image').src = resultImageSrc;

  // Utilizarea setTimeout()
  setTimeout(() => {
    const currentDate = new Date();
    console.log(`Aceasta este o înregistrare realizată la ora ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`);
  }, 3000);

  // Utilizarea setInterval()
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    console.log(`Au trecut ${counter} secunde.`);

    if (counter >= 5) {
      clearInterval(interval);
      console.log("Intervalul s-a încheiat.");
    }
  }, 1000);

  // Utilizarea LocalStorage
  localStorage.setItem("score", totalScore);
  const storedScore = localStorage.getItem("score");
  console.log(`Scorul stocat în LocalStorage: ${storedScore}`);

  // Utilizarea unei metode din clasa Math
  const randomNum = Math.floor(Math.random() * 10);
  console.log(`Numărul generat aleatoriu: ${randomNum}`);

  // Utilizarea unei metode din clasa Array
  const array = [1, 2, 3, 4, 5];
  console.log(`Lungimea array-ului: ${array.length}`);

  // Utilizarea unei metode din clasa String
  const string = "Hello, World!";
  console.log(`Lungimea string-ului: ${string.length}`);

  // Utilizarea unei metode din clasa Date
  const currentDate = new Date();
  console.log(`Anul curent: ${currentDate.getFullYear()}`);
});
