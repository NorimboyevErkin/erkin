import styles from "../../styles/pegination-style/pegination-style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

function Pegination() {
    const router = useRouter();
    console.log(router.query.id,"router");
  return (
    <div className={styles.peginationBox}>
      <ul className={styles.peginationNav}>
        <li
          className={
            router.query.id === "page=1" || router.query.id == undefined
              ? styles.activePegination
              : null
          }
        >
          <Link href="/page=1">1</Link>
        </li>
        <li
          className={
            router.query.id === "page=2" ? styles.activePegination : null
          }
        >
          <Link href="/page=2">2</Link>
        </li>
        <li
          className={
            router.query.id === "page=3" ? styles.activePegination : null
          }
        >
          <Link href="/page=3">3</Link>
        </li>
        <li
          className={
            router.query.id === "page=4" ? styles.activePegination : null
          }
        >
          <Link href="/page=4">4</Link>
        </li>
        <li
          className={
            router.query.id === "page=5" ? styles.activePegination : null
          }
        >
          <Link href="/page=5">5</Link>
        </li>
      </ul>
    </div>
  );
}

export default Pegination;
