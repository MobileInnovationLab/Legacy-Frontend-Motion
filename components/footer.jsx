import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles['footer-container']}>
            <section className={styles['footer-first']}>
                <Image 
                    src={require('../public/footer/logo-footer.png')}
                    alt='Logo Footer'
                />
                <p className={styles['bottom-text']}>Semboyan yel yel Motion <br />Lorem ipsum dolor</p>
            </section>
            <section className={styles['']}>

            </section>
            <section className={styles['']}>

            </section>
            <section className={styles['']}>

            </section>
        </footer>
    )
}