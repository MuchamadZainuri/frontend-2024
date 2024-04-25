/* eslint-disable react/prop-types */
import styles from './Movie.module.css';

const Movie = ({ movie }) => {
    return (
        <div className={styles.movie}>
            <img
                className={styles.movie__image}
                src={movie.poster}
                alt={movie.title}
            />
            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__date}>{movie.year}</p>
        </div>
    );
}

export default Movie
