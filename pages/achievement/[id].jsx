import { useRouter } from 'next/router';
import { Image } from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import API from '../../api';
import BigTitle from '../../components/bigTitle';
import NavbarWhite from '../../components/navbarWhite';
import Footer from '../../components/footer';
import IdBackButton from '../../components/idBackButton';

import styles from '../../styles/pages/product/idAchievement.module.scss';

const DetailAchievement = () => {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = router.query;

    useEffect(() => {
        id &&
            API.getAchievementById(id)
                .then((resp) => setData(resp))
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
                        <p>Competition Name:</p>
                        <b>{data?.name}</b>
                        <p>Category:</p>
                        <b>{data?.category}</b>
                        <p>Organizer:</p>
                        <b>{data?.organizer}</b>
                        <p>Held On:</p>
                        <b>{data?.platform}</b>
                        <p>Won By:</p>
                        <b>{data?.team_name}</b>
                        <Link href={`${data?.showcase}`}>
                            <button>
                                Download Document
                            </button>
                        </Link>
                    </div>

                    <hr />

                    <article>{data?.description}</article>

                </section>

                <div className={styles['app-responsive']}>
                    <p>Competition Name:</p>
                    <b>{data?.name}</b>
                    <p>Category:</p>
                    <b>{data?.category}</b>
                    <p>Organizer:</p>
                    <b>{data?.organizer}</b>
                    <p>Held On:</p>
                    <b>{data?.platform}</b>
                    <p>Won By:</p>
                    <b>{data?.team_name}</b>
                    <Link href={`${data?.showcase}`}>
                        <button>
                            Download Document
                        </button>
                    </Link>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default DetailAchievement;