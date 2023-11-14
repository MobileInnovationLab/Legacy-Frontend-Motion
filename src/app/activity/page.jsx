"use client";

import Navbar from "@/core/components/navbar";
import BigTitle from "@/core/components/bigTitle";
import Footer from "@/core/components/footer";
import ActivityContainer from "@/core/components/activityContainer";

import styles from "@/core/styles/pages/activity.module.scss";
import TopButton from "@/core/components/topButton";
import React, { useState, useEffect } from "react";

import GeneralSeo from "@/core/components/seo/generalSeo";
import { useRouter } from "next/navigation";

function Activity() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="Activity" />

      <Navbar />

      <BigTitle>Our Activity</BigTitle>

      <section className={styles.first}>
        <React.Fragment key={"1"}>
          <ActivityContainer
            photo={`https://images.unsplash.com/photo-1535961652354-923cb08225a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`}
            title={"Makrab Motionlab"}
            date={"19 Desember 2023"}
          />
        </React.Fragment>
      </section>

      {/* <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                // pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                // onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            /> */}

      <TopButton />
      <Footer />
    </div>
  );
}

export default Activity;
