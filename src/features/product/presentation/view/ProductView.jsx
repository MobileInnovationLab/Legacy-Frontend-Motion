"use client";

import Navbar from "@/core/components/navbar";
import BigTitle from "@/core/components/bigTitle";
import ProductContainer from "@/core/components/productContainer";
import Footer from "@/core/components/footer";

import styles from "@/core/styles/pages/product.module.scss";
import TopButton from "@/core/components/topButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import GeneralSeo from "@/core/components/seo/generalSeo";

function ProductView() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {}, [search]);

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="Product" />
      <Navbar />

      <BigTitle>Our Product</BigTitle>

      <section className={styles.search}>
        {/* <form className={styles["search-bar"]}>
          <input
            type="text"
            placeholder="Search.."
            onChange={(e) => setSearch(e.target.value)}
          />
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

      <section className={styles.grid}>
        <div className={styles["grid-cards"]}>
          <ProductContainer
            key={"1"}
            id={"1"}
            image={{
              src: `https://images.unsplash.com/photo-1696928634052-41aa345ef686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
              alt: "title",
            }}
            title={"Gemastik"}
            text={"lorem ipsum"}
            writer={"WIldan"}
          />
        </div>
      </section>

      <TopButton />
      <Footer />
    </div>
  );
}

export default ProductView;
