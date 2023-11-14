"use client";

import React, { useRef } from "react";
import RecruitmentNavbar from "../components/navbar/RecruitmentNavbar";
import RecruitmentAnnouncementCard from "./RecruitmentAnnouncementView";

const RecruitmentView = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const requirementRef = useRef(null);
  const benefitRef = useRef(null);

  function handleNavigation(id) {
    switch (id) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth", top: -100 });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth", top: -100 });
        break;
      case "requirement":
        requirementRef.current?.scrollIntoView({ behavior: "smooth", top: -100 });
        break;
      case "benefit":
        benefitRef.current?.scrollIntoView({ behavior: "smooth", top: -100 });
        break;
      default:
        break;
    }
  }

  return (
    <div className="bg-[#FCF6F6]">
      <RecruitmentNavbar onNavigation={handleNavigation} />
      <section ref={homeRef} className="w-full bg-[url('/recruitment/recruitment-landing-bg.png')] bg-cover bg-no-repeat bg-[center_bottom_0rem]">
        <div className="container w-full mx-auto flex justify-between flex-col lg:flex-row items-center pb-40 pt-32">
          <h2 className="font-bold font-[rubik] text-[30px] lg:text-[60px] text-white text-center lg:text-left mb-10 lg:mb-0">
            <span className="bg-black rounded-lg px-[35px] py-[7px]">Internship</span> in Mobile Innovation Laboratory
          </h2>
          <div className="w-2/3 h-auto lg:h-[30rem] pt-5 lg:pt-0">
            <img src="/recruitment/recruitment-landing.png" className="w-full h-full object-contain" alt="" />
          </div>
        </div>
      </section>

      <div className="my-12"></div>

      <RecruitmentAnnouncementCard />

      <div className="my-12"></div>

      <section ref={aboutRef}>
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">ABOUT</h3>
        <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]">Internship Activities</h1>
        <div className="flex flex-col lg:flex-row align-items-center mt-14 container justify-content-center m-auto">
          <div className="w-full h-[507px] bg-black rounded-lg me-10">
            <img src="/recruitment/internship-activities.png" alt="internship activites" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="flex flex-col justify-between bg-white text-left px-10 py-10 rounded-lg lg:w-3/4">
            <div>
              <h2 className="text-[24px] font-[inter] font-bold mb-8">What is Internship?</h2>
              <p className="text-[18px] font-[inter] font-light text-[#ACACAC]">Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. </p>
            </div>
            <div className="flex ms-auto">
              <button
                className="
                border rounded-full p-5 border-[#858585] group 
                hover:bg-[#F82F1E] hover:border-white
                transition delay-50
              ">
                <svg
                  className="
                  group-hover:fill-white
                  transition delay-50
                "
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="#6A6A6A"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.05382 10.6965C1.13858 10.7835 1.4586 11.1555 1.7567 11.4615C3.50438 13.386 8.06357 16.536 10.4498 17.4975C10.8122 17.652 11.7284 17.979 12.218 18C12.687 18 13.1342 17.892 13.5609 17.673C14.0928 17.367 14.5195 16.8855 14.7533 16.317C14.9038 15.9225 15.1376 14.742 15.1376 14.721C15.3714 13.4295 15.5 11.331 15.5 9.012C15.5 6.8025 15.3714 4.7895 15.18 3.4785C15.1581 3.4575 14.9243 1.9905 14.6685 1.488C14.1995 0.57 13.2832 0 12.3027 0H12.218C11.5794 0.0225 10.2365 0.5925 10.2365 0.6135C7.97881 1.5765 3.52484 4.572 1.73478 6.5625C1.73478 6.5625 1.23064 7.074 1.01145 7.3935C0.669508 7.8525 0.5 8.421 0.5 8.9895C0.5 9.624 0.691427 10.215 1.05382 10.6965Z" />
                </svg>
              </button>
              <div className="px-2"></div>
              <button
                className="
                border rounded-full p-5 border-[#858585] group 
                hover:bg-[#F82F1E] hover:border-white
                transition delay-50
              ">
                <svg
                  className="
                  group-hover:fill-white
                  transition delay-50
                "
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="#6A6A6A"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9462 10.6965C14.8614 10.7835 14.5414 11.1555 14.2433 11.4615C12.4956 13.386 7.93643 16.536 5.55017 17.4975C5.18777 17.652 4.27155 17.979 3.78203 18C3.31296 18 2.86581 17.892 2.43911 17.673C1.90721 17.367 1.48052 16.8855 1.24671 16.317C1.0962 15.9225 0.862397 14.742 0.862397 14.721C0.628592 13.4295 0.5 11.331 0.5 9.012C0.5 6.8025 0.628592 4.7895 0.820019 3.4785C0.841939 3.4575 1.07574 1.9905 1.33147 1.488C1.80054 0.57 2.71676 0 3.69727 0H3.78203C4.4206 0.0225 5.76352 0.5925 5.76352 0.6135C8.02119 1.5765 12.4752 4.572 14.2652 6.5625C14.2652 6.5625 14.7694 7.074 14.9886 7.3935C15.3305 7.8525 15.5 8.421 15.5 8.9895C15.5 9.624 15.3086 10.215 14.9462 10.6965" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="my-40"></div>

      <section className="">
        <h1 className="text-center lg:text-left font-[rubik] font-bold text-[28px] lg:text-[48px] container mx-auto">Route Map Motionlab</h1>
        <div className="mt-10 lg:mt-0">
          <img src="/recruitment/route-map.png" alt="route map" className="w-full object-cover" />
        </div>
      </section>

      <div className="my-20"></div>

      <section ref={requirementRef} className="container mx-auto">
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">REQUIREMENTS</h3>
        <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]">What are the Requirements?</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 mt-14">
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className="bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">01</div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto ms-5">Active Telkom University undergraduate student batch 2021-2023 from all major</p>
            </div>
            <div className="h-[50px] px-10 my-2">
              <img src="/recruitment/requirement-line.png" alt="requirement line" className="h-full object-contain" />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className=" bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">01</div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto ms-5">Active Telkom University undergraduate student batch 2021-2023 from all major</p>
            </div>
            <div className="h-[50px] px-10 my-2">
              <img src="/recruitment/requirement-line.png" alt="requirement line" className="h-full object-contain" />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className="bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">01</div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto ms-5">Active Telkom University undergraduate student batch 2021-2023 from all major</p>
            </div>
            <div className="h-[50px] px-10 my-2">
              <img src="/recruitment/requirement-line.png" alt="requirement line" className="h-full object-contain" />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className=" bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">01</div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto ms-5">Active Telkom University undergraduate student batch 2021-2023 from all major</p>
            </div>
            <div className="h-[50px] px-10 my-2">
              <img src="/recruitment/requirement-line.png" alt="requirement line" className="h-full object-contain" />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className="bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">01</div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto ms-5">Active Telkom University undergraduate student batch 2021-2023 from all major</p>
            </div>
            <div className="h-[50px] px-10 my-2">
              <img src="/recruitment/requirement-line.png" alt="requirement line" className="h-full object-contain" />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className=" bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">01</div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto ms-5">Active Telkom University undergraduate student batch 2021-2023 from all major</p>
            </div>
            <div className="h-[50px] px-10 my-2 lg:hidden block">
              <img src="/recruitment/requirement-line.png" alt="requirement line" className="h-full object-contain" />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className="bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">01</div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto ms-5">Active Telkom University undergraduate student batch 2021-2023 from all major</p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <p className="text-[#F82F1E] font-semibold italic px-5">*Only required for UI/UX Design and Mobile Programming applicant</p>
            <p className="text-[#F82F1E] font-semibold italic px-5">**Explanation about Motivation Video on the next slide</p>
          </div>
        </div>
      </section>

      <div className="my-40"></div>

      <section ref={benefitRef} className="container mx-auto">
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">BENEFITS</h3>
        <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]">What benefits do you get?</h1>
        <div className="flex gap-x-10 flex-col lg:flex-row">
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/chart.svg" alt="chart" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">Lorem Ipsum</h2>
              <p className="font-[inter] text-[18px] text-center">Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/pen-tool.svg" alt="pen tool" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">Lorem Ipsum</h2>
              <p className="font-[inter] text-[18px] text-center">Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/code.svg" alt="code" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">Lorem Ipsum</h2>
              <p className="font-[inter] text-[18px] text-center">Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-10 flex-col lg:flex-row">
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/chart.svg" alt="chart" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">Lorem Ipsum</h2>
              <p className="font-[inter] text-[18px] text-center">Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/pen-tool.svg" alt="pen tool" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">Lorem Ipsum</h2>
              <p className="font-[inter] text-[18px] text-center">Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/code.svg" alt="code" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">Lorem Ipsum</h2>
              <p className="font-[inter] text-[18px] text-center">Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-40"></div>
    </div>
  );
};

export default RecruitmentView;
