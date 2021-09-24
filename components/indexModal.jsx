import styles from '../styles/components/indexModals.module.scss'

import { useState } from 'react'

const IndexModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ?
        <div className={styles["whole-page"]} onClick={() => setOpen(false)}>
          <div className={styles.container}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2FcHPaikrsM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        : ''
      }
    </>
  )
}

export default IndexModal