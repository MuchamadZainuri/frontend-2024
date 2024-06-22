import axios from "axios";
import { useState, useEffect } from "react"
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import URL from "../../utils/constants/endpoints";

function Popular() {
    const [movies, setMovies] = useState([]);

    const fetchPopularMovies = async() => {
        const data = await axios(URL.POPULAR)
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