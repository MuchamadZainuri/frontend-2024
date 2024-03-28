import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Movies />
            <Footer />
        </>
    );
}

export default Home;