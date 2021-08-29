import Image from "next/image"
import styles from '../styles/components/product.module.scss'

export default function ProductContainer(props) {
    return (
        <section className={styles.container}>
            <div className={styles.img}>
                <Image
                    src={props.image.src}
                    alt={props.image.alt}
                    layout='responsive'
                    width={320}
                    height={250}
                />
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles['description-text']}>{props.text}</p>
            <div className={styles.divider} />
            <p className={styles.writer}>by {props.writer}</p>
        </section>
    )
}