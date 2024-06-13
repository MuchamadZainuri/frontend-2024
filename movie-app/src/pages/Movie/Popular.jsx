import axios from "axios";
import { useState, useEffect } from "react"
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function Popular() {
    const [movies, setMovies] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    const fetchPopularMovies = async() => {
        const data = await axios(URL)
        // console.log(data);
        setMovies(data.data.results)
    }

    useEffect(() => fetchPopularMovies);

    return ( 
        <>
            <Hero />
            <Movies movies={movies} title="Popular"/>
        </>
    )
}

export default Popular