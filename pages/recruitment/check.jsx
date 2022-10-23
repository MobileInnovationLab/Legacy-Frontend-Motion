import styles from "../../styles/pages/recruitmentCheck.module.scss";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import BigTitle from "../../components/bigTitle";
import RecruitmentSeo from "../../components/seo/recruitmentSeo";

import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router'

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import API from "../../api";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Recruitment() {
  const router = useRouter();
  const [modalsAccepted, setModalsAccepted] = useState(false);
  const [modalsError, setModalsError] = useState(false);
  const [submit, setSubmit] = useState(false);

  // useEffect(() => {
  //   router.push("/404");
  // });

  return (
    <>
      {modalsAccepted ? (
        <motion.div
          className={styles["whole-page"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0 }}
        >
          <div className={styles["main-container"]}>
            <div className={styles.container}>
              <div 
                className={styles.xicon} 
                onClick={() => {
                  setSubmit(false);
                  setModalsAccepted(false);
                }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7L7 21" stroke="#332C2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7L21 21" stroke="#332C2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <Image
                src="/modals/congratulation.png"
                width={250}
                height={250}
                alt="Submitted Illustration"
              />
              <h3>Congratulations!</h3>
              <p>
                You have choosen as new member of Mobile Innovation Laboratory Fortune Cookie 6.0. Please check your email for more information
              </p>
              <button onClick={() => {}}>Join Group</button>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}

      {modalsError ? (
        <motion.div
          className={styles["whole-page"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0 }}
        >
          <div className={styles["main-container"]}>
            <div className={styles.container}>
              <Image
                src="/modals/notcongratulation.png"
                width={250}
                height={250}
                alt="Submitted Illustration"
              />
              <h3>Sorry, There is something wrong</h3>
              <p>
                It seems like there is something wrong with your connection
                or... <br />
                Try to upload the proper file (in pdf format with 8mb max size),
                <br /> or just try to refresh the page and re-submit
              </p>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}


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

        <h1>Member Announchment</h1>

        <Formik
          initialValues={{
            nim: "",
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmit(true);
            setTimeout(() => {
              // // post data to API
              // const payload = new FormData();
              // payload.append("nim", data.nim);
              // API.postCheckRecruitment(payload)
              //   .then((resp) => {
              //     // console.log(resp);
              //     if (resp == 400) {
              //       setModalsError(true);
              //     } else if (resp == 200) {
              //       setModals(true);
              //     } else {
              //       setModalsError(true);
              //     }
              //   })
              //   .catch((err) => {
              //     setModalsError(true);
              //   });
              // setSubmitting(false);

              if (data.nim == "1234567890") {
                setModalsAccepted(true);
              }

              // display accptence or rejection

            }, 500);
          }}
          validationSchema={Yup.object().shape({
            nim: Yup.number()
              .typeError("NIM must be a number")
              .required("Required")
              .test("len", "NIM must be 10 digits", (val) => {
                if (val) return val.toString().length === 10;
              }),
          })}
        >
          {({
            values,
            touched,
            errors,
          }) => (
            <Form className={styles.form}>
              <div className={styles.flex}>
                <div className={styles.half}>
                  {/* <label>
                    <h5>
                      NIM<p>*</p>
                    </h5>
                  </label> */}
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
                {/* Button Check*/}
                <button
                  className={submit ? styles["button-submitted"] : ""}
                  type="submit"
                >
                  Check
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
      <Footer />
    </>
  );
}
