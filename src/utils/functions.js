/** @format */
import {message} from "antd";

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


// Token Functions
export function setToken(token) {
    localStorage.setItem("codecrafters_user_token", JSON.stringify(token));
}

export function getToken() {
    return JSON.parse(localStorage.getItem("codecrafters_user_token"))
}

export function removeToken() {
    return localStorage.removeItem("codecrafters_user_token")
}

// Deafult Error Catcher
// Statuslarga qarab habar chiqaradi
export function ErrorCatcher(errorResponse) {
    const errorMessage = errorResponse.data?.error;
    switch (errorResponse.status) {
        case 404: {
            message.error(`"${errorMessage}" ushbu yo'l topilmadi!`)
            break;
        }
        case 500: {
            message.error(`Serverdan xatolik ${errorMessage}`)
            break;
        }
        case 401: {
            message.error(`Iltimos avtorizatsiya qiling!`)
            break;
        }
        default:
            message.error(`Xatolik! "${errorMessage}"`)
    }
}