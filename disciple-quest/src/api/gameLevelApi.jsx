import { GameLevelModel } from "../models/GameLevelModel";

// Liste des niveaux de jeu (instances de GameLevelModel)
const gameLevels = [
    new GameLevelModel(12, "Judas Iscariote", "Le traître qui a vendu Jésus pour 30 pièces d'argent.", "💔"),
    new GameLevelModel(11, "Jude", "Le fidèle messager de l'amour de Dieu.", "📜"),
    new GameLevelModel(10, "Simon le Zélote", "L'ardent défenseur de la foi.", "🔥"),
    new GameLevelModel(9, "Matthieu", "L'ancien collecteur d'impôts devenu évangéliste.", "📖"),
    new GameLevelModel(8, "Barthélemy", "L'intègre, un disciple sans duplicité.", "🛡️"),
    new GameLevelModel(7, "Philippe", "Le curieux qui a cherché à comprendre davantage.", "🔍"),
    new GameLevelModel(6, "Jacques le Mineur", "Le discret qui servait humblement.", "🌿"),
    new GameLevelModel(5, "Thomas", "L'incrédule qui a retrouvé la foi.", "❓"),
    new GameLevelModel(4, "André", "Le premier disciple à suivre Jésus.", "🎣"),
    new GameLevelModel(3, "Jacques le Majeur", "Le premier apôtre martyr pour sa foi.", "🥉"),
    new GameLevelModel(2, "Jean", "Le disciple bien-aimé qui a écrit l'Apocalypse.", "🥈"),
    new GameLevelModel(1, "Pierre", "Le premier des apôtres et le roc de l'Église.", "🥇"),
    new GameLevelModel(0, "Paul", "L'apôtre des nations et auteur de nombreuses lettres.", "🏆"),
  ];
  
/**
 * Fonction pour récupérer la liste des niveaux de jeu
 * @returns {Array<GameLevelModel>} Liste des niveaux de jeu
 */
export function getGameLevels() {
  return gameLevels;
}

export { GameLevelModel };
