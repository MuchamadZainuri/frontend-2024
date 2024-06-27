import styled from 'styled-components';
import Image from "../ui/Image";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";
import { Link } from 'react-router-dom';

const StyledMovie = styled.div`
    margin-bottom: 6.5rem;

    h3{
        
        font-size: 1.7rem;
        
    }

@media (min-width: 768px) {
    flex-basis: 50%;
}


@media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
}
`;

const StyledParagraph = styled(Paragraph)`
    color: #64748b;

    @media (min-width: 992px) {
    text-align: left;
    }
`; 

const StyledHeading = styled(Heading)`
    color: #3f4855;
    margin-bottom: 0.5rem;

    @media (min-width: 992px) {
    text-align: left;
    }
`;

const StyledImage = styled(Image)`
    max-width: 67%;
    height: auto;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        max-width: 70%;
    }

    @media (min-width: 992px) {
        min-width: 100%;
    }
`;

const Movie = ({ movie }) => {
    const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const year = movie.year || movie.release_date.split("-")[0];
    return (
        <StyledMovie>
            <Link to={movie.id === null ? `#` : `/movie/${movie.id}`}>
            <StyledImage src={movie.poster || tmdbImage} alt={movie.title} />
            </Link>
                <StyledHeading type="h4">{movie.title}</StyledHeading>
                <StyledParagraph>{year}</StyledParagraph>
        </StyledMovie>
    );
}

export default Movie
