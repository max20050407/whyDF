import styles from './user.module.css'

import avaPH from '../img/gos.png'

import { Res } from './res/res'

export function User(){
    return(
        <div className={styles.User}>
            {/* <img src={avaPH} alt={avaPH} className={styles.ava}/> */}
            <div className={styles.user}>
                <div className={styles.ava}></div>
                <div className={styles.fio}>Райян</div>
                <div className={styles.fio}>Гослинг</div>
                <div className={styles.fio}>Томасович</div>
                <div className={styles.age}>43 года</div>
                <div className={styles.mail}>Outlook</div>
                <div className={styles.ph}></div>
                <div className={styles.adminB}>Вы админ</div>
            </div>
            <Res></Res>
        </div>
    )
}