import styles from './header.module.css'

// import { DynamicInput } from './input/input'

export function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.header}></div>
            {/* <DynamicInput></DynamicInput> */}
            <input type="text" className={styles.input}/>
        </div>
    )
}