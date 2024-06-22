import axios from "axios";
import { useState, useEffect } from "react"
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import URL from "../../utils/constants/endpoints";

function NowPlaying() {
    const [movies, setMovies] = useState([]);

    const fetchNowPlaying = async () => {
        const data = await axios(URL.NOW_PLAYING)
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