
import styles from '../styles/components/achievementContainer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function achievementContainer({
    title,
    id,
    team,
    image
}) {
    return (
        <Link href={`/achievement/${id}`} passHref>
            <section className={styles.container}>
                <div className={styles.img}>
                    <Image
                        src={image}
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <div className={styles.text}>
                    <h5>{title}</h5>
                    <hr />
                    <p>{team}</p>
                </div>
            </section>
        </Link>
    );
}