import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle'
import styles from '../styles/pages/about.module.scss';

const titleUtama = 'About Us';

function About() {
    return (
        <div className={styles['main-body']}>

            <Navbar />

            <BigTitle>About Us</BigTitle>
        </div>
    )
}

export default About;