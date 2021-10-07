import styles from '../styles/components/achievementContainer.module.scss'

import Link from 'next/link'
import Image from 'next/image'

export default function IndexAchievementContainer({
	title,
	id,
	team,
	image
}) {

	return (
		<Link href={`/achievement/${id}`} passHref>
			<section className={styles.container}>
				<div className={styles.img}>
					<Image src={image}
						layout='fill'
						objectFit='cover'
						alt='Achievement'
					/>
				</div>
				<div className={styles.text}>
					<h5>{title}</h5>
					<hr />
					<p>{team}</p>
				</div>
			</section>
		</Link>
	)
}