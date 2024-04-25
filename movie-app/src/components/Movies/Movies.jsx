import styles from './Movies.module.css';
import Movie from "../Movie/Movie.jsx";
import data from '../../utils/constants/data.js';
import { useState } from 'react';

const Movies = () => {
    
    const [ movies, setMovies ] = useState(data);
    function addMovie() {
        const newMovie = {
            id: "xyz",
            title: "Jigsaw",
            year: "2021",
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        }
        setMovies([...movies, newMovie]);
    }
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
                </div>
                <button onClick={addMovie}>Add Movie</button>
            </section>
        </div>
    )
}

export default Movies;