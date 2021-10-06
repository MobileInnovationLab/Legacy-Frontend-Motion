import Navbar from '../components/navbar';
import BigTitle from '../components/bigTitle';
import AchievementContainer from '../components/achievementContainer';
import TopButton from '../components/topButton'

import { BASE_URL } from '../api/const';

import styles from '../styles/pages/achievement.module.scss';
import Footer from '../components/footer';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import API from '../api';
import IndexAchievementContainer from '../components/indexAchievementContainer';

function Achievement() {
	const [data, setData] = useState(null);

	useEffect(() => {
		API.getAchievements().then((resp) => setData(resp.data));
	}, []);

	return (
		<div className={styles['main-body']}>
			<Head>
				<title>Achievement</title>
			</Head>
			<Navbar />

			<BigTitle>Achievement</BigTitle>

			<section className={styles.flex}>
				<div className={styles["flex-cards"]}>
					{data?.map((achievement) => (
						<React.Fragment key={achievement.id}>
							<AchievementContainer
								image={`${BASE_URL}${achievement?.photo}`}
								title={achievement.name}
								team={achievement.team_name}
								id={achievement.id}
							/>
						</React.Fragment>
					))}
				</div>
			</section>

			<TopButton />
			<Footer />
		</div>
	);
}

export default Achievement;