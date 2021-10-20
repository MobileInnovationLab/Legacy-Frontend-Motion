import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle';
import styles from '../styles/pages/blog.module.scss';
import Footer from "../components/footer";
import BlogContainer from '../components/blogContainer';
import Head from 'next/head'
import API from "../api";
import { BASE_URL } from "../api/const";
import React, { useState, useEffect } from "react";

function Blog() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.getBlogs().then((resp) => setData(resp.data));
  }, []);

  return (
    <div className={styles["main-body"]}>
      <Head>
        <title>Blog</title>
      </Head>

      <Navbar />

      <BigTitle>Our Blog</BigTitle>

      <section className={styles.search}>
        {/*  <form className={styles["search-bar"]}>
          <input type="text" placeholder="Search.." />
          <button type="submit">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.80565"
                cy="9.80547"
                r="7.49047"
                stroke="#F82F1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0154 15.4042L17.9521 18.3333"
                stroke="#F82F1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form> */}
      </section>

      <div className={styles.grid}>
        <div className={styles["grid-cards"]}>
          {data?.map((blog) => (
            <React.Fragment key={blog.id}>
              <BlogContainer
                id={blog.id}
                image={{
                  src: `${BASE_URL}${blog?.thumbnail}`,
                }}
                title={blog.title}
                text={blog.description}
                writer={blog.author}
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;