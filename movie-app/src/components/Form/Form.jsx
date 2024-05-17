import styles from './Form.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ movies, setMovies }) => {
    const [isErorTitle, setIsErrorTitle] = useState(false);
    const [isErrorYear, setIsErrorYear] = useState(false);
    const [isErrorPoster, setIsErrorPoster] = useState(false);

    const [formData, setFormData] = useState({
        id: uuidv4(),
        title: '',
        year: '',
        type: 'action',
        poster: '',
    });

    const handleInput = (e) => { 
        const { name, value } = e.target;
        setFormData(
            {...formData, [name]: value}
        );
    }

    const validate = () => {
        if (formData.title === '') {
            setIsErrorTitle(true);
            return false;
        } else if (formData.year === '') { 
            setIsErrorTitle(false);
            setIsErrorYear(true);
            return false;
        } else if (formData.poster === '') {
            setIsErrorYear(false);
            setIsErrorPoster(true);
            return false;
        }
        else { 
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate() && setMovies([...movies, formData]);
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
                            <input className={styles.form__input} type="text" name='title' value={formData.title} id='title' onChange={handleInput} placeholder="*Eternal Monarch"/>
                            {isErorTitle && <p className={styles.form__error}>Title Wajib Di isi</p>}
                            <br />
                            <label className={styles.form__label} htmlFor="year">Year</label>
                            <br />
                            <input className={styles.form__input} type="number" name='year' value={formData.year} id='year' onChange={handleInput} placeholder="*1896" min="1895"/>
                            {isErrorYear && <p className={styles.form__error}>Tahun Wajib Di isi</p>}
                            <br />
                            <label className={styles.form__label} htmlFor="poster">Poster</label>
                            <br />
                            <input className={styles.form__input} type="text" name='poster' value={formData.poster} id='poster' onChange={handleInput} placeholder='ex:https://picsum.photos/300/450' />
                            {isErrorPoster && <p className={styles.form__error}>Poster Wajib Di isi</p>}
                            <br />
                            <label className={styles.form__label} htmlFor="type">Type</label>
                            <br />
                            <select className={styles.form__input} name="type" id="type" onChange={handleInput} value={formData.type}>
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