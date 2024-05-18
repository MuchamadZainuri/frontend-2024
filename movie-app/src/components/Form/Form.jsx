import styles from './Form.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ movies, setMovies }) => {
    const [formData, setFormData] = useState({
        id: uuidv4(),
        title: '',
        year: '',
        type: 'action',
        poster: '',
    });

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
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                        className={styles.form__image}
                        src='https://i.pinimg.com/564x/05/5f/a9/055fa94146f0382cb55ea075b04bce18.jpg'
                        alt="image.jpg"
                    />
                </div>
                <div className={styles.form__right}>
                    <div className={styles.form__container}>
                        <h2 className={styles.form__title}>Add Movie</h2>
                        <form className={styles.form__list} method="" action='' onSubmit={handleSubmit}>
                            <label className={styles.form__label} htmlFor="title">Title</label>
                            <br />
                            <input className={styles.form__input} type="text" name='title' value={title} id='title' onChange={handleInput} placeholder="*Eternal Monarch"/>
                            {errors.title && <p className={styles.form__error}>{ errors.title }</p>}
                            <br />
                            <label className={styles.form__label} htmlFor="year">Year</label>
                            <br />
                            <input className={styles.form__input} type="number" name='year' value={year} id='year' onChange={handleInput} placeholder="*1896" min="1895"/>
                            {errors.year && <p className={styles.form__error}>{ errors.year }</p>}
                            <br />
                            <label className={styles.form__label} htmlFor="poster">Poster</label>
                            <br />
                            <input className={styles.form__input} type="text" name='poster' value={poster} id='poster' onChange={handleInput} placeholder='ex:https://picsum.photos/300/450' />
                            {errors.poster && <p className={styles.form__error}>{errors.poster}</p>}
                            <br />
                            <label className={styles.form__label} htmlFor="type">Type</label>
                            <br />
                            <select className={styles.form__input} name="type" id="type" onChange={handleInput} value={type}>
                                <option value="action">Action</option>
                                <option value="drama">Drama</option>
                                <option value="horror">Horror</option>
                                <option value="comedy">Comedy</option>
                                <option value="animation">Animation</option>
                            </select>
                            <br />
                            <button type="submit" name='submit' value="submit" className={styles.form__button}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Form;