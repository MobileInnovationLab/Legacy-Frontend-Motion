import styles from '../styles/pages/recruitment.module.scss';
import Navbar from '../components/navbar';
import BigTitle from '../components/bigTitle';

export default function recruitment() {
    return (
        <>
            <Navbar />
            <BigTitle>Recruitment</BigTitle>

            <h1>Join Us and Be a Champions</h1>

            <form>
                <label>
                    Full Name<p>*</p>
                    <input type="text" name="name" placeholder='Input your full name' />
                </label>
                <label>
                    Email SSO<p>*</p>
                    <input type="text" name="" />
                </label>
                <label>
                    NIM<p>*</p>
                    <input type="text" name="Input your full name" />
                </label>
                <label>
                    <select value="Informatika">
                        <option value="Informatika">IF</option>
                        <option value="Desain Komunikasi Visual">DKV</option>
                        <option value="Seni Rupa">SR</option>
                    </select>
                </label>
            </form>
        </>
    )
}