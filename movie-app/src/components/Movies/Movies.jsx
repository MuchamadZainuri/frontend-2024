import styled from "styled-components";
import Movie from "../Movie/Movie.jsx";
import Heading from "../ui/Heading/index.jsx";
import { useContext } from "react";
import MoviesContext from "../../context/MoviesContext.jsx";

const StyledMovies = styled.div`
  /* Small Screen */
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 5rem;

    section {
        text-align: center;
    }

    section>div {
        display: flex;
        flex-direction: column;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        section>div {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4.5rem;
    }
`;

const Title = styled(Heading)`
    margin-bottom: 3rem;
    color: #da0037;

    @media (min-width: 992px) {
        margin-bottom: 1.5rem;
    }
`;

const Movies = ({ title }) => {
    const {movies} = useContext(MoviesContext);
    return (
        <StyledMovies>
            <section>
                <Title type="h2">{title}</Title>
                    <div>
                        {movies.map((movie) => (
                            <Movie key={movie.id} movie={movie} />
                        ))}
                    </div>
                </section>
        </StyledMovies>
    );
};

export default Movies;
