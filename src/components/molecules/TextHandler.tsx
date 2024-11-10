import React, { useState } from "react";
import { TextInput } from "../atoms/TextInput";
import DisplayText from "../atoms/DisplayText";

function TextHandler() {
    const [inputText, setInputText] = useState<string>('');

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputText(e.target.value);
    }

    return (
        <div>
            <TextInput value={inputText} onChange={handleInputChange} />
            <DisplayText text={inputText} />
        </div>

    )
}

export default TextHandler;