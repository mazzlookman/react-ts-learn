import React from "react";

interface DisplayTextProps {
    text: string;
}

const DisplayText: React.FC<DisplayTextProps> = ({ text }) => {
    return <p>{text}</p>
}

export default DisplayText;