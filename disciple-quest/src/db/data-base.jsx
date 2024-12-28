/* eslint-disable no-unused-vars */
const quizQuestions = [
  {
    id: 1,
    question: "Quel est le premier livre de la Bible ?",
    answers: [
      { text: "Genèse", correct: true },
      { text: "Exode", correct: false },
      { text: "Lévitique", correct: false },
      { text: "Nombres", correct: false },
    ],
  },
  {
    id: 2,
    question: "Combien de jours Dieu a-t-il pris pour créer le monde ?",
    answers: [
      { text: "7 jours", correct: false },
      { text: "6 jours", correct: true },
      { text: "5 jours", correct: false },
      { text: "8 jours", correct: false },
    ],
  },
  {
    id: 3,
    question: "Quel roi est connu pour sa sagesse dans la Bible ?",
    answers: [
      { text: "David", correct: false },
      { text: "Saül", correct: false },
      { text: "Salomon", correct: true },
      { text: "Josias", correct: false },
    ],
  },
  {
    id: 4,
    question: "Quel disciple a trahi Jésus ?",
    answers: [
      { text: "Pierre", correct: false },
      { text: "Jean", correct: false },
      { text: "Judas Iscariot", correct: true },
      { text: "Jacques", correct: false },
    ],
  },
  {
    id: 5,
    question: "Combien de livres y a-t-il dans la Bible ?",
    answers: [
      { text: "39", correct: false },
      { text: "27", correct: false },
      { text: "66", correct: true },
      { text: "73", correct: false },
    ],
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const levels = [
  { id: 1, content: "✟ Niveau 1" },
  { id: 2, content: "✟ Niveau 2" },
  { id: 3, content: "✟ Niveau 3" },
  { id: 4, content: "✟ Niveau 4" },
  { id: 5, content: "✟ Niveau 5" },
  { id: 6, content: "✟ Niveau 6" },
  { id: 7, content: "✟ Niveau 7" },
  { id: 8, content: "✟ Niveau 8" },
  { id: 9, content: "✟ Niveau 9" },
  { id: 10, content: "✟ Niveau 10" },
  { id: 11, content: "✟ Niveau 11" },
  { id: 12, content: "✟ Niveau 12" },
].reverse();

export const randomQuizQuestions = shuffleArray([...quizQuestions]);