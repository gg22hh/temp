import React from 'react'
import './LoginForm.css'

export const LoginForm = ({ setIsLoggedIn }) => {
    return (
        <form className="form">
            <h1>Вход</h1>
            <input type="text" className="form__login" placeholder="Логин" required/>
            <input
                type="password"
                className="form__password"
                placeholder="Пароль"
				required
            />
            <button onClick={() => setIsLoggedIn(true)} type="submit">
                Отправить
            </button>
        </form>
    );
};
