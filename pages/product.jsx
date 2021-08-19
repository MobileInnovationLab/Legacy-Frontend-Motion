import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle';
import styles from '../styles/pages/product.module.scss';

function Product() {
    return (
        <div className={styles['main-body']}>

            <Navbar />

            <BigTitle>Product</BigTitle>
        </div>
    )
}

export default Product;