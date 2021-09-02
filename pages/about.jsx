import Image from 'next/image'

import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle'
import styles from '../styles/pages/about.module.scss';

const titleUtama = 'About Us';

function About() {
    return (
        <div className={styles['main-body']}>

            <Navbar />

            <BigTitle>About Us</BigTitle>

            <section className={styles.first}>
                <div className={styles['first-title']}>
                    <h1 className={styles.title}>We are Creative People with High Spirits</h1>
                    <p className={styles.subtitle}>
                    Motion Lab is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    </p>
                </div>
                <section>
                    <Image 
                        src={require('../public/about/first-meet.png')}
                        alt='Image of meeting'
                    />
                </section>
                <div className={styles['first-flex']}>
                    <div className={styles.item}>
                        <h4>6</h4>
                        <p>Years of operation</p>
                    </div>
                    <div className={styles.item}>
                        <h4>100+</h4>
                        <p>Members</p>
                    </div>
                    <div className={styles.item}>
                        <h4>50+</h4>
                        <p>Products</p>
                    </div>
                    <div className={styles.item}>
                        <h4>48</h4>
                        <p>Awards</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;