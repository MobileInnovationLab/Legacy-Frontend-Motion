"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import TopButton from "@/core/components/topButton";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const navbarLinks = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "requirement",
    label: "Requirements",
  },
  {
    id: "benefit",
    label: "Benefits",
  },
];

const RecruitmentNavbar = ({ onNavigation, isFixed = true }) => {
  const router = useRouter();
  const usePathName = usePathname();
  const [isNavbarScroll, setIsNavbarScroll] = useState(false);
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY >= 90) {
      setIsNavbarScroll(true);
    } else {
      setIsNavbarScroll(false);
    }
  }

  function handleNavbarOpened() {
    setIsNavbarOpened(!isNavbarOpened);
  }

  function getNavClassName() {
    let className = `transition duration-300 ${isFixed ? "fixed" : ""} text-center m-auto left-0 right-0 py-5 z-10`;

    if (isNavbarScroll || !isFixed) {
      className += " bg-white shadow-sm";
    } else {
      className += " bg-transparent";
    }

    if (isNavbarOpened) {
      className += " opacity-0";
    } else {
      className += " opacity-1";
    }

    return className;
  }

  function getNavLogoSource() {
    if (isNavbarScroll || !isFixed) {
      return "/navbar/logo-red-transparent.png";
    }

    return "/navbar/logo-white-transparent.png";
  }

  function getNavUlClassName() {
    let className = "lg:flex hidden gap-x-10 ps-20 font-[inter] text-[16px] transition duration-400";

    if (isNavbarScroll || !isFixed) {
      className += " text-[#332C2B]";
    } else {
      className += ` text-[#FFEAEA]`;
    }

    return className;
  }

  function handleNavigation(id) {
    if (usePathName != "/recruitment") {
      router.push(`/recruitment#${id}`);
    } else {
      onNavigation(id);
    }
  }

  return (
    <div>
      <nav className={getNavClassName()}>
        <div className="container justify-between mx-auto flex border-b-4 border-black">
          <div className="flex items-center">
            <Link href="/recruitment" passHref className="flex items-center">
              <div className="w-[34px] h-[34px]">
                <img src={getNavLogoSource()} className="transition duration-400 w-full h-full object-contain" alt="" />
              </div>
            </Link>
            <ul className={getNavUlClassName()}>
              {navbarLinks.map((row) => (
                <li key={row.id}>
                  <a href="#" onClick={() => handleNavigation(row.id)} className="hover:text-[#332C2B] transition ease-out duration-300">
                    {row.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button data-collapse-toggle="navbar-default" type="button" onClick={handleNavbarOpened} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg block lg:hidden " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className={`w-5 h-5 ${!(isNavbarScroll || !isFixed) ? "text-white" : "text-[#F82F1E]"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <Link href="/recruitment/register" passHref className="bg-[#332C2B] text-white text-[inter] text-[16px] rounded-full px-8 py-3 hover:scale-110 transition duration-400 hidden lg:block">
            Join Us!
          </Link>
        </div>
      </nav>
      <div className={`z-10 bg-black fixed top-0 left-0 right-0 bg-opacity-80 transition duration-300 ${isNavbarOpened ? "opacity-1 bottom-0" : "opacity-0"}`}>
        <nav className={`transition duration-400 text-center m-auto left-0 right-0 z-10 bg-white z-20" ${isNavbarOpened ? "fixed" : "hidden"}`}>
          <div className="container justify-between mx-auto flex py-5">
            <div className="flex w-full items-center">
              <a href="#" className="flex items-center">
                <div className="w-[34px] h-[34px]">
                  <img src="/navbar/logo-red-transparent.png" className="transition duration-400 w-full h-full object-contain" alt="" />
                </div>
              </a>
            </div>
            <button type="button" onClick={handleNavbarOpened} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F82F1E]">
                <g clipPath="url(#clip0_2133_4484)">
                  <path d="M5.12615 5.30921C4.51353 5.9437 4.51353 6.97242 5.12615 7.60691L11.7816 14.5L5.12615 21.3931C4.51353 22.0276 4.51353 23.0563 5.12615 23.6908C5.73876 24.3253 6.732 24.3253 7.34461 23.6908L14 16.7977L20.6554 23.6908C21.268 24.3253 22.2613 24.3253 22.8739 23.6908C23.4865 23.0563 23.4865 22.0276 22.8739 21.3931L16.2185 14.5L22.8739 7.60691C23.4865 6.97242 23.4865 5.94371 22.8739 5.30921C22.2613 4.67472 21.268 4.67472 20.6554 5.30921L14 12.2023L7.34461 5.30921C6.732 4.67472 5.73876 4.67472 5.12615 5.30921Z" fill="#656A78" />
                </g>
                <defs>
                  <clipPath id="clip0_2133_4484">
                    <rect width="28" height="29" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          <div className="border-black border-b-[1px] border-black border-opacity-5 border-solid"></div>

          <ul className="text-left container mx-auto">
            {navbarLinks.map((row) => (
              <li className="my-6" key={row.id}>
                <a
                  href="#"
                  onClick={() => {
                    setIsNavbarOpened(false);
                    handleNavigation(row.id);
                  }}
                  className="hover:text-[#332C2B] text-[inter] text-[16px] text-[#6A6A6A] transition ease-out duration-300">
                  {row.label}
                </a>
              </li>
            ))}
            <li className="my-[3.5rem]"></li>
            <li className="w-full">
              <button
                onClick={() => {
                  router.push("/recruitment/register");
                }}
                className="bg-[#332C2B] w-full text-white text-[inter] text-[16px] rounded-full py-4 hover:bg-opacity-90 transition duration-400">
                Join Us!
              </button>
            </li>
            <li className="my-10"></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default RecruitmentNavbar;
