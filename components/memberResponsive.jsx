import MemberContainer from "./memberContainer"
import styles from '../styles/components/memberResponsive.module.scss'

export default function memberResponsive(props) {
    return (
        <section className={styles.container}>
            <MemberContainer
                name={props.first.name}
                division={props.first.division}
                linkedin={props.first.linkedin}
                facebook={props.first.facebook}
                insta={props.first.insta}
            />
            <MemberContainer
                name={props.second.name}
                division={props.second.division}
                linkedin={props.second.linkedin}
                facebook={props.second.facebook}
                insta={props.second.insta}
            />
            <MemberContainer
                name={props.third.name}
                division={props.third.division}
                linkedin={props.third.linkedin}
                facebook={props.third.facebook}
                insta={props.third.insta}
            />
            <MemberContainer
                name={props.fourth.name}
                division={props.fourth.division}
                linkedin={props.fourth.linkedin}
                facebook={props.fourth.facebook}
                insta={props.fourth.insta}
            />
        </section>
    )
}