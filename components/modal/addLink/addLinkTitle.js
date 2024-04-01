import styles from '@/components/modal/addLink/addLinkModal.module.css'

function Titles({ title, subtitle }) {
    return (
      <div className={styles.titles}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subtitle}</div>
      </div>
    );
  }

  export default Titles;