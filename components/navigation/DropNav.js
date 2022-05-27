import { BsBoxArrowRight } from "react-icons/bs";
import styles from "../../styles/navbar-style/dropNav-style.module.scss";
import Logo from "../logo/Logo";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Checkbox from "../checkbox/Checkbox";

function DropNav() {
  const drop = useRef();
  const shadow = useRef();
  const router1 = useRouter();


  const close = () => {
    drop.current.style.left = "-100%";
    shadow.current.style.display = "none";
  };

  return (
    <>
      <div
        className={styles.shadowDrop}
        ref={shadow}
        id="shadow"
        onClick={() => {
          close();
        }}
      ></div>

      <div className={styles.dropNav} ref={drop} id="drop">
        <div className={styles.boxDrop}>
          <ul className={styles.dropUl}>
            <li className={styles.panel}>
              <Logo />
              <BsBoxArrowRight
                className={styles.cancel}
                onClick={() => {
                  close();
                }}
              />
            </li>
            <li className={router1.pathname == "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={router1.pathname == "/about" ? "active" : ""}>
              <Link href="/about">About</Link>
            </li>
            <li className={router1.pathname == "/contact" ? "active" : ""}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={styles.mode}>
              <span>Theme</span>
              <Checkbox />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DropNav;
