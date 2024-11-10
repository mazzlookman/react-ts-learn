import React from "react";
import { CounterDisplay } from "../components/molecules/CounterDisplay";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Counter App</h1>
            <CounterDisplay />
            <nav>
                <Link to='/message'>Go to Message Page</Link>
            </nav>
        </div>
    )
}