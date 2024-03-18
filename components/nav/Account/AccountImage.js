import Image from "next/image";
import styles from './AccountImage.module.css';

function AccountImage({ name, src ='' }) {
  return (
    <div className={styles.accountImage}>
      <Image
        src={src}
        width={20}
        height={20}
        alt={name}
      />
    </div>
  );
}
export default AccountImage;
