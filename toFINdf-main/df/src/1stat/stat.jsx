import styles from './stat.module.css'

import { Block } from './block/block';

export function Stat(){
    return(
        <div className={styles.Stat}>
            <div className={styles.list}>
                <div className={styles.block}><Block></Block></div>
                <div className={styles.block}><Block></Block></div>
                <div className={styles.block}><Block></Block></div>
                <div className={styles.block}><Block></Block></div>
                <div className={styles.block}><Block></Block></div>
                <div className={styles.block}><Block></Block></div>
                <div className={styles.block}><Block></Block></div>
                <div className={styles.block}><Block></Block></div>
            </div>
        </div>
    )
}