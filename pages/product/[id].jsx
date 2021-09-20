import { useRouter } from 'next/router';
import { Image } from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import API from '../../api';
import BigTitle from '../../components/bigTitle';
import NavbarWhite from '../../components/navbarWhite';
import Footer from '../../components/footer';

import styles from '../../styles/pages/product/idProduct.module.scss';
import IdBackButton from '../../components/idBackButton';

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

    if (data?.status === 404 && !loading) {
        return <BigTitle>Not Found</BigTitle>;
    }

    return (
        <>

            <NavbarWhite />
            <div className={styles['main-bg']}>
                {/* <BigTitle>{data?.name}</BigTitle> */}
                <section className={styles.article}>
                    <IdBackButton />
                    <h3>{data?.name}</h3>
                    {/* <div className={styles.img}>
                    <Image
                        src={data?.photo}
                        layout='fill'
                        objectFit='cover'
                    />
                </div> */}

                    <hr />

                    <div className={styles.app}>
                        <p>Product Name:</p>
                        <b>{data?.name}</b>
                        <p>Creator:</p>
                        <b>{data?.creator}</b>
                        <p>Released:</p>
                        <b>{data?.created_at}</b>
                        <p>Platform:</p>
                        <b>{data?.platform}</b>
                        <button>Download App</button>
                    </div>

                    <hr />

                    <article>{data?.description}</article>

                </section>

                <div className={styles['app-responsive']}>
                    <p>Product Name:</p>
                    <b>{data?.name}</b>
                    <p>Creator:</p>
                    <b>{data?.creator}</b>
                    <p>Released:</p>
                    <b>{data?.created_at}</b>
                    <p>Platform:</p>
                    <b>{data?.platform}</b>
                    <button>Download App</button>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default DetailProduct;