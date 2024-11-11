import React from "react";
import { CounterDisplay } from "../components/molecules/CounterDisplay";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
    return (
        <div>
            <h1 className="mb-4">Welcome to the Counter App</h1>
            <CounterDisplay />
            <nav className="flex gap-2 justify-center">
                <Link to='/message'>Go to Message Page</Link> |
                <Link to='/products'>Go to Products Page</Link>
            </nav>        
        </div>
    )
}