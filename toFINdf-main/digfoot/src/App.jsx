import { useState } from 'react'
import styles from './app.module.css'
import '@fontsource/open-sans';
import '@fontsource/open-sans/300.css'; // Light
import '@fontsource/open-sans/400.css'; // Regular
import '@fontsource/open-sans/500.css'; // Medium
import '@fontsource/open-sans/600.css'; // Semi Bold

import { Header } from './header/header'
import { Ad } from './AD/ad'
import { User } from './user/user'
import {Stat} from './stat/stat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <Ad></Ad>
      <div className={styles.Content0}>
        <Header></Header>
        <div className={styles.Content1}>
          <div className={styles.test}>
            <Stat></Stat>
            <Stat></Stat>
            <Stat></Stat>
            <Stat></Stat>
            <Stat></Stat>
            <Stat></Stat>
            <Stat></Stat>
            <Stat></Stat>
          </div>
          <User></User>
        </div>
      </div>
    </div>
  )
}

export default App
