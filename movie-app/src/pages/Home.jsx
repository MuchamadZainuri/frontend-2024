import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
// import URL from "../utils/constants/endpoints";
// import Counter from "../components/Counter";
// import {useEffect} from "react";
// import axios from "axios";

const Home = () => {

    // const fetchUpComing = async () => {
    //     const data = await axios(URL.LATEST)
    //     data.data.results.shift()
    //     setMovies(data.data.results)
    // }

    // useEffect(() => fetchUpComing);

    return (
        <>
            {/* <Counter /> */}
            <Hero />
            <Movies title="Latest Movies"/>
        </>
    );
}

export default Home;