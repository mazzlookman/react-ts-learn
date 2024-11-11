import { Link } from "react-router-dom";
import TextHandler from "../components/molecules/TextHandler"
import { useEffect, useState } from "react";

const MessagePage = () => {
    const [message, setMessage] = useState<any>(null);
    
    const randomInt = Math.floor(Math.random() * 1454) + 1;
    const url = `https://dummyjson.com/quotes/${randomInt}`;

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch(url);
            const result = await response.json();
            setMessage(result);
        };

        fetchMessage();

        // cleanup function
        return () => {
            console.log('Cleanup for API call');
        };
    }, []); // [] Efek ini hanya dijalankan sekali saat komponen dimuat pertama kali

    return (
        <div>
            <h1>Message Page</h1>
            <p className="mt-5 mb-2">Type some message ..</p>
            <TextHandler />
            <nav className="mt-5">
                <Link to={'/'}>Go to Home Page</Link>
            </nav>
            {message ? (
                <div className="mt-5">
                    <h2>Quotes Today:</h2>                
                    <pre>{JSON.stringify(message.quote, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading response from {url}</p>
            )}
        </div>
    )
}

export default MessagePage;