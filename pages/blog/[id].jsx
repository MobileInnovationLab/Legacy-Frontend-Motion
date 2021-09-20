import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import API from '../../api';
import CopyToClipboard from 'react-copy-to-clipboard';
import { WhatsappShareButton, LinkedinShareButton, FacebookShareButton } from 'react-share';

import { Image } from 'next/image';
import BigTitle from '../../components/bigTitle';
import NavbarWhite from '../../components/navbarWhite';
import IdBackButton from '../../components/idBackButton';

import Footer from '../../components/footer';

import styles from '../../styles/pages/product/idBlog.module.scss';

const DetailBlog = () => {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = router.query;

    useEffect(() => {
        id &&
            API.getBlogById(id)
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
                <section className={styles.article}>
                    <IdBackButton />
                    <h3>{data?.title}</h3>
                    {/* <div className={styles.img}>
                <Image
                    src={data?.thumbnail}
                    layout='fill'
                    objectFit='cover'
                />
            </div> */}

                    <hr />

                    <div className={styles.app}>
                        <b>Share</b>
                        <div className={styles.social}>
                            <CopyToClipboard text={router.asPath}>
                                <button className={styles.copy}></button>
                            </CopyToClipboard>
                            <WhatsappShareButton url={router.asPath}>
                                <button className={styles.wa}></button>
                            </WhatsappShareButton>
                            <LinkedinShareButton url={router.asPath}>
                                <button className={styles.li}></button>
                            </LinkedinShareButton>
                            <FacebookShareButton url={router.asPath}>
                                <button className={styles.fb}></button>
                            </FacebookShareButton>
                        </div>
                    </div>

                    <hr />

                    <article>{data?.description}</article>

                </section>

                <div className={styles['app-responsive']}>
                    <b>Share</b>
                    <div className={styles.social}>
                        <CopyToClipboard text={router.asPath}>
                            <button className={styles.copy}></button>
                        </CopyToClipboard>
                        <WhatsappShareButton url={router.asPath}>
                            <button className={styles.wa}></button>
                        </WhatsappShareButton>
                        <LinkedinShareButton url={router.asPath}>
                            <button className={styles.li}></button>
                        </LinkedinShareButton>
                        <FacebookShareButton url={router.asPath}>
                            <button className={styles.fb}></button>
                        </FacebookShareButton>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default DetailBlog;