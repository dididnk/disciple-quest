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
  { id: 12, content: "✟ Judas Iscariot (Traître)" },
  { id: 11, content: "✟ Barthélemy" },
  { id: 10, content: "✟ Thaddée" },
  { id: 9, content: "✟ Simon le Zélote" },
  { id: 8, content: "✟ Jacques, fils d'Alphée" },
  { id: 7, content: "✟ Thomas" },
  { id: 6, content: "✟ Philippe" },
  { id: 5, content: "✟ André" },
  { id: 4, content: "✟ Matthieu (Évangéliste)" },
  { id: 3, content: "✟ Luc (Évangéliste)" },
  { id: 2, content: "✟ Marc (Évangéliste)" },
  { id: 1, content: "✟ Jean (Disciple bien-aimé)" },
];


export const randomQuizQuestions = shuffleArray([...quizQuestions]);