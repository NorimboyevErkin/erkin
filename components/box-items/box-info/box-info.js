import styles from "../../../styles/box-items-style/box-info.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import avatar from "../../../public/avatar.jpg";
import InfoHeader from "./Info-header";
import InfoFooter from "./Info-footer";
function BoxInfo() {
  return (
    <div className={styles.boxInfo}>
      <InfoHeader title="SABAR - The Malta Protests" from="Uzbekiston" data="March 3, 2022"/>
      <InfoFooter name="Erkin Norimboyev" likes={54}/>
    </div>
  );
}

export default BoxInfo;
