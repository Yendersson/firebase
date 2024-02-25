import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <h2>
                    <Link to={"/"}>Logo</Link>
                    </h2>
                <ul>
                    <li>Albumes</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;