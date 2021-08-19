import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle';
import styles from '../styles/pages/achievement.module.scss';

function Achievement() {
    return (
        <div className={styles['main-body']}>

            <Navbar />

            <BigTitle>Achievement</BigTitle>
        </div>
    )
}

export default Achievement;