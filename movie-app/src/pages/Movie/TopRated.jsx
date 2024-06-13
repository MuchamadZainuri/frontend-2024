import { useEffect, useState } from "react"
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import Hero from "../../components/Hero/Hero";

function TopRated() {
    const [movies, setMovies] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

    const fetchTopRatedMovies = async () => { 
        const data = await axios(URL)
        setMovies(data.data.results)
    }

    useEffect(() => fetchTopRatedMovies);

    return (
        <>
            <Hero />
            <Movies movies={movies} title="TopRated" />
        </>
    )
}

export default TopRated
