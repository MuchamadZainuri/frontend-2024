import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import StyleDetailMovie from "./DetailMovie.styled";
import URL from "../../utils/constants/endpoints";

const DetailImage = styled(Image)`
    max-width: 88%;
    height: auto;

    @media (min-width: 992px) {
        margin-left: 1.1rem;
        height: auto;
    }
`;

const Heading2 = styled(Heading)`
    color: #DA0037;
    margin-bottom: 1rem;
`;

const Heading3 = styled(Heading)`
    color: #3f4855; 
    margin-bottom: 1rem;
`;

const DetailParagraph = styled(Paragraph)`
    color: #64748b;
    margin-bottom: 1.5rem;
    text-align: justify;

    @media (min-width: 992px) {
        text-align: left;
    }
`;

const DetailMovie = ({id}) => {
    const [movie, setMovie] = useState([]);
    const genres = movie && movie.genres?.map((genre) => genre.name).join(", ");
    const year = movie && movie.release_date?.split("-")[0];
    const idTrailer = movie && movie.videos?.results[0].key;

    const fetchDetailMovie = async () => {
        const response = await axios(URL.DETAIL_MOVIE(id));
        setMovie(response.data);
    }

    useEffect(() => fetchDetailMovie, [id, movie]);
    return (
        <StyleDetailMovie>
            <div className="poster">
                <DetailImage
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>
            <div className="info">
                <Heading2 type="h2">{movie.title + " (" + year + ")"}</Heading2>
                <Heading3 type="h3">{genres}</Heading3>
                <DetailParagraph>{movie.overview}</DetailParagraph>
                <Button
                    as="a"
                    href={`https://www.youtube.com/watch?v=${idTrailer}`}
                    target="_blank"
                    $variant="primary"
                    size="lg"
                >Watch</Button>
            </div>
        </StyleDetailMovie>
    )
}

export default DetailMovie
