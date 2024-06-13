import axios from "axios";
import { useState, useEffect } from "react"
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function NowPlaying() {
    const [movies, setMovies] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    const fetchNowPlaying = async () => {
        const data = await axios(URL)
        setMovies(data.data.results)
    }

    useEffect(() => fetchNowPlaying);
    return (
        <>
            <Hero />
            <Movies movies={movies} title="Now Playing" />
        </>
    )
}


export default NowPlaying