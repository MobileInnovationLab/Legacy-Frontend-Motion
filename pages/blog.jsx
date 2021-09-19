import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle';
import styles from '../styles/pages/blog.module.scss';

function Blog() {
    return (
        <div className={styles['main-body']}>

            <Navbar />

            <BigTitle>Our Blog</BigTitle>

            <section className={styles.search}>
                <form className={styles['search-bar']}>
                    <input type="text" placeholder='Search..' />
                    <button type="submit">
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' >
                            <circle cx='9.80565' cy='9.80547' r='7.49047' stroke='#F82F1E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
                            <path d='M15.0154 15.4042L17.9521 18.3333' stroke='#F82F1E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
                        </svg>
                    </button>
                </form>
            </section>

            <div className={styles.grid}>

            </div>
        </div>
    )
}

export default Blog;