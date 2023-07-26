/** @format */

export function getQuestionDifficulty(level) {
    switch (level) {
        case "easy":
            return "oson";
        case "meduim":
            return "o'rta";
        case "difficult":
            return "qiyin";
        default:
            return "-";
    }
}
