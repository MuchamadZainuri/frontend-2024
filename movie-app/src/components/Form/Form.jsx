import styles from './Form.module.css';

const Form = () => {
    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                        className={styles.form__image}
                        src="https://i.pinimg.com/564x/05/5f/a9/055fa94146f0382cb55ea075b04bce18.jpg"
                        alt="form image"
                    />
                </div>
                <div className={styles.form__right}>
                    <div className={styles.form__container}>
                        <h2 className={styles.form__title}>Add Movie</h2>
                        <form className={styles.form__list} method="post" action=''>
                            <label className={styles.form__label} htmlFor="title">Title</label>
                            <br />
                            <input className={styles.form__input} type="text" name='title' id='title' />
                            <br />
                            <label className={styles.form__label} htmlFor="year">Year</label>
                            <br />
                            <input className={styles.form__input} type="text" name='year' id='year' />
                            <br />
                            <button type="submit" name='submit' className={styles.form__button}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Form;