import React, { Component } from "react";

import Image from "next/image";
import Link from "next/link";
import GeneralSeo from "../components/seo/generalSeo";

import Navbar from "../components/navbar";
import styles from "../styles/pages/index.module.scss";
import Slider from "react-slick";

import DivisionBox from "../components/divisionBox";
import Footer from "../components/footer";
import TopButton from "../components/topButton";
import ProductContainer from "../components/productContainer";
import BlogContainer from "../components/blogContainer";
import AchievementContainer from "../components/achievementContainer";
import IndexAchievementContainer from "../components/indexAchievementContainer";

import { BASE_URL } from "../api/const";
import API from "../api";
import IndexIllustration from "../components/illustration/indexIllustration";

import * as Sentry from "@sentry/nextjs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const firstSlider = {
  arrows: false,
  dots: false,
  autoplay: true,
  infinite: true,
  // slidesToShow: 2, harusnya ini
  slidesToShow: 2,
  slidesToScroll: -1,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const secondSlider = {
  arrows: false,
  dots: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

class Home extends Component {
  state = {
    products: null,
    achievements: null,
    blogs: null,
  };

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.next2 = this.next2.bind(this);
    this.previous2 = this.previous2.bind(this);
    this.state = {
      ytModal: false,
    };
  }

  async componentDidMount() {
    try {
      const [products, achievements, blogs] = await Promise.all([
        API.getProductsSlider(),
        API.getIndexAchievement(),
        API.getBlogs(),
      ]);

      this.setState({
        products: products.data,
        achievements: achievements.data,
        blogs: blogs.data,
      });
    } catch (error) {
      Sentry.captureException(error);
    }
  }

  closeYtModals = () => {
    this.setState({ ytModal: false });
  };

  openYtModals = () => {
    this.setState({ ytModal: true });
  };

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  next2() {
    this.slider2.slickNext();
  }

  previous2() {
    this.slider2.slickPrev();
  }

  render() {
    const { achievements, blogs, products } = this.state;

    const responsiveSlider = {
      customPaging: function () {
        return (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="#858585"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" />
          </svg>
        );
      },
      arrows: false,
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
    };

    return (
      <div className={styles["main-bg"]}>
        <GeneralSeo />

        {this.state.ytModal ? (
          <motion.div
            className={styles["whole-page"]}
            onClick={this.closeYtModals}
            initial={this.state.ytModal ? { opacity: 0 } : { opacity: 1 }}
            animate={this.state.ytModal ? { opacity: 1 } : { opacity: 0 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
          >
            <div className={styles["main-container"]}>
              <div className={styles.container}>
                <iframe
                  className={styles.responsiveYt}
                  src="https://www.youtube.com/embed/vI64lbga0FY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        ) : (
          ""
        )}

        <Navbar />

        <div className={styles["main-body"]}>
          <main className={styles["box-first-section"]}>
            <motion.article
              className={styles["first-section-article"]}
              initial={{ y: "10px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2, bounce: 0 }}
            >
              <h1 className={styles["first-section-title"]}>
                Mobile Innovation Laboratory
              </h1>
              <p className={styles["first-section-p"]}>
                The Mobile Innovation Laboratory, or commonly called Motion Lab,
                is one of the latest laboratories at the Faculty of Informatics,
                Telkom University under the auspices of K-Side.
              </p>
              <motion.a
                className={styles["first-section-button"]}
                onClick={this.openYtModals}
                whileHover={{ scale: 1.05 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    d="M15.0871 12.754C15.0494 12.7927 14.9072 12.958 14.7747 13.094C13.9979 13.9493 11.9716 15.3493 10.9111 15.7767C10.75 15.8453 10.3428 15.9907 10.1252 16C9.91675 16 9.71802 15.952 9.52838 15.8547C9.29198 15.7187 9.10233 15.5047 8.99842 15.252C8.93153 15.0767 8.82761 14.552 8.82761 14.5427C8.7237 13.9687 8.66655 13.036 8.66655 12.0053C8.66655 11.0233 8.7237 10.1287 8.80878 9.546C8.81852 9.53667 8.92244 8.88467 9.03609 8.66133C9.24457 8.25333 9.65177 8 10.0876 8H10.1252C10.409 8.01 11.0059 8.26333 11.0059 8.27267C12.0093 8.70067 13.9888 10.032 14.7844 10.9167C14.7844 10.9167 15.0085 11.144 15.1059 11.286C15.2579 11.49 15.3332 11.7427 15.3332 11.9953C15.3332 12.2773 15.2481 12.54 15.0871 12.754"
                    fill="#F82F1E"
                  />
                </svg>
                Watch Video
              </motion.a>
            </motion.article>

            <motion.div
              className={styles["first-section-img"]}
              initial={{ y: "10px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2, bounce: 0 }}
            >
              <IndexIllustration />
            </motion.div>
          </main>

          <section className={styles["box-second-section"]}>
            <h3 className={styles["second-small-title"]}>OUR DIVISION</h3>
            <h1 className={styles["second-big-title"]}>What We Do</h1>
            <DivisionBox />
          </section>

          <section className={styles["box-third-section"]}>
            <div className={styles["third-section-left"]}>
              <h3 className={styles["third-small-title"]}>PRODUCTS</h3>
              <h1 className={styles["third-big-title"]}>
                Awesome Product From Us
              </h1>
              <p className={styles["third-p-left"]}>
                See some of our recently completed products
              </p>
              <div className={styles["third-box-button"]}>
                <button
                  className={styles["third-round-button"]}
                  onClick={this.previous}
                >
                  <svg
                    className={styles["third-svg"]}
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="#6A6A6A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.05382 10.6965C1.13858 10.7835 1.4586 11.1555 1.7567 11.4615C3.50438 13.386 8.06357 16.536 10.4498 17.4975C10.8122 17.652 11.7284 17.979 12.218 18C12.687 18 13.1342 17.892 13.5609 17.673C14.0928 17.367 14.5195 16.8855 14.7533 16.317C14.9038 15.9225 15.1376 14.742 15.1376 14.721C15.3714 13.4295 15.5 11.331 15.5 9.012C15.5 6.8025 15.3714 4.7895 15.18 3.4785C15.1581 3.4575 14.9243 1.9905 14.6685 1.488C14.1995 0.57 13.2832 0 12.3027 0H12.218C11.5794 0.0225 10.2365 0.5925 10.2365 0.6135C7.97881 1.5765 3.52484 4.572 1.73478 6.5625C1.73478 6.5625 1.23064 7.074 1.01145 7.3935C0.669508 7.8525 0.5 8.421 0.5 8.9895C0.5 9.624 0.691427 10.215 1.05382 10.6965Z" />
                  </svg>
                </button>
                <button
                  className={styles["third-round-button"]}
                  onClick={this.next}
                >
                  <svg
                    className={styles["third-svg"]}
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="#6A6A6A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.9462 10.6965C14.8614 10.7835 14.5414 11.1555 14.2433 11.4615C12.4956 13.386 7.93643 16.536 5.55017 17.4975C5.18777 17.652 4.27155 17.979 3.78203 18C3.31296 18 2.86581 17.892 2.43911 17.673C1.90721 17.367 1.48052 16.8855 1.24671 16.317C1.0962 15.9225 0.862397 14.742 0.862397 14.721C0.628592 13.4295 0.5 11.331 0.5 9.012C0.5 6.8025 0.628592 4.7895 0.820019 3.4785C0.841939 3.4575 1.07574 1.9905 1.33147 1.488C1.80054 0.57 2.71676 0 3.69727 0H3.78203C4.4206 0.0225 5.76352 0.5925 5.76352 0.6135C8.02119 1.5765 12.4752 4.572 14.2652 6.5625C14.2652 6.5625 14.7694 7.074 14.9886 7.3935C15.3305 7.8525 15.5 8.421 15.5 8.9895C15.5 9.624 15.3086 10.215 14.9462 10.6965" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles["third-section-right"]}>
              <Slider ref={(c) => (this.slider = c)} {...firstSlider}>
                {products?.map((product) => (
                  <div key={product.name} className={styles["third-slider"]}>
                    <ProductContainer
                      id={product.id}
                      image={{
                        src: `${BASE_URL}${product?.photo}`,
                        alt: product.title,
                      }}
                      title={product.name}
                      text={product.description}
                      writer={product.creator}
                    />
                  </div>
                ))}
              </Slider>
              <div className={styles["third-box-button-responsive"]}>
                <button
                  className={styles["third-round-button-responsive"]}
                  onClick={this.previous}
                >
                  <svg
                    className={styles["third-svg"]}
                    width="11"
                    viewBox="0 0 16 18"
                    fill="#6A6A6A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.05382 10.6965C1.13858 10.7835 1.4586 11.1555 1.7567 11.4615C3.50438 13.386 8.06357 16.536 10.4498 17.4975C10.8122 17.652 11.7284 17.979 12.218 18C12.687 18 13.1342 17.892 13.5609 17.673C14.0928 17.367 14.5195 16.8855 14.7533 16.317C14.9038 15.9225 15.1376 14.742 15.1376 14.721C15.3714 13.4295 15.5 11.331 15.5 9.012C15.5 6.8025 15.3714 4.7895 15.18 3.4785C15.1581 3.4575 14.9243 1.9905 14.6685 1.488C14.1995 0.57 13.2832 0 12.3027 0H12.218C11.5794 0.0225 10.2365 0.5925 10.2365 0.6135C7.97881 1.5765 3.52484 4.572 1.73478 6.5625C1.73478 6.5625 1.23064 7.074 1.01145 7.3935C0.669508 7.8525 0.5 8.421 0.5 8.9895C0.5 9.624 0.691427 10.215 1.05382 10.6965Z" />
                  </svg>
                </button>
                <button
                  className={styles["third-round-button-responsive"]}
                  onClick={this.next}
                >
                  <svg
                    className={styles["third-svg"]}
                    width="11"
                    viewBox="0 0 16 18"
                    fill="#6A6A6A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.9462 10.6965C14.8614 10.7835 14.5414 11.1555 14.2433 11.4615C12.4956 13.386 7.93643 16.536 5.55017 17.4975C5.18777 17.652 4.27155 17.979 3.78203 18C3.31296 18 2.86581 17.892 2.43911 17.673C1.90721 17.367 1.48052 16.8855 1.24671 16.317C1.0962 15.9225 0.862397 14.742 0.862397 14.721C0.628592 13.4295 0.5 11.331 0.5 9.012C0.5 6.8025 0.628592 4.7895 0.820019 3.4785C0.841939 3.4575 1.07574 1.9905 1.33147 1.488C1.80054 0.57 2.71676 0 3.69727 0H3.78203C4.4206 0.0225 5.76352 0.5925 5.76352 0.6135C8.02119 1.5765 12.4752 4.572 14.2652 6.5625C14.2652 6.5625 14.7694 7.074 14.9886 7.3935C15.3305 7.8525 15.5 8.421 15.5 8.9895C15.5 9.624 15.3086 10.215 14.9462 10.6965" />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          <section className={styles["box-fourth-section"]}>
            <h3 className={styles["fourth-small-title"]}>ACHIEVEMENT</h3>
            <h1 className={styles["fourth-big-title"]}>
              Amazing People, Amazing Awards
            </h1>

            <div className={styles["fourth-gallery"]}>
              {achievements?.map((ach) => (
                <div key={ach.id} className={styles["fifth-slider-item"]}>
                  <IndexAchievementContainer
                    id={ach.id}
                    title={ach.name}
                    team={ach.team_name}
                    image={`${BASE_URL}${ach?.photo}`}
                  />
                </div>
              ))}
            </div>

            <div
              className={`${
                styles["fourth-gallery-responsive"]
              } ${"slider-mobile"}`}
            >
              <Slider {...responsiveSlider}>
                {achievements?.map((ach) => (
                  <div key={ach.id} className={styles["fifth-slider-item"]}>
                    <IndexAchievementContainer
                      id={ach.id}
                      title={ach.name}
                      team={ach.team_name}
                      image={`${BASE_URL}${ach?.photo}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <Link href="/achievement">
              <a>
                <button className={styles["fourth-button-see"]}>See All</button>
              </a>
            </Link>
          </section>

          <section className={styles["box-fifth-section"]}>
            <div className={styles["fifth-top"]}>
              <div className={styles["fifth-top-left"]}>
                <h3 className={styles["fifth-small-title"]}>BLOG</h3>
                <h1 className={styles["fifth-big-title"]}>
                  Interesting Stories From Us
                </h1>
              </div>
              <div className={styles["fifth-top-right"]}>
                <button
                  className={styles["fifth-round-button"]}
                  onClick={this.previous2}
                >
                  <svg
                    className={styles["fifth-svg"]}
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="#6A6A6A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.05382 10.6965C1.13858 10.7835 1.4586 11.1555 1.7567 11.4615C3.50438 13.386 8.06357 16.536 10.4498 17.4975C10.8122 17.652 11.7284 17.979 12.218 18C12.687 18 13.1342 17.892 13.5609 17.673C14.0928 17.367 14.5195 16.8855 14.7533 16.317C14.9038 15.9225 15.1376 14.742 15.1376 14.721C15.3714 13.4295 15.5 11.331 15.5 9.012C15.5 6.8025 15.3714 4.7895 15.18 3.4785C15.1581 3.4575 14.9243 1.9905 14.6685 1.488C14.1995 0.57 13.2832 0 12.3027 0H12.218C11.5794 0.0225 10.2365 0.5925 10.2365 0.6135C7.97881 1.5765 3.52484 4.572 1.73478 6.5625C1.73478 6.5625 1.23064 7.074 1.01145 7.3935C0.669508 7.8525 0.5 8.421 0.5 8.9895C0.5 9.624 0.691427 10.215 1.05382 10.6965Z" />
                  </svg>
                </button>
                <button
                  className={styles["fifth-round-button"]}
                  onClick={this.next2}
                >
                  <svg
                    className={styles["fifth-svg"]}
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="#6A6A6A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.9462 10.6965C14.8614 10.7835 14.5414 11.1555 14.2433 11.4615C12.4956 13.386 7.93643 16.536 5.55017 17.4975C5.18777 17.652 4.27155 17.979 3.78203 18C3.31296 18 2.86581 17.892 2.43911 17.673C1.90721 17.367 1.48052 16.8855 1.24671 16.317C1.0962 15.9225 0.862397 14.742 0.862397 14.721C0.628592 13.4295 0.5 11.331 0.5 9.012C0.5 6.8025 0.628592 4.7895 0.820019 3.4785C0.841939 3.4575 1.07574 1.9905 1.33147 1.488C1.80054 0.57 2.71676 0 3.69727 0H3.78203C4.4206 0.0225 5.76352 0.5925 5.76352 0.6135C8.02119 1.5765 12.4752 4.572 14.2652 6.5625C14.2652 6.5625 14.7694 7.074 14.9886 7.3935C15.3305 7.8525 15.5 8.421 15.5 8.9895C15.5 9.624 15.3086 10.215 14.9462 10.6965" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles["fifth-bottom"]}>
              <Slider ref={(c) => (this.slider2 = c)} {...secondSlider}>
                {blogs?.map((blog) => (
                  <div key={blog.id} className={styles["fifth-slider-item"]}>
                    <BlogContainer
                      id={blog.id}
                      image={{
                        src: `${BASE_URL}${blog?.thumbnail}`,
                      }}
                      title={blog.title}
                      text={blog.description}
                      writer={blog.author}
                    />
                  </div>
                ))}
              </Slider>
              <div className={styles["fifth-box-button-responsive"]}>
                <button
                  className={styles["fifth-round-button-responsive"]}
                  onClick={this.previous2}
                >
                  <svg
                    className={styles["fifth-svg"]}
                    width="11"
                    viewBox="0 0 16 18"
                    fill="#6A6A6A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.05382 10.6965C1.13858 10.7835 1.4586 11.1555 1.7567 11.4615C3.50438 13.386 8.06357 16.536 10.4498 17.4975C10.8122 17.652 11.7284 17.979 12.218 18C12.687 18 13.1342 17.892 13.5609 17.673C14.0928 17.367 14.5195 16.8855 14.7533 16.317C14.9038 15.9225 15.1376 14.742 15.1376 14.721C15.3714 13.4295 15.5 11.331 15.5 9.012C15.5 6.8025 15.3714 4.7895 15.18 3.4785C15.1581 3.4575 14.9243 1.9905 14.6685 1.488C14.1995 0.57 13.2832 0 12.3027 0H12.218C11.5794 0.0225 10.2365 0.5925 10.2365 0.6135C7.97881 1.5765 3.52484 4.572 1.73478 6.5625C1.73478 6.5625 1.23064 7.074 1.01145 7.3935C0.669508 7.8525 0.5 8.421 0.5 8.9895C0.5 9.624 0.691427 10.215 1.05382 10.6965Z" />
                  </svg>
                </button>
                <button
                  className={styles["fifth-round-button-responsive"]}
                  onClick={this.next2}
                >
                  <svg
                    className={styles["fifth-svg"]}
                    width="11"
                    viewBox="0 0 16 18"
                    fill="#6A6A6A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.9462 10.6965C14.8614 10.7835 14.5414 11.1555 14.2433 11.4615C12.4956 13.386 7.93643 16.536 5.55017 17.4975C5.18777 17.652 4.27155 17.979 3.78203 18C3.31296 18 2.86581 17.892 2.43911 17.673C1.90721 17.367 1.48052 16.8855 1.24671 16.317C1.0962 15.9225 0.862397 14.742 0.862397 14.721C0.628592 13.4295 0.5 11.331 0.5 9.012C0.5 6.8025 0.628592 4.7895 0.820019 3.4785C0.841939 3.4575 1.07574 1.9905 1.33147 1.488C1.80054 0.57 2.71676 0 3.69727 0H3.78203C4.4206 0.0225 5.76352 0.5925 5.76352 0.6135C8.02119 1.5765 12.4752 4.572 14.2652 6.5625C14.2652 6.5625 14.7694 7.074 14.9886 7.3935C15.3305 7.8525 15.5 8.421 15.5 8.9895C15.5 9.624 15.3086 10.215 14.9462 10.6965" />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          <TopButton />

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
