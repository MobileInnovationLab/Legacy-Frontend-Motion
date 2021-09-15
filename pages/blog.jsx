import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle';
import styles from '../styles/pages/blog.module.scss';

function Blog() {
    return (
        <div className={styles['main-body']}>

            <Navbar />

            <BigTitle>Our Blog</BigTitle>
        </div>
    )
}

export default Blog;