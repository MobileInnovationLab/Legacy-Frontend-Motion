
import styles from '../styles/components/achievementContainer.module.scss';
import Image from 'next/image';

export default function achievementContainer({
    title,
    id,
    major,
    generation,
    nim,
    photo,
}) {
    return (
        <section className={styles.container}>
            <div className={styles.img}>
                <Image src='/coba/sandal.jpg' layout='fill' objectFit='cover' />
            </div>
            <div className={styles.text}>
                <h5>{title}</h5>
                <hr />
                <p></p>
            </div>
        </section>
    );
}