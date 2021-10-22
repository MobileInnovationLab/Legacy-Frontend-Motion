import styles from '../styles/components/activityContainer.module.scss'
import Image from 'next/image'

export default function activityContainer(title, date, photo) {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <Image
          src={photo}
          alt="Activity photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h5>{title}</h5>
      <p>{date}</p>
    </section>
  );
}