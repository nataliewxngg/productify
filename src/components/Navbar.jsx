import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/sign-up">
                <button>Sign up</button>
            </Link>
            <Link to="/sign-in">
                <button>Sign in</button>
            </Link>
        </>
    );
}