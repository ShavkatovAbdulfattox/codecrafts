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

export function setToken(token) {
    localStorage.setItem("codecrafters_user_token", JSON.stringify(token));
}

export function getToken() {
    return JSON.parse(localStorage.getItem("codecrafters_user_token"))
}

export function removeToken() {
    return localStorage.removeItem("codecrafters_user_token")
}