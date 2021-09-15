import MemberContainer from "./memberContainer"
import styles from '../styles/components/memberResponsive.module.scss'

export default function memberResponsive() {
    return (
        <section className={styles.container}>
            <MemberContainer />
            <MemberContainer />
            <MemberContainer />
            <MemberContainer />
        </section>
    )
}