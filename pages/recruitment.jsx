import styles from '../styles/pages/recruitment.module.scss';
import Navbar from '../components/navbar';
import BigTitle from '../components/bigTitle';
import Image from 'next/image';

export default function recruitment() {
    console.log('formErr')
    return (
        <div className={styles.main}>
            <Navbar />
            <BigTitle>Recruitment</BigTitle>

            <div className={styles.illustration}>
                <Image
                    src='/recruitment/recruit-illu.png'
                    layout='fill'
                    objectFit='cover'
                />
            </div>

            <h1>Join Us and Be a Champions</h1>

            <form>
                <label>
                    <h5>Full Name<p>*</p></h5>
                    <input type="text" name="name" placeholder='Input your full name' />
                </label>
                <label>
                    <h5>Email SSO<p>*</p></h5>
                    <input type="email" name="" placeholder='example@gmail.com' />
                </label>
                <div className={styles.flex}>
                    <label className={styles.half}>
                        <h5>NIM<p>*</p></h5>
                        <input type="text" name="nim" placeholder="Input NIM (ex:120101020)" />
                    </label>
                    <label className={styles.half}>
                        <h5>Major<p>*</p></h5>
                        <select value="Informatika">
                            <option value="Informatika">IF</option>
                            <option value="Desain Komunikasi Visual">DKV</option>
                            <option value="Seni Rupa">SR</option>
                        </select>
                    </label>
                </div>
                <div className={styles.flex}>
                    <label className={styles.half}>
                        <h5>Student Year<p>*</p></h5>
                        <select>
                            <option value="Informatika">IF</option>
                            <option value="Desain Komunikasi Visual">DKV</option>
                            <option value="Seni Rupa">SR</option>
                        </select>
                    </label>
                    <label className={styles.half}>
                        <h5>Division<p>*</p></h5>
                        <select value="Informatika">
                            <option value="Informatika">IF</option>
                            <option value="Desain Komunikasi Visual">DKV</option>
                            <option value="Seni Rupa">SR</option>
                        </select>
                    </label>
                </div>
                <div className={styles.flex}>
                    <label className={styles.half}>
                        <h5>Upload CV<p>*</p></h5>
                        <input type="file" name="" id="" />
                    </label>
                    <label className={styles.half}>
                        <h5>Upload Portofolio<p>*</p></h5>
                        <input type="file" name="" id="" />
                    </label>
                </div>
                <div className={styles.flex}>
                    <label className={styles.half}>
                        <h5>Upload Motivation Letter<p>*</p></h5>
                        <input type="file" name="" id="" />
                    </label>
                    <label className={styles.half}>
                        <h5>Upload KSM<p>*</p></h5>
                        <input type="file" name="" id="" />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}