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
            <section className={styles['footer-column']}>
                <h1 className={styles['footer-titles']}>Get In Touch</h1>
                <div className={styles['footer-item']}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9394 3C18.2804 3 19.5704 3.53 20.5194 4.481C21.4694 5.43 22.0004 6.71 22.0004 8.05V15.95C22.0004 18.74 19.7304 21 16.9394 21H7.0604C4.2694 21 2.0004 18.74 2.0004 15.95V8.05C2.0004 5.26 4.2594 3 7.0604 3H16.9394ZM18.5304 9.54L18.6104 9.46C18.8494 9.17 18.8494 8.75 18.5994 8.46C18.4604 8.311 18.2694 8.22 18.0704 8.2C17.8604 8.189 17.6604 8.26 17.5094 8.4L13.0004 12C12.4204 12.481 11.5894 12.481 11.0004 12L6.5004 8.4C6.1894 8.17 5.7594 8.2 5.5004 8.47C5.2304 8.74 5.2004 9.17 5.4294 9.47L5.5604 9.6L10.1104 13.15C10.6704 13.59 11.3494 13.83 12.0604 13.83C12.7694 13.83 13.4604 13.59 14.0194 13.15L18.5304 9.54Z" fill="white"/>
                    </svg>
                    <p>hello@motionlab.com</p>
                </div>
                <div className={styles['footer-item']}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z" fill="white"/>
                    </svg>
                    <p>0812224124</p>
                </div>
                <div className={styles['footer-item']}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5768C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5768C14.8058 9.0478 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.0478 9.19423 10.5768Z" fill="white"/>
                    </svg>
                    <p>jl huhuhuhuhuhuhu</p>
                </div>
            </section>
            <section className={styles['footer-column']}>
                <h1 className={styles['footer-titles']}>Explore</h1>
                <Link href='/about'>
                    <a className={styles['footer-item']}>About</a>
                </Link>
                <Link href='/product'>
                    <a className={styles['footer-item']}>Product</a>
                </Link>
                <Link href='/achievement'>
                    <a className={styles['footer-item']}>Achievement</a>
                </Link>
                <Link href='blog'>
                    <a className={styles['footer-item']}>Blog</a>
                </Link>
            </section>
            <section className={styles['footer-column']}>
                <h1 className={styles['footer-titles']}>Expertise</h1>
                <p className={styles['footer-item']}>Business Analyst</p>
                <p className={styles['footer-item']}>UI/UX Design</p>
                <p className={styles['footer-item']}>Mobile Programming</p>
            </section>
            <section className={styles['footer-column']}>
                <h1 className={styles['footer-titles']}>Socials</h1>
                <Link href=''>
                    <a className={styles['footer-item']}>
                        <Image 
                            src={require('../public/footer/footer-line.png')}
                            alt='Line Image'
                        />
                        Line
                    </a>
                </Link>
                <Link href=''>
                    <a className={styles['footer-item']}>
                        <Image 
                            src={require('../public/footer/footer-linkedin.png')}
                            alt='Linkedin Image'
                        />
                        Linkedin
                    </a>
                </Link>
                <Link href=''>
                    <a className={styles['footer-item']}>
                        <Image 
                            src={require('../public/footer/footer-instagram.png')}
                            alt='Line Image'
                        />
                        Instagram
                    </a>
                </Link>
                <Link href=''>
                    <a className={styles['footer-item']}>
                        <Image 
                            src={require('../public/footer/footer-facebook.png')}
                            alt='Line Image'
                        />
                        Facebook
                    </a>
                </Link>
            </section>
        </footer>
    )
}