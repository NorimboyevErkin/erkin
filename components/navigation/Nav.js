import styles from "../../styles/navbar-style/navbar-style.module.scss";
import React, { useRef, memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav({drop}) {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <style jsx>
        {`
          #items {
            flex-direction: ${drop ? "column" : "row"};
          }
        `}
      </style>
      <ul className={styles.navUl} id="items">
        <li className={router.pathname == "/" ? styles.active : ""}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={router.pathname == "/about" ? styles.active : ""}>
          <Link href="/about">About</Link>
        </li>

        <li className={router.pathname == "/contact" ? styles.active : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default memo(Nav);
