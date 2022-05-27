import BoxInfo from "./box-info/box-info";
import BoxPicture from "./box-picture/box-picture";
import styles from "../../styles/box-items-style/box-items-style.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import React ,{useEffect} from 'react';


function BoxItem({props}) {
      useEffect(() => {
        AOS.init({});
      }, []);
    return (
      <div
        className={styles.boxItem}
        data-aos="fade-up"
        data-aos-offset="100"
      >
        <BoxPicture />
        <BoxInfo />
      </div>
    );
}

export default BoxItem;