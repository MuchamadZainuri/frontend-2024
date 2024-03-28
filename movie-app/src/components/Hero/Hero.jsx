import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Meme 4K</h2>
                    <h3 className={styles.hero__genre}>Genre: Horo, Drama, Romance</h3>
                    <p className={styles.hero_description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, consequuntur ullam quis numquam nostrum placeat dolorem eaque recusandae et dolores rem, distinctio delectus aperiam velit.</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src="https://i.pinimg.com/564x/d3/34/ed/d334ed02a82fb9016088157b95426140.jpg"
                        alt="Hero Image"
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;