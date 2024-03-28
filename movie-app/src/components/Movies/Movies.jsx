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
                            src="https://i.pinimg.com/736x/82/63/de/8263de5a074409318176c1a340e6b79f.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Riski</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/10/47/10/104710347d00cdd3716ca6d2db57da43.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Wawan</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/4e/16/00/4e16005c8d91dc69eb753993e6013299.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Heri</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/c2/36/74/c236747cd41f8a2605f8d6bfededb9ff.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Ucup</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/10/92/d5/1092d59c5ff3bd0a32b0173012a6f4bf.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Beni</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/736x/5a/ec/22/5aec2220c6ebe1869b059801e2107044.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Agus</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/29/a3/80/29a38066e324f30de0936c5159f8ca4e.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Kanjut</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                            className={styles.movie__image}
                            src="https://i.pinimg.com/564x/58/4f/8a/584f8a13c1ff4c9b0b92e48795b229c4.jpg"
                            alt="Movie Image"
                        />
                        <h3 className={styles.movie__title}>Asep</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Movies;