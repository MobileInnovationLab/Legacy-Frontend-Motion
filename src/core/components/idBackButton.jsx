import Link from "next/link";
import styles from '../styles/components/idBackButton.module.scss';
import { useRouter } from "next/router";

const IdBackButton = () => {
    const router = useRouter()
    return (
        <>
            <button className={styles.button} onClick={() => router.back()}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 12.2744L19.25 12.2744" stroke="#F82F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="#F82F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
            </button>
        </>
    )
}

export default IdBackButton;