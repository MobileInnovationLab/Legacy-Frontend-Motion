import styles from '../styles/components/achievementContainer.module.scss'
import Image from 'next/image'

export default function achievementContainer(props) {
    return (
        <section className={styles.container}>
            <div className={styles.img}>
                <Image 
                 src='/coba/sandal.jpg'
                 layout='fill'
                 objectFit='cover'
                />
            </div>
            <div className={styles.text}>
                <h5>Juara 1 Gemastik 2018: UX Design</h5>
                <hr />
                <p>by Tim 2One</p>
            </div>
        </section>
    )
}