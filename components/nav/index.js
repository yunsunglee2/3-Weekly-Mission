import logoImage from '@/public/Linkbrary.svg'
import Account from "@/components/header/Account/index.js";
import Logo from "@/components/header/Logo/Logo";
import styles from '@/components/header/Header.module.css';

function Nav() {
  return (
    <div className={styles.Header}>
        <div className={styles.box01}>
          <div className={styles.item01}>
          <Logo value={logoImage}/>
            <Account />
          </div>
        </div>        
    </div>
  )
}

export default Nav;