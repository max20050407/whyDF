import styles from './header.module.css'

import logo_DF from '../img/logos/wDFL.svg'
import logo_Pro from '../img/logos/wProL.svg'
import logo_Sfedu from '../img/logos/wSfeduL.svg'

export function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.button}>
                <img src={logo_DF} className={styles.logo}/>
                <div className={styles.title}>Цифровой след</div> 
            </div>
            <div className={styles.button}>
                <img src={logo_Pro} className={styles.logoB}/>
            </div>
            <div className={styles.button}>
                <img src={logo_Sfedu} className={styles.logoB}/>
            </div>
            {/* <input type="text" className={styles.input} placeholder='Найти студента!'/> */}
        </div>
    )
}