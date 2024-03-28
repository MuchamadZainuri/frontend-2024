const Navbar = () => {
    return (
        <nav>
            <ul>
                <div>
                    <h1>Movie App</h1>
                </div>
                <li>
                    <a href="#home" className="nav-active" > Home </a>
                </li>
                <li>
                    <a href="#trending"> Trending </a>
                </li>
                <li>
                    <a href="#popular"> Popular </a>
                </li>
                <li>
                    <a href="#toprated"> Top Rated </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;