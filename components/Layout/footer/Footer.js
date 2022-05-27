import styles from "../../../styles/footer-style/footer-style.module.scss";
import React , {useEffect} from 'react';
import Logo from "../../logo/Logo";
import Nav from "../../navigation/Nav";
import Networks from "../../navigation/Networks";
import AOS from "aos";
import "aos/dist/aos.css";
import TranslateBtn from "../../translateBtn/TranslateBtn";
import Checkbox from "../../checkbox/Checkbox";

function Footer() {
    useEffect(() => {
      AOS.init({});
    }, []);
    return (
      <div className={styles.footer}>
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
          >
            <div className={styles.footerBox}>
              <div className={styles.footerLogo}>
                <Logo />
              </div>
              <Nav />
              <Networks />
            </div>
            <span className={styles.line}></span>
            <div className={styles.footerBoxEnd}>
              <p className={styles.title}>
                Portfolio BY{" "}
                <span>
                  <a href="mailto:norimboyeve@gmail.com">Norimboyev Erkin</a>{" "}
                  @2021
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;