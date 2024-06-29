import styled from 'styled-components';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import H2 from "../ui/Heading";
import Button from "../ui/Button";
import Image from '../ui/Image';
import Input from '../ui/Input';
import Label from '../ui/Label';
import StyledForm from '../ui/Form';
import { Dropdown, Option } from '../ui/Dropdown';
import { useNavigate } from 'react-router-dom';
import MoviesContext from '../../context/MoviesContext';

const Container = styled.div`
    margin: 1rem;

    @media (min-width: 992px) {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4rem;
        margin-bottom: 7rem;
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 6.6rem;

    @media (min-width: 992px) {
        margin: 0 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const FormLeft = styled.div`
    text-align: center;

    @media (min-width: 992px) {
        flex-basis: 50%;
        margin: 0 auto;
        text-align: right;
        padding-right: 2.5rem;
    }
`;

const FormRight = styled.div`
    margin: 1.5rem 2.7rem;

    @media (min-width: 768px) {
        margin: 1.5rem 12.5rem;
    }

    @media (min-width: 992px) {
        flex-basis: 50%;
        margin: 0 auto;
        text-align: left;
        padding-bottom: 2.3rem;
        padding-left: 2.8rem;
    }
`;

const FormContainer = styled.div`
    @media (min-width: 992px) {
        display: inline-block;
        width: 75%;
    }
`;

const StyledInput = styled(Input)`
    margin-top: 0.3rem;
    margin-bottom: 1rem;

    @media (min-width: 992px) {
        margin-bottom: 1.2rem;
    }
`;

const StyledDropdown = styled(Dropdown)`
    margin-top: 0.3rem;
    margin-bottom: 1rem;

    @media (min-width: 992px) {
        margin-bottom: 1.2rem;
    }
`;


const Heading = styled(H2)`
    color: #da0037;
    margin: 1rem 0;
    font-size: 2.2rem;
    text-align: center;

    @media (min-width: 992px) {
        font-size: 3rem;
        padding-bottom: 1rem;
        text-align: center;
    }
`;

const ButtonSubmit = styled(Button)`
    @media (min-width: 992px) {
        margin-top: 0.2rem;
    }
`;

const ImageForm = styled(Image)`
    max-width: 80%;

    @media (min-width: 768px) {
        max-width: 48%;
    }

    @media (min-width: 992px) {
        margin-bottom: -5.5rem;
        max-width: 75%;
    }
`;

const Error = styled.p`
    color: #da0037;
    font-size: 1.1rem;
    margin-top: -1rem;
    font-style: italic;
`;

const Form = () => {
    const { movies, setMovies } = useContext(MoviesContext);
    
    movies.length >= 20 ? window.location.reload() : null; 

    const [formData, setFormData] = useState({
        id: uuidv4(),
        title: '',
        year: '',
        type: 'action',
        poster: '',
    });

    const navigation = useNavigate();

    const { title, year, type, poster } = formData;

    const [errors, setErrors] = useState({
        title: null,
        year: null,
        poster: null,
    });

    const handleInput = (e) => { 
        const { name, value } = e.target;
        setFormData(
            {...formData, [name]: value}
        );
    }

    const validate = () => {
        if (title === '') {
            setErrors({
                title: 'Judul Wajib Di isi',
                year: null,
                poster: null,
            });
            return false;

        } else if (year === '') {
            setErrors({
                title: null,
                year: 'Tahun Wajib Di isi',
                poster: null,
            });
            return false;

        } else if (poster === '') {
            setErrors({
                title: null,
                year: null,
                poster: 'Poster Wajib Di isi',
            });
            return false;

        }else {
            setErrors({
                title: null,
                year: null,
                poster: null,
            });
            return true;
        }
    }

    const resetForm = () => {
        setFormData({
            id: uuidv4(),
            title: "",
            year: "",
            type: "action",
            poster: ""
        })
        navigation('/');
    }

    const addMovie = () => {
        setMovies([...movies, formData]);
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate() && addMovie() && resetForm();
    }

    return (
        <Container>
            <Section>
                <FormLeft>
                    <ImageForm src='https://i.pinimg.com/564x/05/5f/a9/055fa94146f0382cb55ea075b04bce18.jpg'
                        alt="image.jpg" />
                </FormLeft>
                <FormRight>
                    <FormContainer>
                        <Heading>Add Movie</Heading>
                        <StyledForm onSubmit={handleSubmit}>
                            <Label htmlFor='title' size="lg">Title</Label>
                            <br />
                            <StyledInput type="text" name='title' value={title} id='title' onChange={handleInput} placeholder="*Eternal Monarch" size="lg"/>
                            {errors.title && <Error>{ errors.title }</Error>}
                            <br />
                            <Label htmlFor='year' size="lg">Year</Label>
                            <br />
                            <StyledInput type="number" name='year' value={year} id='year' onChange={handleInput} placeholder="*1896" min="1895" size="lg"/>
                            {errors.year && <Error>{ errors.year }</Error>}
                            <br />
                            <Label htmlFor="poster" size="lg">Poster</Label>
                            <br />
                            <StyledInput type="text" name='poster' value={poster} id='poster' onChange={handleInput} placeholder='ex:https://picsum.photos/300/450' size="lg"/>
                            {errors.poster && <Error>{errors.poster}</Error>}
                            <br />
                            <Label htmlFor="type" size="lg">Type</Label>
                            <br />
                            <StyledDropdown name="type" id="type" onChange={handleInput} value={type} size="lg">
                                <Option value="action">Action</Option>
                                <Option value="drama">Drama</Option>
                                <Option value="horror">Horror</Option>
                                <Option value="comedy">Comedy</Option>
                                <Option value="animation">Animation</Option>
                            </StyledDropdown>
                            <br />
                            <ButtonSubmit type="submit" name='submit' value="submit" variant="primary" size="lg" full>Submit</ButtonSubmit>
                        </StyledForm>
                    </FormContainer>
                </FormRight>
            </Section>
        </Container>
    );
}

export default Form;