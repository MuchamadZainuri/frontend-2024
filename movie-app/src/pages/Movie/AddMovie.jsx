import Form from "../../components/Form/Form";
import Hero from "../../components/Hero/Hero";

function AddMovie({ movies, setMovies}) {
    return (
        <>
            <Hero />
            <Form movies={movies} setMovies={setMovies} />
        </>
    )
}


export default AddMovie