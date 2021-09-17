import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle';
import AchievementContainer from "../components/achievementContainer";

import styles from '../styles/pages/achievement.module.scss';
import Footer from '../components/footer';

function Achievement() {
    return (
        <div className={styles['main-body']}>

            <Navbar />

            <BigTitle>Achievement</BigTitle>

            <section className={styles.flex}>
                <AchievementContainer />
                <AchievementContainer />
                <AchievementContainer />
                <AchievementContainer />
                <AchievementContainer />
                <AchievementContainer />
            </section>

            <Footer />
        </div>
    )
}

export default Achievement;