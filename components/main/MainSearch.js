import readingGlasses from '@/public/Search.svg';
import styles from './mainSearch.module.css'
import Image from 'next/image'

function MainSearch() {
  return (
    <div className={styles.MainSearch}>
      <input className={styles.searchBar} type="text" placeholder="링크를 검색해 보세요."/>
      <Image className={styles.readingGlasses} src={readingGlasses} alt="" />
    </div>
  )
}

export default MainSearch;