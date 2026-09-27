const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");
const tipButton = document.getElementById("tipButton");
const tip = document.getElementById("tip");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("show");
});

tipButton.addEventListener("click", function () {
    tip.textContent = "Порада: гальмуй до повороту, а на виході з нього поступово додавай газ.";
});

const quizQuestions = [
 { q: "Яка марка має модель 911 GT3?", options: ["Porsche", "Toyota", "Honda"], answer: "Porsche" },
  { q: "BMW GT3 модель?", options: ["X5", "M4", "Z4"], answer: "M4" },
  { q: "Mercedes GT3 базується на?", options: ["GLA", "C-Class", "AMG GT"], answer: "AMG GT" },
  { q: "Що важливіше на трасі?", options: ["Музика", "Колір авто", "Траєкторія"], answer: "Траєкторія" },
  { q: "GT3 — це категорія?", options: ["Вантажівок", "Гоночних авто", "Мотоциклів"], answer: "Гоночних авто" },
  { q: "Що робити перед поворотом?", options: ["Гальмувати", "Газувати", "Закрити очі"], answer: "Гальмувати" },
  { q: "Що додаємо після апекса?", options: ["Газ", "Гальмо", "Сигнал"], answer: "Газ" },
  { q: "GT3 авто мають?", options: ["Великий багажник", "Крила як у літака", "Аеродинаміку"], answer: "Аеродинаміку" },
  { q: "Porsche 911 GT3 має привід?", options: ["Передній", "Задній", "Повний"], answer: "Задній" },
  { q: "BMW M4 GT3 — це?", options: ["Спортивний седан", "Гоночне купе", "Кросовер"], answer: "Гоночне купе" },
  { q: "Mercedes-AMG GT3 створений для?", options: ["GT-серій", "Таксі", "Дрифту"], answer: "GT-серій" },
  { q: "Що означає GT?", options: ["Gran Turismo", "Great Truck", "Green Tire"], answer: "Gran Turismo" },
  { q: "Що важливо для швидкості?", options: ["Фарба", "Контроль", "Наліпки"], answer: "Контроль" },
  { q: "GT3 авто часто беруть участь у?", options: ["24 години Ле-Мана", "Ралі Дакар", "Формула 1"], answer: "24 години Ле-Мана" },
  { q: "Основна порада для новачка?", options: ["Плавність рухів", "Максимальний газ завжди", "Ігнорувати гальма"], answer: "Плавність рухів" }
];

const quizContainer = document.createElement("div");
quizContainer.classList.add("quiz");
document.querySelector("main").appendChild(quizContainer);

let currentQuestion = 0;
let score = 0;

function showQuestion(index) {
  quizContainer.innerHTML = ""; 

  const q = quizQuestions[index];


  const questionText = document.createElement("p");
  questionText.textContent = q.q;
  quizContainer.appendChild(questionText);


  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.classList.add("quiz-option");
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      if (opt == q.answer) {
        score++;
        alert(" Правильно!");
      } else {
        alert(" Неправильно!");
      }
      if (index + 1 < quizQuestions.length) {
        showQuestion(index + 1);
      } else {
        quizContainer.innerHTML = "";
        const result = document.createElement("h3");
        result.textContent = `Квіз завершено! Твій результат: ${score}/${quizQuestions.length}`;
        quizContainer.appendChild(result);
      }
    });
    quizContainer.appendChild(btn);
  });
}

showQuestion(currentQuestion);
