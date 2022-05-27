import styles from "../../../styles/navbar-style/navbar-style.module.scss";
import Logo from "../../logo/Logo";
import Nav from "../../navigation/Nav";
import { FcMenu } from "react-icons/fc";
import DropNav from "../../navigation/DropNav";
import { memo } from "react";
import TranslateBtn from "../../translateBtn/TranslateBtn";
import Checkbox from "../../checkbox/Checkbox";

function Navbar() {
  return (
    <>
      <DropNav />
      <div className={styles.header}>
        <div className="container">
          <div className={styles.navbarBox}>
            <div className={styles.navLeft}>
              <Logo className={styles.logo} />
              <Nav className={styles.nav} id="nav" />
            </div>
            <div className={styles.navRight}>
              <Checkbox/>
              <TranslateBtn />
            </div>
          </div>
          <div className={styles.navbarBox2}>
            <Logo />
            <FcMenu
              className={styles.menu}
              onClick={() => {
                document.querySelector("#drop").style.left = "0";
                document.querySelector("#shadow").style.display = "flex";
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Navbar);
