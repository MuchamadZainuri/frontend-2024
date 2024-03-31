import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Breaking Bad</h2>
                    <h3 className={styles.hero__genre}>Genre: Comedy, Drama, Crime</h3>
                    <p className={styles.hero__description}>When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family’s financial future at any cost as he enters the dangerous world of drugs and crime.</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src="https://i.pinimg.com/564x/b1/0a/ec/b10aecda7fad74dc1591e1bbc646cec6.jpg"
                        alt="Hero Image"
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;