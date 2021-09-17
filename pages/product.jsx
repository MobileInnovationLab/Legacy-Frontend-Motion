import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle';
import ProductContainer from "../components/productContainer";
import Footer from "../components/footer";

import styles from '../styles/pages/product.module.scss';
import TopButton from '../components/topButton';

function Product() {

    let container = {
        title: 'Sendal Lempar',
        image: {
            src: '/coba/sandal.jpg',
            alt: 'ini foto'
        },
        text: 'Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod adsdsadasdsad sdasfdfsd dsadasdas',
        writer: 'Zara Adisty'
    }

    return (
        <div className={styles['main-body']}>

            <Navbar />

            <BigTitle>Our Product</BigTitle>

            {/* <form>
                <label>
                    <input type="text" placeholder='search' />
                </label>
                <input type="submit" />
            </form> */}

            <section className={styles.search}>
                <div className={styles['search-bar']}>
                    Search...
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.80565" cy="9.80547" r="7.49047" stroke="#F82F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.0154 15.4042L17.9521 18.3333" stroke="#F82F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </section>

            <section className={styles.grid}>
                <ProductContainer {...container} />
                <ProductContainer {...container} />
                <ProductContainer {...container} />
                <ProductContainer {...container} />
            </section>

            <TopButton />
            <Footer />

        </div>
    )
}

export default Product;