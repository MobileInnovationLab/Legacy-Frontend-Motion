"use client";

import Navbar from "@/core/components/navbar";
import BigTitle from "@/core/components/bigTitle";
import AchievementContainer from "@/core/components/achievementContainer";
import TopButton from "@/core/components/topButton";

import styles from "@/core/styles/pages/achievement.module.scss";
import Footer from "@/core/components/footer";
import React, { useEffect, useState } from "react";
import IndexAchievementContainer from "@/core/components/indexAchievementContainer";
import GeneralSeo from "@/core/components/seo/generalSeo";
import { useRouter } from "next/navigation";

function Achievement() {
  const router = useRouter();

  const [data, setData] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="Achievement" />
      <Navbar />

      <BigTitle>Achievement</BigTitle>

      <section className={styles.flex}>
        <div className={styles["flex-cards"]}>
          <React.Fragment key={"indra"}>
            <AchievementContainer
              image={`https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80`}
              title={"Juara Satu Lomba Gemastik"}
              team={"Gelato 7.0"}
              id={"Indra_Tai"}
            />
          </React.Fragment>
        </div>
      </section>

      <TopButton />
      <Footer />
    </div>
  );
}

export default Achievement;
