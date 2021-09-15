import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle';
import AchievementContainer from "../components/achievementContainer";

import styles from '../styles/pages/achievement.module.scss';

function Achievement() {
    return (
        <div className={styles['main-body']}>

            <Navbar />

            <BigTitle>Achievement</BigTitle>

            <section>
                <div>
                    <AchievementContainer />
                </div>
            </section>
        </div>
    )
}

export default Achievement;