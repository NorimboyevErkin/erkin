import Image from "next/image";
import styles from "../../styles/navbar-style/navbar-style.module.scss";
import logo from "../../public/avatar.jpg";
import Link from "next/link";

function Logo() {
  return (
      <Link href="/">
    <div className={styles.logo}>
        <Image src={logo} width={40} height={40} className={styles.logoImg} />
        <h1>logo</h1>
    </div>
      </Link>
  );
}

export default Logo;
