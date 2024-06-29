import { useEffect, useContext } from "react"
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import URL from "../../utils/constants/endpoints";
import MoviesContext from "../../context/MoviesContext";

function Popular() {
    const { setMovies } = useContext(MoviesContext);

    const fetchPopularMovies = async() => {
        const data = await axios(URL.POPULAR)
        setMovies(data.data.results)
    }

    useEffect(() => fetchPopularMovies);
    return ( 
        <>
            <Hero />
            <Movies title="Popular"/>
        </>
    )
}

export default Popular