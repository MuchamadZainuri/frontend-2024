import styles from './Movies.module.css';
import Movie from "../Movie/Movie.jsx";

const Movies = ({movies}) => {
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
                </div>
            </section>
        </div>
    )
}

export default Movies;