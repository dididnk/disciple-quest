import { QuestionModel } from "../models/QuestionModel";
import { AnswerModel } from "../models/AnswerModel";
// Liste des questions de jeu (instances de QuestionModel)
const questionsLevel1 = [
  new QuestionModel(1, "Quel est le premier livre de la Bible ?", [
    new AnswerModel("Genèse", true),
    new AnswerModel("Exode", false),
    new AnswerModel("Lévitique", false),
    new AnswerModel("Nombres", false),
  ]),
  new QuestionModel(
    2,
    "Combien de jours Dieu a-t-il pris pour créer le monde ?",
    [
      new AnswerModel("7 jours", false),
      new AnswerModel("6 jours", true),
      new AnswerModel("5 jours", false),
      new AnswerModel("8 jours", false),
    ]
  ),
  new QuestionModel(3, "Quel roi est connu pour sa sagesse dans la Bible ?", [
    new AnswerModel("David", false),
    new AnswerModel("Saül", false),
    new AnswerModel("Salomon", true),
    new AnswerModel("Josias", false),
  ]),
  new QuestionModel(4, "Quel disciple a trahi Jésus ?", [
    new AnswerModel("Pierre", false),
    new AnswerModel("Jean", false),
    new AnswerModel("Judas Iscariot", true),
    new AnswerModel("Jacques", false),
  ]),
  new QuestionModel(5, "Combien de livres y a-t-il dans la Bible ?", [
    new AnswerModel("39", false),
    new AnswerModel("27", false),
    new AnswerModel("66", true),
    new AnswerModel("73", false),
  ]),

  // Nouvelle série de questions
  new QuestionModel(6, "Quel prophète a été avalé par un grand poisson ?", [
    new AnswerModel("Élie", false),
    new AnswerModel("Jonas", true),
    new AnswerModel("Moïse", false),
    new AnswerModel("Jérémie", false),
  ]),
  new QuestionModel(
    7,
    "Quel était le métier de Luc, l'auteur de l'évangile ?",
    [
      new AnswerModel("Pêcheur", false),
      new AnswerModel("Médecin", true),
      new AnswerModel("Charpentier", false),
      new AnswerModel("Berger", false),
    ]
  ),
  new QuestionModel(
    8,
    "Dans quel livre de la Bible trouve-t-on les Dix Commandements ?",
    [
      new AnswerModel("Genèse", false),
      new AnswerModel("Exode", true),
      new AnswerModel("Lévitique", false),
      new AnswerModel("Nombres", false),
    ]
  ),
  new QuestionModel(9, "Qui a écrit la majorité des Psaumes dans la Bible ?", [
    new AnswerModel("David", true),
    new AnswerModel("Salomon", false),
    new AnswerModel("Moïse", false),
    new AnswerModel("Ésaïe", false),
  ]),
  new QuestionModel(
    10,
    "Vrai ou Faux : La Bible est divisée en deux parties principales, l'Ancien et le Nouveau Testament.",
    [new AnswerModel("Vrai", true), new AnswerModel("Faux", false)]
  ),
  new QuestionModel(
    11,
    "Vrai ou Faux : Noé a construit l'arche en seulement 40 jours.",
    [new AnswerModel("Vrai", false), new AnswerModel("Faux", true)]
  ),
  new QuestionModel(
    12,
    "Quel était le nom du premier martyr chrétien mentionné dans le Nouveau Testament ?",
    [
      new AnswerModel("Étienne", true),
      new AnswerModel("Paul", false),
      new AnswerModel("Pierre", false),
      new AnswerModel("Jacques", false),
    ]
  ),
  new QuestionModel(13, "Quel apôtre a écrit le livre de l'Apocalypse ?", [
    new AnswerModel("Jean", true),
    new AnswerModel("Pierre", false),
    new AnswerModel("Paul", false),
    new AnswerModel("Jacques", false),
  ]),
];

/**
 * Fonction pour récupérer la liste des questions de jeu en ordre aléatoire
 * @returns {Array<QuestionModel>} Liste des questions de jeu aléatoires
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Fonction pour récupérer la liste des questions de jeu
 * @returns {Array<QuestionModel>} Liste des questions de jeu
 */
export function getQuiz(level) {
  // if (level === 1) {
  //   return shuffleArray([...questionsLevel1]);
  // }
  // return shuffleArray([...questionsLevel1]);
  return questionsLevel1;
}

export { QuestionModel };
