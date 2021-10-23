import styles from '../styles/components/activityContainer.module.scss'
import Image from 'next/image'

export default function activityContainer(props) {
  return (
    <section className={styles.container}>
      {/* <div className={styles.img}>
        <Image
          src={photo}
          alt="Activity photo"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
      <h5>{props.title}</h5>
      <p>{props.date}</p>
    </section>
  );
}