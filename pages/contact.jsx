import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/pages/contactUs.module.scss'
import Image from 'next/image';

import Navbar from '../components/navbar';
import BigTitle from '../components/bigTitle';
import Footer from '../components/footer';
import TopButton from '../components/topButton';

const contact = () => {

    return (
        <div className={styles['bg-color']}>
            <Navbar />
            <BigTitle>Contact Us</BigTitle>

            <section className={styles.first}>
                <div className={styles['first-content']}>
                    <h3>Have Any Question?</h3>

                    <p className={styles.sub}>Motion Lab is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

                    <div className={styles['first-address']}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#F82F1E" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9644 9.60004C18.769 9.60004 19.543 9.91804 20.1124 10.4886C20.6824 11.058 21.001 11.826 21.001 12.63V17.37C21.001 19.044 19.639 20.4 17.9644 20.4H12.037C10.3624 20.4 9.00098 19.044 9.00098 17.37V12.63C9.00098 10.956 10.3564 9.60004 12.037 9.60004H17.9644ZM18.919 13.5241L18.967 13.4761C19.1104 13.3021 19.1104 13.0501 18.9604 12.8761C18.877 12.7867 18.7624 12.7321 18.643 12.7201C18.517 12.7135 18.397 12.7561 18.3064 12.8401L15.601 15.0001C15.253 15.2887 14.7544 15.2887 14.401 15.0001L11.701 12.8401C11.5144 12.7021 11.2564 12.7201 11.101 12.8821C10.939 13.0441 10.921 13.3021 11.0584 13.4821L11.137 13.5601L13.867 15.6901C14.203 15.9541 14.6104 16.0981 15.037 16.0981C15.4624 16.0981 15.877 15.9541 16.2124 15.6901L18.919 13.5241Z" fill="white" />
                        </svg>
                        <p>hello@motionlab.com</p>
                    </div>
                    <div className={styles['first-address']}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#F82F1E" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.90039 13.9907C9.90039 11.2308 12.2067 9.00006 14.9965 9.00006C17.7941 9.00006 20.1004 11.2308 20.1004 13.9907C20.1004 15.3815 19.5946 16.6726 18.7621 17.767C17.8437 18.9742 16.7117 20.0259 15.4375 20.8515C15.1459 21.0423 14.8827 21.0567 14.5627 20.8515C13.2812 20.0259 12.1492 18.9742 11.2387 17.767C10.4056 16.6726 9.90039 15.3815 9.90039 13.9907ZM13.3173 14.1461C13.3173 15.0707 14.0717 15.7979 14.9968 15.7979C15.9225 15.7979 16.6842 15.0707 16.6842 14.1461C16.6842 13.2287 15.9225 12.4662 14.9968 12.4662C14.0717 12.4662 13.3173 13.2287 13.3173 14.1461Z" fill="white" />
                        </svg>
                        <p>Jalan Blablabla, Lorem ipsum dolor si amet
                            Bojongsoang, Bandung, Jawa Barat</p>
                    </div>
                </div>
                <div className={styles['first-img']}>
                    <Image
                        src='/contactUs/photoFirst.png'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            </section>
            <section className={styles.second}>
                <h3>Our Social Media</h3>
                <div className={styles['second-social']}>
                    <div className={styles.social}>
                        <Image
                            src='/social/social-line.png'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className={styles.social}>
                        <Image
                            src='/social/social-ig.png'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className={styles.social}>
                        <Image
                            src='/social/social-linkedin.png'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className={styles.social}>
                        <Image
                            src='/social/social-facebook.png'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                </div>
            </section>
            <section className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.0852279229539!2d107.6311909244358!3d-6.97624237119129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9afae365589%3A0x1a31cdbebef2a66a!2sMobile%20Innovation%20Laboratory!5e0!3m2!1sen!2sid!4v1630947330492!5m2!1sen!2sid"
                    allowfullscreen=""
                    loading="lazy"
                />
            </section>
            <TopButton />
            <Footer />
        </div>
    )
}

export default contact