import styles from './Movies.module.css';

const Movies = () => {
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/736x/e2/13/d3/e213d385c51bd84ab35b8f11b1e0bfe6.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>The Meow Titanic</h3>
                        <p className={styles.movie__date}>04 Februari 2020</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/d8/a2/1b/d8a21b9d28531327570e9b50e0905c77.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Kitty Potter</h3>
                        <p className={styles.movie__date}>21 September 2003</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/ca/22/56/ca2256918661d1e640c13653b4b8344e.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Cat Of Steel</h3>
                        <p className={styles.movie__date}>12 Juni 1990</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/474x/f2/ef/8e/f2ef8ecc6625b80c00ed133c0e9b9f52.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>The Flash Cat</h3>
                        <p className={styles.movie__date}>27 Mei 2007</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/eb/54/f2/eb54f288b4bbc00f54d6df360b2ff312.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>The Black Cat</h3>
                        <p className={styles.movie__date}>08 December 2021</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/474x/3c/41/cc/3c41ccb3f4d3a78f5464a273f7af8712.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>The Cat Rangers</h3>
                        <p className={styles.movie__date}>25 Oktober 2015</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/7b/0c/62/7b0c62a3e4374e6e86b2155e4565681d.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Cat Wars</h3>
                        <p className={styles.movie__date}>10 Januari 2012</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/8b/13/44/8b13444f973e37fae6f0e40f528e1836.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Captain Marvel</h3>
                        <p className={styles.movie__date}>08 Maret 2005</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Movies;