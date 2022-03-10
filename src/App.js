import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Posts } from "./components/Posts/Posts";
import { LoginForm } from "./components/LoginForm/LoginForm";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
	const userName = 'Gusen'

    return (
        <div>
            <Header
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
                userName={userName}
            />
            {isLoggedIn ? (
                <Posts />
            ) : (
                <LoginForm setIsLoggedIn={setIsLoggedIn} />
            )}
        </div>
    );
}

export default App;
