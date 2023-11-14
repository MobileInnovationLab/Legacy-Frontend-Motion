"use client";

import Confetti from "react-confetti";
import RecruitmentNavbar from "../components/navbar/RecruitmentNavbar";
import useWindowDimensions from "@/core/hooks/useWindowDimensions";

const RecruitmentAcceptedView = () => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <RecruitmentNavbar isFixed={false} />
      <Confetti width={width} height={height} />

      <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center my-20">
        <img src="/recruitment/recruitment-accepted.png" alt="" />
        <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik]">Congratulations !</h2>
        <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] mt-3">You have choosen as new member of Mobile Innovation Laboratory Hazelnut 8.0. Please check your email for more information</p>
        <div className="my-3 lg:my-6"></div>
        <button type="submit" className="bg-[#F82F1E] text-white text-[inter] text-[14px] lg:text-[16px] rounded-full px-10 py-[1rem] hover:opacity-90 transition duration-800">
          Join Group
        </button>
      </section>
    </>
  );
};

export default RecruitmentAcceptedView;
