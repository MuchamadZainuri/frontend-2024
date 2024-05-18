import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const handleClick = () => {
        const navbar = document.querySelector(`.${styles.container__list}`);
        navbar.classList.toggle(`${styles.list__active}`);

        const toggle = document.querySelector(`.${styles.navbar__toggle}`);
        toggle.classList.toggle(`${styles.toggle__active}`);
    }
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}  >
                <div className={styles.navbar__group}>
                    <div>
                        <h1 className={styles.navbar__brand}>Movie App</h1>
                    </div>
                    <div className={styles.container__list}>
                        <ul className={styles.navbar__list}>
                            <li className={styles.navbar__item}>
                                <Link className={styles.navbar__link} to="/"> Home </Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link className={styles.navbar__link} to="/movie/create">Add Movie</Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link className={styles.navbar__link} to="/movie/popular"> Popular </Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link className={styles.navbar__link} to="/movie/now">Now Playing</Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link className={styles.navbar__link} to="/movie/top">Top Rated</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.navbar__toggle} onClick={handleClick}>
                    <FaBars />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;