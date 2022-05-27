import styles from "../../styles/gallary-style/gallary-style.module.scss";
import React, { useEffect } from "react";
import Image from "next/image";
// import one from "../../public/one.webp";
// import two from "../../public/two.webp";
import one from "../../public/show-case1.jpg";
import AOS from "aos";
import { IoLogoInstagram } from "react-icons/io";
import "aos/dist/aos.css";
import Title from "../title/title";

function InstaGallary() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <ul className={styles.gridBox}>
        <li className={styles.one} data-aos="fade-right" data-aos-offset="150">
          <Image
            layout="responsive"
            src={one}
            alt="img"
            className={styles.img}
          />
          {/* <div className={styles.shadow}>
            <a href="#">
              <IoLogoInstagram className={styles.withInstagram} />
            </a>
          </div> */}
        </li>
        <li className={styles.two} data-aos="fade-right" data-aos-offset="150">
          <Image
            layout="responsive"
            src={one}
            alt="img"
            className={styles.img}
          />
          {/* <div className={styles.shadow}>
            <a href="#">
              <IoLogoInstagram className={styles.withInstagram} />
            </a>
          </div> */}
        </li>
        <li className={styles.tree} data-aos="fade-left" data-aos-offset="150">
          <Image
            layout="responsive"
            src={one}
            alt="img"
            className={styles.img}
          />
          {/* <div className={styles.shadow}>
            <a href="#">
              <IoLogoInstagram className={styles.withInstagram} />
            </a>
          </div> */}
        </li>
        <li className={styles.four} data-aos="fade-left" data-aos-offset="150">
          <Image
            layout="responsive"
            src={one}
            alt="img"
            className={styles.img}
          />
          {/* <div className={styles.shadow}>
            <a href="#">
              <IoLogoInstagram className={styles.withInstagram} />
            </a>
          </div> */}
        </li>
        <li className={styles.five} data-aos="fade-right" data-aos-offset="150">
          <Image
            layout="responsive"
            src={one}
            alt="img"
            className={styles.img}
          />
          {/* <div className={styles.shadow}>
            <a href="#">
              <IoLogoInstagram className={styles.withInstagram} />
            </a>
          </div> */}
        </li>
        <li className={styles.six} data-aos="fade-left" data-aos-offset="150">
          <Image
            layout="responsive"
            src={one}
            alt="img"
            className={styles.img}
          />
          {/* <div className={styles.shadow}>
            <a href="#">
              <IoLogoInstagram className={styles.withInstagram} />
            </a>
          </div> */}
        </li>
      </ul>
    </div>
  );
}

export default InstaGallary;
