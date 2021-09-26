import { useRouter } from 'next/router';
import { Image } from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import API from '../../api';
import BigTitle from '../../components/bigTitle';
import NavbarWhite from '../../components/navbarWhite';
import Footer from '../../components/footer';
import IdBackButton from '../../components/idBackButton';

import styles from '../../styles/pages/product/idAchievement.module.scss';
import Skeleton from 'react-loading-skeleton';

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
		router.push('/404')
	}

	return (
		<>

			<Head>
				<title>{data?.name}</title>
			</Head>

			<NavbarWhite />
			<div className={styles['main-bg']}>
				<section className={styles.article}>
					<IdBackButton />
					<h3>{data?.name || <Skeleton />}</h3>
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
						<b>{data?.name || <Skeleton />}</b>
						<p>Category:</p>
						<b>{data?.category || <Skeleton />}</b>
						<p>Organizer:</p>
						<b>{data?.organizer || <Skeleton />}</b>
						<p>Held On:</p>
						<b>{data?.platform || <Skeleton />}</b>
						<p>Won By:</p>
						<b>{data?.team_name || <Skeleton />}</b>
						<Link href={`${data?.showcase}`} passHref>
							<button>
								Download Document
							</button>
						</Link>
					</div>

					<hr />

					<article>{data?.description || <Skeleton />}</article>

				</section>

				<div className={styles['app-responsive']}>
					<p>Competition Name:</p>
					<b>{data?.name || <Skeleton />}</b>
					<p>Category:</p>
					<b>{data?.category || <Skeleton />}</b>
					<p>Organizer:</p>
					<b>{data?.organizer || <Skeleton />}</b>
					<p>Held On:</p>
					<b>{data?.platform || <Skeleton />}</b>
					<p>Won By:</p>
					<b>{data?.team_name}</b>
					<Link href={`${data?.showcase}`} passHref>
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