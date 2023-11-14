"use client";

import RecruitmentNavbar from "../components/navbar/RecruitmentNavbar";

const RecruitmentDeclinedView = () => {
  return (
    <>
      <RecruitmentNavbar isFixed={false} />

      <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center my-20">
        <img src="/recruitment/recruitment-declined.png" alt="Recruitment Delined" />
        <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik]">Ooops... Sorry !</h2>
        <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] mt-3">Unfortunately You can not be accepted as member of Mobile Innovation Laboratory. Keep spirit and don&apos;t give up!</p>
      </section>
    </>
  );
};

export default RecruitmentDeclinedView;
