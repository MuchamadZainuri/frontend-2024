import { useEffect, useContext } from "react"
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import URL from "../../utils/constants/endpoints";
import MoviesContext from "../../context/MoviesContext";

function TopRated() {
    const { setMovies } = useContext(MoviesContext);

    const fetchTopRatedMovies = async () => { 
        const data = await axios(URL.TOP_RATED)
        setMovies(data.data.results)
    }

    useEffect(() => fetchTopRatedMovies);

    return (
        <>
            <Hero />
            <Movies title="TopRated" />
        </>
    )
}

export default TopRated
