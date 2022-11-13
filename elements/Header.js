// define Header element
export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src="React-icon.png" className="navbar-icon" />
                <ul className="navbar-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}