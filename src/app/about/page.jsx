"use client";

import Image from "next/image";
import Head from "next/head";

import Navbar from "@/core/components/navbar";
import BigTitle from "@/core/components/bigTitle";
import DivisionBox from "@/core/components/divisionBox";
import Footer from "@/core/components/footer";
import TopButton from "@/core/components/topButton";
import MemberResponsive from "@/core/components/memberResponsive";
import MemberContainer from "@/core/components/memberContainer";

import Slider from "react-slick";

import styles from "@/core/styles/pages/about.module.scss";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import GeneralSeo from "@/core/components/seo/generalSeo";

export default function Page() {
  let dosen = {
    first: {
      name: "Veronikha Effendy",
      division: "Supervisor/Lecturer",
      linkedin: "",
      facebook: "",
      insta: "",
      image: "/about/dosen/Veronikha-Effendy.jpg",
    },
    second: {
      name: "Shinta Yulia P",
      division: "Supervisor/Lecturer",
      linkedin: "",
      facebook: "",
      insta: "",
      image: "/about/dosen/Shinta-Puspitasari-.jpg",
    },
    third: {
      name: "Mira Kania S",
      division: "Supervisor/Lecturer",
      linkedin: "",
      facebook: "",
      insta: "",
      image: "/about/dosen/mira kania.png",
    },
    fourth: {
      name: "Dana Sulistyo",
      division: "Supervisor/Lecturer",
      linkedin: "",
      facebook: "",
      insta: "",
      image: "/about/dosen/Dana-Sulistyo-Kusumo.jpg",
    },
    fifth: {
      name: "Monterico Adrian",
      division: "Supervisor/Lecturer",
      linkedin: "",
      facebook: "",
      insta: "",
      image: "/about/dosen/Monterico.webp",
    },
    sixth: {
      name: "Aristyo",
      division: "Supervisor/Lecturer",
      linkedin: "",
      facebook: "",
      insta: "",
      image: "/about/dosen/Lecturer-Aristyo.jpg",
    },
    seventh: {
      name: "Danang Junaedi",
      division: "Supervisor/Lecturer",
      linkedin: "",
      facebook: "",
      insta: "",
      image: "/about/dosen/danang junaedi.webp",
    },
  };

  let labAssist = {
    first: {
      name: "Irham Naufal",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/irhamnaufal8/",
      facebook: "",
      insta: "https://www.instagram.com/irhamnaufal8/",
      image: "/about/member/Irham.webp",
    },
    second: {
      name: "Rizal Gradianto",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/rizal-gradianto/",
      facebook: "",
      insta: "https://www.instagram.com/gradiannn/",
      image: "/about/member/Rizal.webp",
    },
    third: {
      name: "Thea Anugrah",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/thea-anugrah-felicia/",
      facebook: "",
      insta: "https://www.instagram.com/theafeliciaaa/",
      image: "/about/member/Thea.webp",
    },
    fourth: {
      name: "Jaatsiyah M. A.",
      division: "Laboratory Assistant",
      linkedin: "",
      facebook: "",
      insta: "https://www.instagram.com/jaatsiyah_m/",
      image: "/about/member/Jaatsiyah.jpeg",
    },
    fifth: {
      name: "Hilman Taris M.",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/hilman-taris-muttaqin-93136b169/",
      facebook: "",
      insta: "https://www.instagram.com/hilmantm/",
      image: "/about/member/Hilman.webp",
    },
    sixth: {
      name: "M. Zulistiyan",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/mohamad-zulistiyan-aa28491a0/",
      facebook: "",
      insta: "https://www.instagram.com/zulistiyan/",
      image: "/about/member/Zulistiyan.webp",
    },
    seventh: {
      name: "Kelvyn Lukito",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/kelvynlukito/",
      facebook: "",
      insta: "https://www.instagram.com/iamkelpyn/",
      image: "/about/member/Kelvyn.webp",
    },
    eight: {
      name: "Galih Akbar N.",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/galih-nugraha-b49174173/",
      facebook: "",
      insta: "https://www.instagram.com/whoisgalih/",
      image: "/about/member/Galih.webp",
    },
    nine: {
      name: "M. Fauzan A.",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/muhammad-fauzan-avidiansyah/",
      facebook: "",
      insta: "https://www.instagram.com/fauzan_avidian/",
      image: "/about/member/Fauzan.webp",
    },
    ten: {
      name: "Affifudin Mawardi",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/afifuddin-mawardi-229022195/",
      facebook: "",
      insta: "https://www.instagram.com/afifmawardii/",
      image: "/about/member/Afif.webp",
    },
    eleven: {
      name: "Ikhsan Assidique",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/ikhsansdq/",
      facebook: "",
      insta: "https://www.instagram.com/ikhsansdq/",
      image: "/about/member/Ikhsan.webp",
    },
    twelve: {
      name: "Razita Amalia",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/razita-amalina/",
      facebook: "",
      insta: "https://www.instagram.com/rrzta/",
      image: "/about/member/Razita.webp",
    },
    thirteen: {
      name: "Dewa Made Wijaya",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/dewamadewijaya/",
      facebook: "",
      insta: "https://www.instagram.com/madewijayya/",
      image: "/about/member/Jaya.webp",
    },
    fourteen: {
      name: "M. Zacky Faqia R.",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/zackyfaqia/",
      facebook: "",
      insta: "https://www.instagram.com/zackyfaqia/",
      image: "/about/member/Zacky.webp",
    },
    fifteen: {
      name: "M. Pascal D.",
      division: "Laboratory Assistant",
      linkedin:
        "https://www.linkedin.com/in/muhammad-pascal-dewantara-15901815b/",
      facebook: "",
      insta: "https://www.instagram.com/mpascaldewantara/",
      image: "/about/member/Pascal.webp",
    },
    sixteen: {
      name: "Achmad Jihad",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/achmadjihad/",
      facebook: "",
      insta: "https://www.instagram.com/jxjadd/",
      image: "/about/member/Achmad.webp",
    },
    seventeen: {
      name: "Annisa Bulan M.",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/anissabulan/",
      facebook: "",
      insta: "https://www.instagram.com/anissa.bulan/",
      image: "/about/member/Bulan.webp",
    },
    eighteen: {
      name: "Adinda Dwi M.",
      division: "Laboratory Assistant",
      linkedin: "https://www.linkedin.com/in/adinda-dwi-maharani-b9ab9621a/",
      facebook: "",
      insta: "https://www.instagram.com/adinrani_/",
      image: "/about/member/Ading.webp",
    },
  };

  const logoIni = () => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="#858585"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="6" />
      </svg>
    );
  };

  const responsiveLecturerSlider = {
    customPaging: logoIni,
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

  useEffect(() => {}, []);

  useEffect(() => {}, [selectedGeneration]);

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="About" />
      <Navbar />

      <BigTitle>About Us</BigTitle>

      <section className={styles.first}>
        <div className={styles["first-title"]}>
          <h1 className={styles.title}>
            We are Creative People with High Spirits
          </h1>
          <p className={styles.subtitle}>
            The Motion (Mobile Innovation) Laboratory is one of the research
            laboratories under the Faculty of Informatics, Telkom University.
            Motion Lab focuses on the creation and development of mobile
            software. Now Motion Lab comes with 3 division options, Digital
            Business, UI/UX Design, and Mobile Programming.
          </p>
        </div>
        <section className={styles["first-image"]}>
          <Image
            src="/about/first-meet.webp"
            alt="About Image"
            layout="fill"
            objectFit="cover"
          />
        </section>
        <div className={styles["first-flex"]}>
          <div className={styles.item}>
            <h4>
              <CountUp start={0} delay={2} end={6} duration={2} />
            </h4>
            <p>Years of operation</p>
          </div>
          <div className={styles.item}>
            <h4>
              <CountUp start={0} delay={2} end={100} duration={4} />+
            </h4>
            <p>Members</p>
          </div>
          <div className={styles.item}>
            <h4>
              <CountUp start={0} delay={2} end={50} duration={3} />+
            </h4>
            <p>Products</p>
          </div>
          <div className={styles.item}>
            <h4>
              <CountUp start={0} delay={2} end={48} duration={3} />
            </h4>
            <p>Awards</p>
          </div>
        </div>
      </section>

      <section className={styles.division}>
        <DivisionBox />
      </section>

      <section className={styles["about-member"]}>
        <div className={styles.title}>
          <h1>People Who Might Innovate You</h1>
          <h4>LECTURER</h4>
        </div>

        <div className={`${styles.slider} ${"slider-mobile"}`}>
          <Slider {...responsiveLecturerSlider}>
            <div className={styles.containerRes}>
              <MemberContainer
                name={dosen.first.name}
                division={dosen.first.division}
                linkedin={dosen.first.linkedin}
                facebook={dosen.first.facebook}
                insta={dosen.first.insta}
                image={dosen.first.image}
              />
              <MemberContainer
                name={dosen.second.name}
                division={dosen.second.division}
                linkedin={dosen.second.linkedin}
                facebook={dosen.second.facebook}
                insta={dosen.second.insta}
                image={dosen.second.image}
              />
              <MemberContainer
                name={dosen.third.name}
                division={dosen.third.division}
                linkedin={dosen.third.linkedin}
                facebook={dosen.third.facebook}
                insta={dosen.third.insta}
                image={dosen.third.image}
              />
              <MemberContainer
                name={dosen.fourth.name}
                division={dosen.fourth.division}
                linkedin={dosen.fourth.linkedin}
                facebook={dosen.fourth.facebook}
                insta={dosen.fourth.insta}
                image={dosen.fourth.image}
              />
            </div>
            <div className={styles.containerRes}>
              <MemberContainer
                name={dosen.fifth.name}
                division={dosen.fifth.division}
                linkedin={dosen.fifth.linkedin}
                facebook={dosen.fifth.facebook}
                insta={dosen.fifth.insta}
                image={dosen.fifth.image}
              />
              <MemberContainer
                name={dosen.sixth.name}
                division={dosen.sixth.division}
                linkedin={dosen.sixth.linkedin}
                facebook={dosen.sixth.facebook}
                insta={dosen.sixth.insta}
                image={dosen.sixth.image}
              />
              <MemberContainer
                name={dosen.seventh.name}
                division={dosen.seventh.division}
                linkedin={dosen.seventh.linkedin}
                facebook={dosen.seventh.facebook}
                insta={dosen.seventh.insta}
                image={dosen.seventh.image}
              />
            </div>
          </Slider>
        </div>
        <div className={styles.grid}>
          <MemberContainer
            name={dosen.first.name}
            division={dosen.first.division}
            linkedin={dosen.first.linkedin}
            facebook={dosen.first.facebook}
            insta={dosen.first.insta}
            image={dosen.first.image}
          />
          <MemberContainer
            name={dosen.second.name}
            division={dosen.second.division}
            linkedin={dosen.second.linkedin}
            facebook={dosen.second.facebook}
            insta={dosen.second.insta}
            image={dosen.second.image}
          />
          <MemberContainer
            name={dosen.third.name}
            division={dosen.third.division}
            linkedin={dosen.third.linkedin}
            facebook={dosen.third.facebook}
            insta={dosen.third.insta}
            image={dosen.third.image}
          />
          <MemberContainer
            name={dosen.fourth.name}
            division={dosen.fourth.division}
            linkedin={dosen.fourth.linkedin}
            facebook={dosen.fourth.facebook}
            insta={dosen.fourth.insta}
            image={dosen.fourth.image}
          />
          <MemberContainer
            name={dosen.fifth.name}
            division={dosen.fifth.division}
            linkedin={dosen.fifth.linkedin}
            facebook={dosen.fifth.facebook}
            insta={dosen.fifth.insta}
            image={dosen.fifth.image}
          />
          <MemberContainer
            name={dosen.sixth.name}
            division={dosen.sixth.division}
            linkedin={dosen.sixth.linkedin}
            facebook={dosen.sixth.facebook}
            insta={dosen.sixth.insta}
            image={dosen.sixth.image}
          />
          <MemberContainer
            name={dosen.seventh.name}
            division={dosen.seventh.division}
            linkedin={dosen.seventh.linkedin}
            facebook={dosen.seventh.facebook}
            insta={dosen.seventh.insta}
            image={dosen.seventh.image}
          />
        </div>

        <div className={styles.title}>
          <hr />
          <div className={styles.flex}>
            <h4>LABORATORY ASSISTANT</h4>
            {/* <div className={styles.form}>
							<p>Generation: </p>
							<select>
								<option>none</option>
								<option>none</option>
							</select>
						</div> */}
          </div>
        </div>
        <div className={`${styles.slider} ${"slider-mobile"}`}>
          <Slider {...responsiveLecturerSlider}>
            <div className={styles.containerRes}>
              <MemberContainer
                name={labAssist.first.name}
                division={labAssist.first.division}
                linkedin={labAssist.first.linkedin}
                facebook={labAssist.first.facebook}
                insta={labAssist.first.insta}
                image={labAssist.first.image}
              />
              <MemberContainer
                name={labAssist.second.name}
                division={labAssist.second.division}
                linkedin={labAssist.second.linkedin}
                facebook={labAssist.second.facebook}
                insta={labAssist.second.insta}
                image={labAssist.second.image}
              />
              <MemberContainer
                name={labAssist.third.name}
                division={labAssist.third.division}
                linkedin={labAssist.third.linkedin}
                facebook={labAssist.third.facebook}
                insta={labAssist.third.insta}
                image={labAssist.third.image}
              />
              <MemberContainer
                name={labAssist.fourth.name}
                division={labAssist.fourth.division}
                linkedin={labAssist.fourth.linkedin}
                facebook={labAssist.fourth.facebook}
                insta={labAssist.fourth.insta}
                image={labAssist.fourth.image}
              />
            </div>
            <div className={styles.containerRes}>
              <MemberContainer
                name={labAssist.fifth.name}
                division={labAssist.fifth.division}
                linkedin={labAssist.fifth.linkedin}
                facebook={labAssist.fifth.facebook}
                insta={labAssist.fifth.insta}
                image={labAssist.fifth.image}
              />
              <MemberContainer
                name={labAssist.sixth.name}
                division={labAssist.sixth.division}
                linkedin={labAssist.sixth.linkedin}
                facebook={labAssist.sixth.facebook}
                insta={labAssist.sixth.insta}
                image={labAssist.sixth.image}
              />
              <MemberContainer
                name={labAssist.seventh.name}
                division={labAssist.seventh.division}
                linkedin={labAssist.seventh.linkedin}
                facebook={labAssist.seventh.facebook}
                insta={labAssist.seventh.insta}
                image={labAssist.seventh.image}
              />
              <MemberContainer
                name={labAssist.eight.name}
                division={labAssist.eight.division}
                linkedin={labAssist.eight.linkedin}
                facebook={labAssist.eight.facebook}
                insta={labAssist.eight.insta}
                image={labAssist.eight.image}
              />
            </div>
          </Slider>
        </div>
        <div className={styles.grid}>
          <MemberContainer
            name={labAssist.first.name}
            division={labAssist.first.division}
            linkedin={labAssist.first.linkedin}
            facebook={labAssist.first.facebook}
            insta={labAssist.first.insta}
            image={labAssist.first.image}
          />
          <MemberContainer
            name={labAssist.second.name}
            division={labAssist.second.division}
            linkedin={labAssist.second.linkedin}
            facebook={labAssist.second.facebook}
            insta={labAssist.second.insta}
            image={labAssist.second.image}
          />
          <MemberContainer
            name={labAssist.third.name}
            division={labAssist.third.division}
            linkedin={labAssist.third.linkedin}
            facebook={labAssist.third.facebook}
            insta={labAssist.third.insta}
            image={labAssist.third.image}
          />
          <MemberContainer
            name={labAssist.fourth.name}
            division={labAssist.fourth.division}
            linkedin={labAssist.fourth.linkedin}
            facebook={labAssist.fourth.facebook}
            insta={labAssist.fourth.insta}
            image={labAssist.fourth.image}
          />
          <MemberContainer
            name={labAssist.fifth.name}
            division={labAssist.fifth.division}
            linkedin={labAssist.fifth.linkedin}
            facebook={labAssist.fifth.facebook}
            insta={labAssist.fifth.insta}
            image={labAssist.fifth.image}
          />
          <MemberContainer
            name={labAssist.sixth.name}
            division={labAssist.sixth.division}
            linkedin={labAssist.sixth.linkedin}
            facebook={labAssist.sixth.facebook}
            insta={labAssist.sixth.insta}
            image={labAssist.sixth.image}
          />
          <MemberContainer
            name={labAssist.seventh.name}
            division={labAssist.seventh.division}
            linkedin={labAssist.seventh.linkedin}
            facebook={labAssist.seventh.facebook}
            insta={labAssist.seventh.insta}
            image={labAssist.seventh.image}
          />
          <MemberContainer
            name={labAssist.eight.name}
            division={labAssist.eight.division}
            linkedin={labAssist.eight.linkedin}
            facebook={labAssist.eight.facebook}
            insta={labAssist.eight.insta}
            image={labAssist.eight.image}
          />
          <MemberContainer
            name={labAssist.nine.name}
            division={labAssist.nine.division}
            linkedin={labAssist.nine.linkedin}
            facebook={labAssist.nine.facebook}
            insta={labAssist.nine.insta}
            image={labAssist.nine.image}
          />
          <MemberContainer
            name={labAssist.ten.name}
            division={labAssist.ten.division}
            linkedin={labAssist.ten.linkedin}
            facebook={labAssist.ten.facebook}
            insta={labAssist.ten.insta}
            image={labAssist.ten.image}
          />
          <MemberContainer
            name={labAssist.eleven.name}
            division={labAssist.eleven.division}
            linkedin={labAssist.eleven.linkedin}
            facebook={labAssist.eleven.facebook}
            insta={labAssist.eleven.insta}
            image={labAssist.eleven.image}
          />
          <MemberContainer
            name={labAssist.twelve.name}
            division={labAssist.twelve.division}
            linkedin={labAssist.twelve.linkedin}
            facebook={labAssist.twelve.facebook}
            insta={labAssist.twelve.insta}
            image={labAssist.twelve.image}
          />
          <MemberContainer
            name={labAssist.thirteen.name}
            division={labAssist.thirteen.division}
            linkedin={labAssist.thirteen.linkedin}
            facebook={labAssist.thirteen.facebook}
            insta={labAssist.thirteen.insta}
            image={labAssist.thirteen.image}
          />
          <MemberContainer
            name={labAssist.fourteen.name}
            division={labAssist.fourteen.division}
            linkedin={labAssist.fourteen.linkedin}
            facebook={labAssist.fourteen.facebook}
            insta={labAssist.fourteen.insta}
            image={labAssist.fourteen.image}
          />
          <MemberContainer
            name={labAssist.fifteen.name}
            division={labAssist.fifteen.division}
            linkedin={labAssist.fifteen.linkedin}
            facebook={labAssist.fifteen.facebook}
            insta={labAssist.fifteen.insta}
            image={labAssist.fifteen.image}
          />
          <MemberContainer
            name={labAssist.sixteen.name}
            division={labAssist.sixteen.division}
            linkedin={labAssist.sixteen.linkedin}
            facebook={labAssist.sixteen.facebook}
            insta={labAssist.sixteen.insta}
            image={labAssist.sixteen.image}
          />
          <MemberContainer
            name={labAssist.seventeen.name}
            division={labAssist.seventeen.division}
            linkedin={labAssist.seventeen.linkedin}
            facebook={labAssist.seventeen.facebook}
            insta={labAssist.seventeen.insta}
            image={labAssist.seventeen.image}
          />
          <MemberContainer
            name={labAssist.eighteen.name}
            division={labAssist.eighteen.division}
            linkedin={labAssist.eighteen.linkedin}
            facebook={labAssist.eighteen.facebook}
            insta={labAssist.eighteen.insta}
            image={labAssist.eighteen.image}
          />
        </div>

        {/* generation filter */}
        {/* <div className={styles.title}>
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
        </div> */}

        {/* <div className={`${styles.slider} ${'slider-mobile'}`}>
					<Slider {...responsiveLecturerSlider}>
						<div>
							<MemberResponsive {...dosenContainer} />
						</div>
						<div>
							<MemberResponsive {...dosenContainer} />
						</div>
					</Slider>
				</div> */}
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
