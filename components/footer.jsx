import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/footer.module.scss';

export default function Footer() {
	return (
		<>
			<footer className={styles['footer-container']}>
				<section className={styles['footer-first']}>
					<Image
						src={'/footer/logo-footer.png'}
						width={56}
						height={58}
						alt='Logo Footer'
					/>
					<p className={styles['bottom-text']}>Mobile Laboratory</p>
				</section>
				<section className={styles['footer-column']}>
					<h1 className={styles['footer-titles']}>Get In Touch</h1>
					<div className={styles['footer-item']}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M16.9394 3C18.2804 3 19.5704 3.53 20.5194 4.481C21.4694 5.43 22.0004 6.71 22.0004 8.05V15.95C22.0004 18.74 19.7304 21 16.9394 21H7.0604C4.2694 21 2.0004 18.74 2.0004 15.95V8.05C2.0004 5.26 4.2594 3 7.0604 3H16.9394ZM18.5304 9.54L18.6104 9.46C18.8494 9.17 18.8494 8.75 18.5994 8.46C18.4604 8.311 18.2694 8.22 18.0704 8.2C17.8604 8.189 17.6604 8.26 17.5094 8.4L13.0004 12C12.4204 12.481 11.5894 12.481 11.0004 12L6.5004 8.4C6.1894 8.17 5.7594 8.2 5.5004 8.47C5.2304 8.74 5.2004 9.17 5.4294 9.47L5.5604 9.6L10.1104 13.15C10.6704 13.59 11.3494 13.83 12.0604 13.83C12.7694 13.83 13.4604 13.59 14.0194 13.15L18.5304 9.54Z" fill="white" />
						</svg>
						<p>motion.laboratory@gmail.com</p>
					</div>
					<div className={styles['footer-item']}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5768C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5768C14.8058 9.0478 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.0478 9.19423 10.5768Z" fill="white" />
						</svg>
						<p>Kultubai Selatan F206<br /> Informatics Faculty,<br /> Telkom University</p>
					</div>
				</section>
				<section className={styles['footer-column']}>
					<h1 className={styles['footer-titles']}>Explore</h1>
					<Link href='/about'>
						<a className={`${styles['footer-item']} ${styles['link']}`}>About</a>
					</Link>
					<Link href='/product'>
						<a className={`${styles['footer-item']} ${styles['link']}`}>Product</a>
					</Link>
					<Link href='/achievement'>
						<a className={`${styles['footer-item']} ${styles['link']}`}>Achievement</a>
					</Link>
					<Link href='blog'>
						<a className={`${styles['footer-item']} ${styles['link']}`}>Blog</a>
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

					<a rel='noreferrer' href='https://liff.line.me/1645278921-kWRPP32q?accountId=biy7493e#mst_challenge=B1ZDBAp9rbyTWPF3iAJ2k1b65qumuPvzH1IvhbvmgZM' target="_blank" className={`${styles['footer-item']} ${styles['link']}`}>
						<div className={styles['footer-item-img']}>
							<Image
								src='/footer/footer-line.png'
								alt='Line Link'
								layout='fill'
								objectFit='cover'
								className='footer-item-img'
							/>
						</div>
						Line
					</a>
					<a rel='noreferrer' href='https://www.linkedin.com/company/motion-laboratory/mycompany/' target="_blank" className={`${styles['footer-item']} ${styles['link']}`}>
						<div className={styles['footer-item-img']}>
							<Image
								src='/footer/footer-linkedin.png'
								alt='Linkedin Link'
								layout='fill'
								objectFit='cover'
								className='footer-item-img'
							/>
						</div>
						Linkedin
					</a>
					<a rel='noreferrer' href='https://www.instagram.com/motionlab_/' target="_blank" className={`${styles['footer-item']} ${styles['link']}`}>
						<div className={styles['footer-item-img']}>
							<Image
								src='/footer/footer-instagram.png'
								alt='Instagram Link'
								layout='fill'
								objectFit='cover'
							/>
						</div>
						Instagram
					</a>
					<a rel='noreferrer' href='https://www.facebook.com/motionlab.telu' target="_blank" className={`${styles['footer-item']} ${styles['link']}`}>
						<div className={styles['footer-item-img']}>
							<Image
								src='/footer/footer-facebook.png'
								alt='Facebook Link'
								layout='fill'
								objectFit='cover'
								className='footer-item-img'
							/>
						</div>
						Facebook
					</a>
				</section>
			</footer>

			<footer className={styles['footer-copyright']}>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125ZM8.0875 5.48906C8.91562 5.48906 9.47812 6.01719 9.54062 6.79219C9.54531 6.85781 9.6 6.90781 9.66562 6.90781H10.5516C10.5922 6.90781 10.625 6.875 10.625 6.83437C10.625 5.47969 9.55625 4.53125 8.08281 4.53125C6.36562 4.53125 5.375 5.69062 5.375 7.60625V8.42344C5.375 10.325 6.36562 11.4688 8.08281 11.4688C9.55156 11.4688 10.625 10.55 10.625 9.25937C10.625 9.21875 10.5922 9.18594 10.5516 9.18594H9.66406C9.59844 9.18594 9.54531 9.23594 9.53906 9.3C9.47344 10.0203 8.9125 10.5156 8.08594 10.5156C7.06563 10.5156 6.49062 9.76719 6.49062 8.42813V7.60625C6.49219 6.24687 7.06875 5.48906 8.0875 5.48906Z" fill="white" />
				</svg>
				<p className={styles.copyright}>Copyright Mobile Innovation Laboratory 2021</p>
			</footer>
		</>
	)
}