import Navbar from '../components/navbar';
import BigTitle from '../components/bigTitle';
import ProductContainer from '../components/productContainer';
import Footer from '../components/footer';

import styles from '../styles/pages/product.module.scss';
import TopButton from '../components/topButton';
import { useEffect, useState } from 'react';
import API from '../api';

function Product() {
    let container = {
        title: 'Sendal Lempar',
        image: {
            src: '/coba/sandal.jpg',
            alt: 'ini foto',
        },
        text: 'Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod adsdsadasdsad sdasfdfsd dsadasdas',
        writer: 'Zara Adisty',
    };

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.getProducts()
            .then((product) => setData(product.data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className={styles['main-body']}>
            <Navbar />

            <BigTitle>Our Product</BigTitle>

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

            <section className={styles.grid}>
                {data?.map((val) => (
                    <ProductContainer
                        key={val.id}
                        id={val.id}
                        image={{
                            src: '/coba/ical.png',
                            alt: val.title,
                        }}
                        title={val.name}
                        text={val.description}
                        writer={val.creator}
                    />
                ))}
            </section>

            <TopButton />
            <Footer />
        </div>
    );
}

export default Product;