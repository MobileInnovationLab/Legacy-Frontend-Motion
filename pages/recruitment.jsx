import styles from "../styles/pages/recruitment.module.scss";
//import styles from "../styles/pages/404.module.scss";
import NavbarWhite from "../components/navbarWhite";
import Footer from "../components/footer";
import Link from "next/link";
import Navbar from "../components/navbar";
import BigTitle from "../components/bigTitle";
import Image from "next/image";
import Head from "next/head";
import { Formik } from "formik";

export default function Recruitment() {
  // const formik = useFormik({
  //   initialValues: {},
  // });

  return (
    <div className={styles.main}>
      <Head>
        <title>Recruitment</title>
      </Head>

      <Navbar />
      <BigTitle>Recruitment</BigTitle>

      <div className={styles.illustration}>
        <Image
          src="/recruitment/recruit-illu.png"
          alt="Recruitment Illustration"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1>Join Us and Be a Champions</h1>

      <form>
        <label>
          <h5>
            Full Name<p>*</p>
          </h5>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Input your full name"
        />
        <label>
          <h5>
            Email SSO<p>*</p>
          </h5>
        </label>
        <input
          id="email"
          type="email"
          name=""
          placeholder="example@gmail.com"
        />
        <div className={styles.flex}>
          <label className={styles.half}>
            <h5>
              NIM<p>*</p>
            </h5>
            <input
              id="nim"
              type="text"
              name="nim"
              placeholder="Input NIM (ex:120101020)"
            />
          </label>
          <label className={styles.half}>
            <h5>
              Major<p>*</p>
            </h5>
            <select id="major" value="Informatika">
              <option value="Informatika">IF</option>
              <option value="Desain Komunikasi Visual">DKV</option>
              <option value="Seni Rupa">SR</option>
            </select>
          </label>
        </div>
        <div className={styles.flex}>
          <label className={styles.half}>
            <h5>
              Student Year<p>*</p>
            </h5>
            <select>
              <option value="Informatika">IF</option>
              <option value="Desain Komunikasi Visual">DKV</option>
              <option value="Seni Rupa">SR</option>
            </select>
          </label>
          <label className={styles.half}>
            <h5>
              Division<p>*</p>
            </h5>
            <select value="Informatika">
              <option value="Informatika">IF</option>
              <option value="Desain Komunikasi Visual">DKV</option>
              <option value="Seni Rupa">SR</option>
            </select>
          </label>
        </div>
        <div className={styles.flex}>
          <label className={styles.half}>
            <h5>
              Upload CV<p>*</p>
            </h5>
            <input type="file" name="" id="" />
          </label>
          <label className={styles.half}>
            <h5>
              Upload Portofolio<p>*</p>
            </h5>
            <input type="file" name="" id="" />
          </label>
        </div>
        <div className={styles.flex}>
          <label className={styles.half}>
            <h5>
              Upload Motivation Letter<p>*</p>
            </h5>
            <input type="file" name="" id="" />
          </label>
          <label className={styles.half}>
            <h5>
              Upload KSM<p>*</p>
            </h5>
            <input type="file" name="" id="" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
