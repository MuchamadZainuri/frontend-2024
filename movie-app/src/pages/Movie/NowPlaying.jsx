import { useEffect, useContext } from "react"
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import URL from "../../utils/constants/endpoints";
import MoviesContext from "../../context/MoviesContext";

function NowPlaying() {
    const { setMovies } = useContext(MoviesContext);

    const fetchNowPlaying = async () => {
        const data = await axios(URL.NOW_PLAYING)
        setMovies(data.data.results)
    }

    useEffect(() => fetchNowPlaying);
    return (
        <>
            <Hero />
            <Movies title="Now Playing" />
        </>
    )
}


export default NowPlaying