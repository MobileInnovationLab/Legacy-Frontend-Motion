import styles from '../styles/components/activityContainer.module.scss'
import Image from 'next/image'

export default function activityContainer(props) {
    return (
        <section className={styles.container}>
                <div className={styles.img}>
                    <Image 
                        src='/coba/sandal.jpg'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <h5>Webinar: introducing Design...</h5>
                <p>25 August 2021</p>
        </section>
    )
}