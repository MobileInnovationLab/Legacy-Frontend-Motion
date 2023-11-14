import styles from '../styles/components/bigTitle.module.scss';

const BigTitle = ({children}) => {
    return (
        <div className={styles['page-title']}>
            <h1 className={styles['ini-title']}>{children}</h1>
        </div>
    )
}

export default BigTitle;