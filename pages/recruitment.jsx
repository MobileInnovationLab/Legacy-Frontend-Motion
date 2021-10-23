import styles from "../styles/pages/recruitment.module.scss";
//import styles from "../styles/pages/404.module.scss";
//import NavbarWhite from "../components/navbarWhite";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BigTitle from "../components/bigTitle";
import RecruitmentSeo from "../components/seo/recruitmentSeo";

import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router'

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

export default function Recruitment() {
  const router = useRouter()

  useEffect(() => {
    router.push('/404')
  });

  return (
    <>
      <RecruitmentSeo />
      <Navbar />
      <BigTitle>Recruitment</BigTitle>
      <section className={styles.main}>
        <div className={styles.illustration}>
          <Image
            src="/recruitment/recruit-illu.png"
            alt="Recruitment Illustration"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h1>Join Us and Be a Champions</h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            nim: "",
            cv: "",
            portofolio: "",
            motivation_letter: "",
            ksm: "",
            major: "S1 TEKNIK TELEKOMUNIKASI",
            generation: "2021",
            division: "Business Analyst",
          }}
          onSubmit={(data, { setSubmitting }) => {
            setTimeout(() => {
              console.log(data);
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Required"),
            email: Yup.string()
              .email("Please input a valid email")
              .required("Required")
              .matches(
                /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@student.telkomuniversity.ac.id$/,
                "Telkom University Student's Email Required."
              ),
            nim: Yup.string().required("Required").min(5, "Input proper NIM"),
            // cv: Yup.required("Required"),
            // portofolio: Yup.required("Required"),
            // motivation_letter: Yup.required("Required"),
            // ksm: Yup.required("Required"),
            major: Yup.string().required("Required"),
            generation: Yup.string().required("Required"),
            division: Yup.string().required("Required"),
          })}
        >
          {({
            values,
            setFieldValue,
            handleChange,
            handleBlur,
            touched,
            errors,
          }) => (
            <Form className={styles.form}>
              <label>
                <h5>
                  Full Name<p>*</p>
                </h5>
              </label>
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Input your full name"
              />
              <div className={styles.errors}>
                <h5>{errors.name && touched.name && <p>*{errors.name}</p>}</h5>
              </div>
              <label>
                <h5>
                  Email SSO <p>*</p>
                </h5>
              </label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              <div className={styles.errors}>
                <h5>
                  {errors.email && touched.email && <p>*{errors.email}</p>}
                </h5>
              </div>
              <div className={styles.flex}>
                <div className={styles.half}>
                  <label>
                    <h5>
                      NIM<p>*</p>
                    </h5>
                  </label>
                  <Field
                    id="nim"
                    type="text"
                    name="nim"
                    placeholder="Input NIM (ex:120101020)"
                  />
                  <div className={`${styles.errors} ${styles.half}`}>
                    <h5>{errors.nim && touched.nim && <p>*{errors.nim}</p>}</h5>
                  </div>
                </div>
                <div className={styles.half}>
                  <label>
                    <h5>
                      Major<p>*</p>
                    </h5>
                  </label>
                  <select
                    name="major"
                    id="major"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="S1 TEKNIK TELEKOMUNIKASI">
                      S1 TEKNIK TELEKOMUNIKASI
                    </option>
                    <option value="S1 Teknik Elektro">S1 Teknik Elektro</option>
                    <option value="S1 Smart Science and Technology">
                      S1 Smart Science and Technology
                    </option>
                    <option value="S1 Computer Engineering">
                      S1 Computer Engineering
                    </option>
                    <option value="S1 Teknik Biomedis">
                      S1 Teknik Biomedis
                    </option>
                    <option value="S2 Teknik Elektro-Telekomunikasi">
                      S2 Teknik Elektro-Telekomunikasi
                    </option>
                    <option value="S1 Teknik Industri">
                      S1 Teknik Industri
                    </option>
                    <option value="S1 Sistem Informasi ">
                      S1 Sistem Informasi
                    </option>
                    <option value="S1 Teknik Logistik">
                      S1 Teknik Logistik
                    </option>
                    <option value="S2 Teknik Industri">
                      S2 Teknik Industri
                    </option>
                    <option value="S1 Informatika">S1 Informatika</option>
                    <option value="S1 Teknologi Informasi">
                      S1 Teknologi Informasi
                    </option>
                    <option value="S1 Rekayasa Perangkat Lunak">
                      S1 Rekayasa Perangkat Lunak
                    </option>
                    <option value="S1 Data Sains">S1 Data Sains</option>
                    <option value="S1 PJJ Informatika">
                      S1 PJJ Informatika
                    </option>
                    <option value="S2 Informatika">S2 Informatika</option>
                    <option value="S2 Cyber Security and Digital Forensic">
                      S2 Cyber Security and Digital Forensic
                    </option>
                    <option value="S1 International ICT Business">
                      S1 International ICT Business
                    </option>
                    <option value="S1 Manajemen Bisnis Telekomunikasi & Informatika">
                      S1 Manajemen Bisnis Telekomunikasi & Informatika (MBTI)
                    </option>
                    <option value="S1 Akuntansi">S1 Akuntansi</option>
                    <option value="S2 Manajemen">S2 Manajemen</option>
                    <option value="S2 Manajemen PJJ">S2 Manajemen PJJ</option>
                    <option value="S1 Administrasi Bisnis">
                      S1 Administrasi Bisnis
                    </option>
                    <option value="S1 Ilmu Komunikasi">
                      S1 Ilmu Komunikasi
                    </option>
                    <option value="S1 Digital Public Relation">
                      S1 Digital Public Relation
                    </option>
                    <option value="S1 Desain Komunikasi Visual">
                      S1 Desain Komunikasi Visual
                    </option>
                    <option value="S1 Product Innovation & Management">
                      S1 Product Innovation & Management
                    </option>
                    <option value="S1 Desain Interior ">
                      S1 Desain Interior
                    </option>
                    <option value="S1 Kriya">
                      S1 Kriya (Fashion and Textile Design)
                    </option>
                    <option value="S1 Creative Arts">
                      S1 Creative Arts (Intermedia Visual Arts)
                    </option>
                    <option value="S2 Desain">S2 Desain</option>
                    <option value="D3 Digital Connectivity">
                      D3 Digital Connectivity
                    </option>
                    <option value="D3 Teknik Informatika">
                      D3 Teknik Informatika
                    </option>
                    <option value="D3 Sistem Informasi">
                      D3 Sistem Informasi
                    </option>
                    <option value="D3 Sistem Informasi Akuntansi">
                      D3 Sistem Informasi Akuntansi
                    </option>
                    <option value="D3 Teknik Komputer">
                      D3 Teknik Komputer
                    </option>
                    <option value="D3 Digital Marketing">
                      D3 Digital Marketing
                    </option>
                    <option value="D3 Hospitality and Culinary Art">
                      D3 Hospitality and Culinary Art
                    </option>
                    <option value="S1 Terapan Digital Creative Multimedia">
                      S1 Terapan Digital Creative Multimedia (DCM)
                    </option>
                  </select>
                </div>
              </div>
              <div className={styles.flex}>
                <div className={styles.half}>
                  <label>
                    <h5>
                      Student Year<p>*</p>
                    </h5>
                  </label>
                  <select
                    name="generation"
                    id="generation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                  </select>
                </div>
                <div className={styles.half}>
                  <label htmlFor="">
                    <h5>
                      Division<p>*</p>
                    </h5>
                  </label>
                  <select
                    name="division"
                    id="division"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="UI/UX">UI/UX Design</option>
                    <option value="Mobile Programming">
                      Mobile Programming
                    </option>
                  </select>
                </div>
              </div>
              <div className={styles.flex}>
                <div className={styles.half}>
                  <label>
                    <h5>
                      Upload CV<p>*</p>
                    </h5>
                  </label>
                  <input type="file" name="" id="" />
                </div>
                <div className={styles.half}>
                  <label htmlFor="">
                    <h5>
                      Upload Portofolio<p>*</p>
                    </h5>
                  </label>
                  <input type="file" name="" id="" />
                </div>
              </div>
              <div className={styles.flex}>
                <div className={styles.half}>
                  <label htmlFor="">
                    <h5>
                      Upload Motivation Letter<p>*</p>
                    </h5>
                  </label>
                  <input type="file" name="" id="" />
                </div>
                <div className={styles.half}>
                  <label htmlFor="">
                    <h5>
                      Upload KSM<p>*</p>
                    </h5>
                  </label>
                  <input type="file" name="" id="" />
                </div>
              </div>
              <button type="submit">Submit</button>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </Form>
          )}
        </Formik>
      </section>
      <Footer />
    </>
  );
}
