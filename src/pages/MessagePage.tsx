import { Link } from "react-router-dom";
import TextHandler from "../components/molecules/TextHandler"

const MessagePage = () => {
    return (
        <div>
            <h1>Message Page</h1>
            <TextHandler />
            <nav>
                <Link to={'/'}>Go to Home Page</Link>
            </nav>
        </div>
    )
}

export default MessagePage;