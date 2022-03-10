import React from "react";
import "./Header.css";

export const Header = ({ isLoggedIn, userName, setIsLoggedIn }) => {
    return (
        <header>
            {isLoggedIn ? (
                <>
                    {`${userName},`}&nbsp;{" "}
                    <button onClick={() => setIsLoggedIn(false)}>Выход</button>
                </>
            ) : (
                <h1>Добро пожаловать, гость!</h1>
            )}
        </header>
    );
};
