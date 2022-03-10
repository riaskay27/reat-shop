function Footer() {
    return (
        <footer className="page-footer #b2dfdb teal lighten-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="#80cbc4 teal lighten-3" href="#!">
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
