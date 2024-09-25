import styles from './block.module.css'

export function Block(){
    return(
        <div className={styles.Block}>
            <div className={styles.ava}>ТУТ БУДЕТ ПИКЧА</div>
            <div className={styles.title}>НАЗВАНИЕ</div>
            <div className={styles.progress}>progress</div>
        </div>
    )
}