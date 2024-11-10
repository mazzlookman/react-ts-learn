import React, { useState } from "react";
import { Button } from "../atoms/Button";

export const CounterDisplay: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <Button label="Increment" onClick={handleIncrement}/>
        </div>
    )
}