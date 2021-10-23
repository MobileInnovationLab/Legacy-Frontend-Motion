import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Head from 'next/head'

import { BASE_URL } from '../../api/const';
import API from "../../api";
import NavbarWhite from "../../components/navbarWhite";
import Footer from "../../components/footer";

import styles from "../../styles/pages/product/idProduct.module.scss";
import IdBackButton from "../../components/idBackButton";
import Skeleton from "react-loading-skeleton";

import GeneralSeo from "../../components/seo/generalSeo";

const DetailProduct = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const { id } = router.query;

  useEffect(() => {
    id &&
      API.getProductById(id)
        .then((data) => setData(data))
        .finally(() => setLoading(false));
  }, [id]);

  console.log(data?.photo);

  if (data?.status === 404 && !loading) {
    router.push("/404");
  }

  return (
    <>
      <GeneralSeo title={data?.name || "Products"} />

      {modal ? (
        <div className={styles["whole-page"]}>
          <div className={styles["modal-container"]}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setModal(false)}
            >
              <path
                d="M21 7L7 21"
                stroke="#332C2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7L21 21"
                stroke="#332C2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className={styles["img-modal"]}>
              <Image
                src="/product/illu.png"
                width="120"
                height="120"
                alt="illu"
              />
            </div>

            <p>Download this App on</p>

            <div className={styles["flex-modal"]}>
              <a href="">
                <Image
                  src="/product/gplaypng.png"
                  alt="gplay"
                  width="224"
                  height="67"
                />
              </a>
              <a href="">
                <Image
                  src="/product/appstore.png"
                  alt="gplay"
                  width="224"
                  height="67"
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <NavbarWhite />
      <div className={styles["main-bg"]}>
        <section className={styles.article}>
          <IdBackButton />
          <h3>{data?.name || <Skeleton />}</h3>
          <div className={styles.img}>
            <Image
              src={`${BASE_URL}${data?.photo}`}
              alt={`Photo of ${data?.name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <hr />

          <div className={styles.app}>
            <p>Product Name:</p>
            <b>{data?.name || <Skeleton />}</b>
            <p>Creator:</p>
            <b>{data?.creator || <Skeleton />}</b>
            <p>Platform:</p>
            <b>{data?.platform || <Skeleton />}</b>
            <button>Download App</button>
          </div>

          <hr />

          <article>{data?.description || <Skeleton />}</article>
        </section>

        <div className={styles["app-responsive"]}>
          <p>Product Name:</p>
          <b>{data?.name || <Skeleton />}</b>
          <p>Creator:</p>
          <b>{data?.creator || <Skeleton />}</b>
          <p>Platform:</p>
          <b>{data?.platform || <Skeleton />}</b>
          <button>Download App</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;