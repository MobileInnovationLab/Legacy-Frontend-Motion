import Head from "next/head";
import ReactPaginate from "react-paginate";

import Navbar from "../components/navbar";
import BigTitle from "../components/bigTitle";
import Footer from "../components/footer";
import ActivityContainer from "../components/activityContainer";

import styles from "../styles/pages/activity.module.scss";
import TopButton from "../components/topButton";
import React, { useState, useEffect } from "react";
import API from "../api";
import { BASE_URL } from "../api/const";
import GeneralSeo from "../components/seo/generalSeo";

function Activity() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.getActivity().then((resp) => setData(resp.data));
    console.log(data);
  }, [data]);

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="Activity" />

      <Navbar />

      <BigTitle>Our Activity</BigTitle>

      {/* <section className={styles.first}>
        {data?.map((activity) => (
          <React.Fragment key={activity.id}>
            <ActivityContainer
              photo={`${BASE_URL}${activity?.thumbnail}`}
              title={activity.name}
              date={activity.updated_at}
            />
          </React.Fragment>
        ))}
      </section> */}

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
