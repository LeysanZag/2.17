import {
    getTodos
} from './api.js'

export function checkStatus500(response) {
    if (response.status === 500) {
        throw new Error('Ошибка сервера')
    }
}

export function checkStatus400(response) {
    if (response.status === 400) {
        throw new Error('Неверный запрос')
    }
}

export function checkStatus201(response) {
    if (response.status === 201) {
        return response.json()
    }
}

export function checkIsInternet(window) {
    if (window.navigator.onLine === false) {
        alert('Проблема с интернетом, проверьте подключение')
    }
}

export function checkStatus401(response) {
    if (response.status === 401) {

        getTodos()
        throw new Error('Нет авторизации')
    }
    return response.json('')
}

export function todoException500(error) {
    if (error.message === 'Ошибка сервера') {
        alert('Сервер не отвечает, попробуйте позже')
    }
}
export function todoException400(error) {
    if (error.message === 'Неверный запрос') {
        alert('Короткое имя или текст комментария, минимум 3 символа');
    } else {
        throw error;
    }
}
export function checkStatus400(response) {
    if (response.status === 400) {
        return Promise.reject(new Error('Неверный запрос'));
    }
    return response.json();
}

export function todoException400(error) {
    if (error.message === 'Неверный запрос') {
        alert('Ошибка: неверный запрос');
    } else {
        throw error;
    }
}