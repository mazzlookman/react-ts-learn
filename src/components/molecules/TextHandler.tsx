import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "../atoms/TextInput";
import DisplayText from "../atoms/DisplayText";

function TextHandler() {
    const [inputText, setInputText] = useState<string>('');

    // Membuat referensi untuk input
    const inputRef = useRef<HTMLInputElement>(null);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputText(e.target.value);
    }

    // Gunakan useEffect untuk fokus otomatis saat komponen dimuat pertama kali
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus(); // Fokuskan input saat komponen dimuat
        }
    }, []); // Efek dijalankan setiap kali inputText berubah

    return (
        <div>
            <TextInput 
                ref={inputRef}
                value={inputText} 
                onChange={handleInputChange} 
            />
            <DisplayText text={inputText} />
        </div>

    )
}

export default TextHandler;