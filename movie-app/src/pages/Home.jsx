import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Movies />
            <Form />
            <Footer />
        </>
    );
}

export default Home;