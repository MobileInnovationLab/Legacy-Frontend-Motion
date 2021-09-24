import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Head from 'next/head'

import API from '../../api';
import BigTitle from '../../components/bigTitle';
import NavbarWhite from '../../components/navbarWhite';
import Footer from '../../components/footer';

import styles from '../../styles/pages/product/idProduct.module.scss';
import IdBackButton from '../../components/idBackButton';
import Skeleton from 'react-loading-skeleton';

const DetailProduct = () => {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = router.query;

    useEffect(() => {
        id &&
            API.getProductById(id)
                .then((data) => setData(data))
                .finally(() => setLoading(false));
    }, [id]);

    console.log(data?.photo)

    if (data?.status === 404 && !loading) {
        router.push('/404')
    }

    return (
        <>
            <Head>
                <title>{data?.name}</title>
            </Head>

            <NavbarWhite />
            <div className={styles['main-bg']}>
                {/* <BigTitle>{data?.name}</BigTitle> */}
                <section className={styles.article}>
                    <IdBackButton />
                    <h3>{data?.name || <Skeleton />}</h3>
                    <div className={styles.img}>
                        <Image
                            src={`https://motionlab.masuk.web.id/api/${data?.photo}`}
                            layout='fill'
                            objectFit='cover'
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

                <div className={styles['app-responsive']}>
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