function Header() {
    return (
        <nav className="#4db6ac teal lighten-2">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    React Shop
                </a>
                <ul
                    id="nav-mobile"
                    className="right hide-on-med-and-down right"
                >
                    <li>
                        <a
                            href="https://github.com/riaskay27/reat-shop"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
