import styles from './ad.module.css'

import dfB from '../img/dfB.svg'
import proB from '../img/proB.svg'
import sfedB from '../img/sfedB.svg'

export function Ad(){
    return(
        <div className={styles.Ad}>
            <a href="" target="_blank" rel="noopener noreferrer">
                <img src={dfB} className={styles.ad}/>
            </a>
            <a href="https://proictis.sfedu.ru" target="_blank" rel="noopener noreferrer">
                <img src={proB} className={styles.ad}/>
            </a>
            <a href="https://sfedu.ru/" target="_blank" rel="noopener noreferrer">
                <img src={sfedB} className={styles.ad}/>
            </a>
        </div>
    )
}