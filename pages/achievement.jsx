import Navbar from '../components/navbar';
import BigTitle from '../components/bigTitle';
import AchievementContainer from '../components/achievementContainer';

import styles from '../styles/pages/achievement.module.scss';
import Footer from '../components/footer';
import React, { useEffect, useState } from 'react';
import API from '../api';

function Achievement() {
    const [data, setData] = useState(null);

    useEffect(() => {
        API.getAchievements().then((resp) => setData(resp.data));
    }, []);

    return (
        <div className={styles['main-body']}>
            <Navbar />

            <BigTitle>Achievement</BigTitle>

            <section className={styles.flex}>
                {data?.map((achievement) => (
                    <React.Fragment key={achievement.id}>
                        <AchievementContainer title={achievement.name} />
                    </React.Fragment>
                ))}
            </section>

            <Footer />
        </div>
    );
}

export default Achievement;