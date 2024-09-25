import styles from './app.module.css'

import { Header } from './0header/header';
import { Stat } from './1stat/stat';
import { User } from './2user/user';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Header}> <Header></Header> </div>
      <div   className={styles.Stat}>   <Stat></Stat>   </div>
      <div   className={styles.User}>   <User></User>   </div>
    </div>
  );
}

export default App;
