import Image from 'next/image';
import Head from 'next/head';

import Navbar from '../components/navbar';
import BigTitle from '../components/bigTitle';
import DivisionBox from '../components/divisionBox';
import Footer from '../components/footer';
import TopButton from '../components/topButton';
import MemberResponsive from '../components/memberResponsive';
import MemberContainer from '../components/memberContainer';

import Slider from 'react-slick';

import styles from '../styles/pages/about.module.scss';
import { useEffect, useState } from 'react';
import API from '../api';

const titleUtama = 'About Us';

function About() {
	const responsiveLecturerSlider = {
		customPaging: () => {
			return (
				<svg
					width='12'
					height='12'
					viewBox='0 0 12 12'
					fill='#858585'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx='6' cy='6' r='6' />
				</svg>
			);
		},
		arrows: false,
		dots: true,
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
	};

	const [members, setMembers] = useState(null);
	const [generation, setGeneration] = useState(null);
	const [selectedGeneration, setSelectedGeneration] = useState(0);

	useEffect(() => {
		const fetchApi = async () => {
			const [members, generation] = await Promise.all([
				API.getAllMember(),
				API.getGeneration(),
			]);
			setMembers(members.data);
			setGeneration(generation);
		};
		fetchApi();
	}, []);

	useEffect(() => {
		if (selectedGeneration == 0) {
			API.getAllMember().then((resp) => setMembers(resp.data));
		} else {
			API.getGenerationById(selectedGeneration).then((resp) => {
				setMembers(resp.member);
			});
		}
	}, [selectedGeneration]);

	return (
		<div className={styles['main-body']}>
			<Head>
				<title>About Us</title>
			</Head>
			<Navbar />

			<BigTitle>About Us</BigTitle>

			<section className={styles.first}>
				<div className={styles['first-title']}>
					<h1 className={styles.title}>
						We are Creative People with High Spirits
					</h1>
					<p className={styles.subtitle}>
						Motion Lab is Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					</p>
				</div>
				<section>
					<Image
						src={require('../public/about/first-meet.png')}
						alt='Image of meeting'
					/>
				</section>
				<div className={styles['first-flex']}>
					<div className={styles.item}>
						<h4>6</h4>
						<p>Years of operation</p>
					</div>
					<div className={styles.item}>
						<h4>100+</h4>
						<p>Members</p>
					</div>
					<div className={styles.item}>
						<h4>50+</h4>
						<p>Products</p>
					</div>
					<div className={styles.item}>
						<h4>48</h4>
						<p>Awards</p>
					</div>
				</div>
			</section>

			<section className={styles.division}>
				<DivisionBox />
			</section>

			<section className={styles['about-member']}>
				<div className={styles.title}>
					<h1>Some People Who Innovated You</h1>
					<h4>LECTURER</h4>
				</div>

				<div className={`${styles.slider} ${'slider-mobile'}`}>
					<Slider {...responsiveLecturerSlider}>
						<div>
							<MemberResponsive />
						</div>
						<div>
							<MemberResponsive />
						</div>
					</Slider>
				</div>
				<div className={styles.grid}>
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
				</div>

				<div className={styles.title}>
					<hr />
					<div className={styles.flex}>
						<h4>LABORATORY ASSISTANT</h4>
						<div className={styles.form}>
							<p>Generation: </p>
							<select>
								<option>none</option>
								<option>none</option>
							</select>
						</div>
					</div>
				</div>
				<div className={`${styles.slider} ${'slider-mobile'}`}>
					<Slider {...responsiveLecturerSlider}>
						<div>
							<MemberResponsive />
						</div>
						<div>
							<MemberResponsive />
						</div>
					</Slider>
				</div>
				<div className={styles.grid}>
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
					<MemberContainer />
				</div>

				<div className={styles.title}>
					<hr />
					<div className={styles.flex}>
						<h4>LABORATORY MEMBER</h4>
						<div className={styles.form}>
							<p>Generation: </p>
							<select
								value={selectedGeneration}
								onChange={(e) => {
									setSelectedGeneration(e.target.value);
								}}
							>
								<option value={0}>All</option>
								{generation?.map(({ name, id }) => (
									<option key={name} value={id}>
										{name}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div className={`${styles.slider} ${'slider-mobile'}`}>
					<Slider {...responsiveLecturerSlider}>
						<div>
							<MemberResponsive />
						</div>
						<div>
							<MemberResponsive />
						</div>
					</Slider>
				</div>
				<div className={styles.grid}>
					{members?.map((member) => (
						<MemberContainer
							key={member.id}
							name={member.name}
							division={member.division}
						/>
					))}
				</div>
			</section>

			<TopButton />

			<Footer />
		</div>
	);
}

export default About;