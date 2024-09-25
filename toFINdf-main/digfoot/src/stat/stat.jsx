import styles from './stat.module.css'

export function Stat(){
    return(
        <div className={styles.Stat}>
            <div className={styles.ava}></div>
            <div className={styles.nameAprog}>
                <div className={styles.name}></div>
                <div className={styles.prog}></div>
            </div>
        </div>
    )
}