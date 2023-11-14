"use client";

import Navbar from "@/core/components/navbar";
import BigTitle from "@/core/components/bigTitle";
import styles from "@/core/styles/pages/blog.module.scss";
import Footer from "@/core/components/footer";
import BlogContainer from "@/core/components/blogContainer";
import React, { useState, useEffect } from "react";
import GeneralSeo from "@/core/components/seo/generalSeo";
import { useRouter } from "next/navigation";

function Blog() {
  const router = useRouter();
  const [data, setData] = useState(null);

  function loopItem() {
    let html = [
      "Wildan Syukri Niam",
      "Indra Mahesa",
      "Rafidhia Haikal",
      "Dian Syafilla",
    ];

    return html.map(function (value, index) {
      return (
        <React.Fragment key={index}>
          <BlogContainer
            id={"motionlab"}
            image={{
              src: `https://images.unsplash.com/photo-1588731222899-68315ddd5e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80`,
            }}
            title={"Aslab Terbaik Gelato"}
            text={value}
            writer={"Wildan"}
          />
        </React.Fragment>
      );
    });
  }

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="Blog" />

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
        <div className={styles["grid-cards"]}>{loopItem()}</div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
