import styles from '../styles/components/indexAchievementContainer.module.scss'

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import Image from 'next/image'

export default function indexAchievementContainer(props) {
    const [onHover, setOnhover] = useState(false);

    return (
        <section className={styles.container} onClick={() => setOnhover(true)}>
            <div className={styles.img}>
                <Image
                    src='/coba/sandal.jpg'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <CSSTransition
                in={onHover}
                classNames='animate'
                timeout={300}
            >
                <div className={styles.text}>
                    <h5>Juara 1 Gemastik 2018: UX Design</h5>
                    <hr />
                    <p>by Tim 2One</p>
                </div>
            </CSSTransition>
        </section>
    )
}