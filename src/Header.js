export default function Header() {
    return <nav className="Header">
        <div className="Header__inner">
            <div>
                <span className="Header__logo--accent">A</span>lexander 
                <span className="Header__logo--accent">K</span>okko
            </div>
            <ul className="Header__links">
                <li className="Header__links__link">
                    <a href="#about">About</a>
                </li>
                <li className="Header__links__link">
                    <a href="#about">Porfolio</a>
                </li>
                <li className="Header__links__link">
                    <a href="#about">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
}