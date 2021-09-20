import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle';
import styles from '../styles/pages/blog.module.scss';
import Footer from "../components/footer";
import BlogContainer from '../components/blogContainer';

let container2 = {
    id: '1',
    title: 'Ini Adalah Contoh Blog 3',
    image: {
        src: '/coba/sandal.jpg',
        alt: 'ini foto',
    },
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    writer: 'Zara Adisty',
};

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
                <BlogContainer {...container2} />
            </div>

            <Footer />
        </div>
    )
}

export default Blog;