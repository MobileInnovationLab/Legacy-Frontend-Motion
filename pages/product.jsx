import Navbar from '../components/navbar';
import BigTitle from '../components/bigTitle';
import ProductContainer from '../components/productContainer';
import Footer from '../components/footer';
import Head from 'next/head';
import ReactPaginate from 'react-paginate';

import { BASE_URL } from '../api/const';
import styles from '../styles/pages/product.module.scss';
import TopButton from '../components/topButton';
import { useEffect, useState } from 'react';
import API from '../api';

import GeneralSeo from "../components/seo/generalSeo";

function Product() {
  let container = {
    title: "Sendal Lempar",
    image: {
      src: "/coba/sandal.jpg",
      alt: "ini foto",
    },
    text: "Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod adsdsadasdsad sdasfdfsd dsadasdas",
    writer: "Zara Adisty",
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.getProducts()
      .then((products) => setData(products))
      .finally(() => setLoading(false));
    API.getProductByName(search).then((product) => {
      console.log(product);
      setData(product);
    });
  }, [search]);

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
          {data?.data?.map((val) => (
            <ProductContainer
              key={val.id}
              id={val.id}
              image={{
                src: `${BASE_URL}${val?.photo}`,
                alt: val.title,
              }}
              title={val.name}
              text={val.description}
              writer={val.creator}
            />
          ))}
        </div>
      </section>

      <TopButton />
      <Footer />
    </div>
  );
}

export default Product;