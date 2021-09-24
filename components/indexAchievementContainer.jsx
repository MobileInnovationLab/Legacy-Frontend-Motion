import styles from '../styles/components/indexAchievementContainer.module.scss'


import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

export default function indexAchievementContainer({
    title,
    id,
    team
}) {
    const [onHover, setOnhover] = useState(false);

    return (
        <Link href={`/achievement/${id}`}>
            <section className={styles.container}>
                <div className={styles.img}>
                    <Image src='/coba/sandal.jpg' layout='fill' objectFit='cover' />
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