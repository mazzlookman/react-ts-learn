import React, { useRef, useState } from "react";
import { Button } from "../atoms/Button";

export const CounterDisplay: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const previousCounter = useRef(0);

    const handleIncrement = () => {
        previousCounter.current = counter; // Simpan nilai count sebelumnya
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>Count: {counter}</h2>
            <p>Previous Counter Value: {previousCounter.current}</p>
            <Button label="Increment" onClick={handleIncrement}/>
        </div>
    )
}