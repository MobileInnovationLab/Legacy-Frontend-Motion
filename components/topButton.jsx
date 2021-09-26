import Link from "next/link"
import styles from '../styles/components/topButton.module.scss'
import { useState, useEffect } from "react";

export default function TopButton() {
    const [upButton, setUpButton] = useState(false);

    const scrollDown = () => {
        if (window.scrollY >= 500) {
            setUpButton(true);
        } else {
            setUpButton(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollDown);
        return () => {
            window.removeEventListener('scroll', scrollDown);
        }
    }, [])

    return (
        <>
            <Link href='' passHref>
                <button className={`${styles['inactive']} ${upButton && styles['active']}`}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.3599 34.9702L18.5699 20.7033C18.374 20.3838 18.3928 19.9747 18.6241 19.6755C19.6679 18.3201 20.7262 17.1091 21.6159 16.3011C21.6159 16.3011 22.3284 15.6051 22.7805 15.3039C23.3972 14.8175 24.2035 14.5834 24.9869 14.5834C25.8661 14.5834 26.6974 14.8399 27.362 15.3507C27.4807 15.4667 28.0037 15.9083 28.4308 16.3256C31.0893 18.7597 35.4811 25.1136 36.8125 28.4555C37.0271 28.9419 37.475 30.2404 37.5 30.914C37.5 31.5633 37.3583 32.1901 37.0479 32.7925C36.6208 33.5334 35.9583 34.1134 35.1728 34.439C34.6269 34.6487 32.9894 34.9723 32.9414 34.9723C31.7726 35.1819 30.1309 35.3386 28.2141 35.4159C27.8704 35.4302 27.537 35.2572 27.3599 34.9702Z" fill="white" />
                        <path opacity="0.4" d="M22.6255 34.0161C23.0151 34.645 22.5172 35.4367 21.7692 35.4061C20.015 35.3308 18.4691 35.2006 17.319 35.0418C17.294 35.0174 15.2543 34.6938 14.5647 34.3214C13.2834 33.6721 12.5 32.3981 12.5 31.0284V30.9144C12.5229 30.0311 13.3063 28.1526 13.3542 28.1526C13.748 27.2062 14.4147 25.9708 15.2168 24.6418C15.5793 24.0435 16.469 24.0292 16.8377 24.6276L22.6255 34.0161Z" fill="white" />
                    </svg>
                </button>
            </Link>
        </>
    )
}