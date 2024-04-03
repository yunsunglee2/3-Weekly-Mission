import Header from '@/components/header';
import styles from '@/styles/404.module.css';

export default function NotFound() {
  return (
    <>
        <Header />
        <div className={styles.notFound}>
          <div className={styles.content}>
            찾을 수 없는 페이지입니다.
            <br />
            요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 :)
          </div>
        </div>
    </>
  );
} 
