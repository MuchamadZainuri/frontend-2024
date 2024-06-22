import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";
import data from "../utils/constants/data";
import URL from "../utils/constants/endpoints";
// import Counter from "../components/Counter";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [movies, setMovies] = useState(data);

    const fetchUpComing = async () => {
        const data = await axios(URL.LATEST)
        data.data.results.shift()
        setMovies(data.data.results)
    }


    useEffect(() => fetchUpComing);

    return (
        <>
            {/* <Counter /> */}
            <Hero />
            <Movies movies={movies} title="Latest Movies"/>
            <Form movies={movies} setMovies={setMovies} />
        </>
    );
}

export default Home;