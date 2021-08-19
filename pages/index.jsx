import { Component } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '../components/navbar';
import styles from '../styles/pages/index.module.scss';
import Slider from 'react-slick';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  
  next() {
    this.slider.slickNext();
  }
  
  previous() {
    this.slider.slickPrev();
  }

  render() {
    
    const settings = {
      arrows: false,
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: -1,
      autoplaySpeed: 5000,
      pauseOnHover: true
    };
  
    return (
      <div className={styles['main-bg']}>
  
        <Navbar />
  
        <div className={styles['main-body']}>
  
          <main className={styles['box-first-section']}>
  
            <article className={styles['first-section-article']}>
              <h1 className={styles['first-section-title']}>Mobile Innovation Laboratory</h1>
              <p className={styles['first-section-p']}>Mobile innovation laboratory is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
              <Link href=''>
                <a className={styles['first-section-button']}>Explore More</a>
              </Link>
            </article>
  
            <div className={styles['first-section-img']}>
              <Image
                src={require("../public/main-index/main-illu.png")}
                alt='Computer Illustration'
              />
            </div>
          </main>
  
          <section className={styles['box-second-section']}>
            <h3 className={styles['second-small-title']}>OUR DIVISION</h3>
            <h1 className={styles['second-big-title']}>What We Do</h1>
            <div className={styles['second-box-division']}>
              <div className={styles['second-box-div-inside']}>
                <Image
                  src={require("../public/main-index/role/role-ba.png")}
                  alt='Business Analyst Logo'
                  width={180}
                  height={180}
                />
                <article className={styles['second-box-article']}>
                  <h1 className={styles['second-box-article-title']}>Business Analyst</h1>
                  <p className={styles['second-box-article-p']}>Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </article>
              </div>
              <div className={styles['second-box-div-inside']}>
                <Image
                  src={require("../public/main-index/role/role-uiux.png")}
                  alt='UI/UX Design Logo'
                  width={180}
                  height={180}
                />
                <article className={styles['second-box-article']}>
                  <h1 className={styles['second-box-article-title']}>UI/UX Design</h1>
                  <p className={styles['second-box-article-p']}>Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </article>
              </div>
              <div className={styles['second-box-div-inside']}>
                <Image
                  src={require("../public/main-index/role/role-mp.png")}
                  alt='Mobile Programming Logo'
                  width={180}
                  height={180}
                />
                <article className={styles['second-box-article']}>
                  <h1 className={styles['second-box-article-title']}>Mobile Programming</h1>
                  <p className={styles['second-box-article-p']}>Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </article>
              </div>
            </div>
          </section>
  
          <section className={styles['box-third-section']}>
            <div className={styles['third-section-left']}>
              <h3 className={styles['third-small-title']}>PRODUCTS</h3>
              <h1 className={styles['third-big-title']}>Awesome Product From Us</h1>
              <p className={styles['third-p-left']}>See some of our recently completed products</p>
              <div className={styles['third-box-button']}>
                <button className={styles['third-round-button']} onClick={this.previous}>
                  <svg className={styles['third-svg']} width="16" height="18" viewBox="0 0 16 18" fill="#6A6A6A" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.05382 10.6965C1.13858 10.7835 1.4586 11.1555 1.7567 11.4615C3.50438 13.386 8.06357 16.536 10.4498 17.4975C10.8122 17.652 11.7284 17.979 12.218 18C12.687 18 13.1342 17.892 13.5609 17.673C14.0928 17.367 14.5195 16.8855 14.7533 16.317C14.9038 15.9225 15.1376 14.742 15.1376 14.721C15.3714 13.4295 15.5 11.331 15.5 9.012C15.5 6.8025 15.3714 4.7895 15.18 3.4785C15.1581 3.4575 14.9243 1.9905 14.6685 1.488C14.1995 0.57 13.2832 0 12.3027 0H12.218C11.5794 0.0225 10.2365 0.5925 10.2365 0.6135C7.97881 1.5765 3.52484 4.572 1.73478 6.5625C1.73478 6.5625 1.23064 7.074 1.01145 7.3935C0.669508 7.8525 0.5 8.421 0.5 8.9895C0.5 9.624 0.691427 10.215 1.05382 10.6965Z"/>
                  </svg>
                </button>
                <button className={styles['third-round-button']} onClick={this.next}>
                  <svg className={styles['third-svg']} width="16" height="18" viewBox="0 0 16 18" fill="#6A6A6A" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9462 10.6965C14.8614 10.7835 14.5414 11.1555 14.2433 11.4615C12.4956 13.386 7.93643 16.536 5.55017 17.4975C5.18777 17.652 4.27155 17.979 3.78203 18C3.31296 18 2.86581 17.892 2.43911 17.673C1.90721 17.367 1.48052 16.8855 1.24671 16.317C1.0962 15.9225 0.862397 14.742 0.862397 14.721C0.628592 13.4295 0.5 11.331 0.5 9.012C0.5 6.8025 0.628592 4.7895 0.820019 3.4785C0.841939 3.4575 1.07574 1.9905 1.33147 1.488C1.80054 0.57 2.71676 0 3.69727 0H3.78203C4.4206 0.0225 5.76352 0.5925 5.76352 0.6135C8.02119 1.5765 12.4752 4.572 14.2652 6.5625C14.2652 6.5625 14.7694 7.074 14.9886 7.3935C15.3305 7.8525 15.5 8.421 15.5 8.9895C15.5 9.624 15.3086 10.215 14.9462 10.6965"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles['third-section-right']}>
              <Slider ref={c => (this.slider = c)} {...settings}>
                <div>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                  />
                </div>
                <div>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                  />
                </div>
                <div>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                  />
                </div>
              </Slider>
            </div>
          </section>

          <section className={styles['box-fourth-section']}>
            <h3 className={styles['fourth-small-title']}>ACHIEVEMENT</h3>
            <h1 className={styles['fourth-big-title']}>Amazing People, Amazing Awards</h1>
            
            <div className={styles['fourth-gallery']}>
              <div className={styles['fourth-flex-first']}>
                <div className={styles['fourth-content']}>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                    objectFit='cover'
                    width={350}
                    height={320}
                  />
                </div>
                <div className={styles['fourth-content']}>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                    objectFit='cover'
                    width={350}
                    height={320}
                  />
                </div>
                <div className={styles['fourth-content']}>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                    objectFit='cover'
                    width={350}
                    height={320}
                  />
                </div>
              </div>
              <div className={styles['fourth-flex-second']}>
                <div className={styles['fourth-content']}>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                    objectFit='cover'
                    width={350}
                    height={320}
                  />
                </div>
                <div className={styles['fourth-content']}>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                    objectFit='cover'
                    width={350}
                    height={320}
                  />
                </div>
                <div className={styles['fourth-content']}>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                    objectFit='cover'
                    width={350}
                    height={320}
                  />
                </div>
              </div>
              <div className={styles['fourth-flex-third']}>
                <div className={styles['fourth-content']}>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                    objectFit='cover'
                    width={350}
                    height={320}
                  />
                </div>
                <div className={styles['fourth-content']}>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                    objectFit='cover'
                    width={350}
                    height={320}
                  />
                </div>
                <div className={styles['fourth-content']}>
                  <Image
                    src={require("../public/main-index/main-illu.png")}
                    alt='Computer Illustration'
                    objectFit='cover'
                    width={350}
                    height={320}
                  />
                </div>
              </div>
            </div>

            <button className={styles['fourth-button-see']}>See All</button>
          </section>

          <section className={styles['box-fifth-section']}>
            <div className={styles['fifth-top']}>
              <div className={styles['fifth-top-left']}>
                <h3 className={styles['fifth-small-title']}>BLOG</h3>
                <h1 className={styles['fifth-big-title']}>Interesting Stories From Us</h1>
              </div>
              <div className={styles['fifth-top-right']}>
              <button className={styles['fifth-round-button']} onClick={this.previous}>
                  <svg className={styles['fifth-svg']} width="16" height="18" viewBox="0 0 16 18" fill="#6A6A6A" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.05382 10.6965C1.13858 10.7835 1.4586 11.1555 1.7567 11.4615C3.50438 13.386 8.06357 16.536 10.4498 17.4975C10.8122 17.652 11.7284 17.979 12.218 18C12.687 18 13.1342 17.892 13.5609 17.673C14.0928 17.367 14.5195 16.8855 14.7533 16.317C14.9038 15.9225 15.1376 14.742 15.1376 14.721C15.3714 13.4295 15.5 11.331 15.5 9.012C15.5 6.8025 15.3714 4.7895 15.18 3.4785C15.1581 3.4575 14.9243 1.9905 14.6685 1.488C14.1995 0.57 13.2832 0 12.3027 0H12.218C11.5794 0.0225 10.2365 0.5925 10.2365 0.6135C7.97881 1.5765 3.52484 4.572 1.73478 6.5625C1.73478 6.5625 1.23064 7.074 1.01145 7.3935C0.669508 7.8525 0.5 8.421 0.5 8.9895C0.5 9.624 0.691427 10.215 1.05382 10.6965Z"/>
                  </svg>
                </button>
                <button className={styles['fifth-round-button']} onClick={this.next}>
                  <svg className={styles['fifth-svg']} width="16" height="18" viewBox="0 0 16 18" fill="#6A6A6A" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9462 10.6965C14.8614 10.7835 14.5414 11.1555 14.2433 11.4615C12.4956 13.386 7.93643 16.536 5.55017 17.4975C5.18777 17.652 4.27155 17.979 3.78203 18C3.31296 18 2.86581 17.892 2.43911 17.673C1.90721 17.367 1.48052 16.8855 1.24671 16.317C1.0962 15.9225 0.862397 14.742 0.862397 14.721C0.628592 13.4295 0.5 11.331 0.5 9.012C0.5 6.8025 0.628592 4.7895 0.820019 3.4785C0.841939 3.4575 1.07574 1.9905 1.33147 1.488C1.80054 0.57 2.71676 0 3.69727 0H3.78203C4.4206 0.0225 5.76352 0.5925 5.76352 0.6135C8.02119 1.5765 12.4752 4.572 14.2652 6.5625C14.2652 6.5625 14.7694 7.074 14.9886 7.3935C15.3305 7.8525 15.5 8.421 15.5 8.9895C15.5 9.624 15.3086 10.215 14.9462 10.6965"/>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    )

  }
}
