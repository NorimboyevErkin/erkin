import BoxItem from "./box-items/box-item";
import styles from "../styles/box-items-style/box-items-style.module.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "./title/title";
import Filter from "./filter/Filter";

function Test12() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <Title title="My new project #project" />
      <Filter/>
      <div className={styles.grid}>
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem /> 
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
        <BoxItem />
      </div>
    </div>
  );
}

export default Test12;
