import { useEffect, useState } from "react"
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import URL from "../../utils/constants/endpoints";

function TopRated() {
    const [movies, setMovies] = useState([]);

    const fetchTopRatedMovies = async () => { 
        const data = await axios(URL.TOP_RATED)
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
