/** @format */
import { message } from "antd";

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

// UserData and Token Functions
const UNIQUE_STORAGE_TOKEN_KEY = "codecrafters_user_token";
const UNIQUE_STORAGE_USER_KEY = "codecrafters_user_data";

// UserData
export function getUserData() {
    return getFromLocalStorage(UNIQUE_STORAGE_USER_KEY);
}

export function saveUserData(userData) {
    saveToLocalStorage(UNIQUE_STORAGE_USER_KEY, userData);
}

export function removeUserData() {
    removeFromLocalStorage(UNIQUE_STORAGE_USER_KEY);
}

// Token
export function getToken() {
    return getFromLocalStorage(UNIQUE_STORAGE_TOKEN_KEY);
}
export function saveToken(token) {
    saveToLocalStorage(UNIQUE_STORAGE_TOKEN_KEY, token);
}

export function removeToken() {
    removeFromLocalStorage(UNIQUE_STORAGE_TOKEN_KEY);
}

// LocalStorage
export function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
export function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
export function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

// Deafult Error Catcher
// Statuslarga qarab habar chiqaradi
export function ErrorCatcher(errorResponse) {
    const errorMessage = errorResponse.data?.error || "";
    switch (errorResponse.status) {
        case 404: {
            message.error(`${errorMessage} ushbu yo'l topilmadi!`);
            break;
        }
        case 500: {
            message.error(`Serverdan xatolik ${errorMessage}`);
            break;
        }
        case 401: {
            message.error(`Iltimos avtorizatsiya qiling!`);
            break;
        }
        default:
            message.error(`Xatolik! ${errorMessage}`);
    }
}
