import Image from "next/image";
import styles from '../styles/components/divisionBox.module.scss'

export default function divisionBox() {
    return (
        <div className={styles['second-box-division']}>
            <div className={styles['second-box-div-inside']}>
            <Image
                src={require("../public/main-index/role/role-ba.png")}
                alt='Business Analyst Logo'
                width={180}
                height={180}
            />
            <article className={styles['second-box-article']}>
                <h1 className={styles['second-box-article-title']}>Business Analyst</h1>
                <p className={styles['second-box-article-p']}>Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </article>
            </div>
            <div className={styles['second-box-div-inside']}>
            <Image
                src={require("../public/main-index/role/role-uiux.png")}
                alt='UI/UX Design Logo'
                width={180}
                height={180}
            />
            <article className={styles['second-box-article']}>
                <h1 className={styles['second-box-article-title']}>UI/UX Design</h1>
                <p className={styles['second-box-article-p']}>Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </article>
            </div>
            <div className={styles['second-box-div-inside']}>
            <Image
                src={require("../public/main-index/role/role-mp.png")}
                alt='Mobile Programming Logo'
                width={180}
                height={180}
            />
            <article className={styles['second-box-article']}>
                <h1 className={styles['second-box-article-title']}>Mobile Programming</h1>
                <p className={styles['second-box-article-p']}>Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </article>
            </div>
        </div>
    )
}