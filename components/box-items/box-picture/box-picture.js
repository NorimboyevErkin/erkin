import Image from "next/image";
import img4 from "../../../public/game.jpg";
import styles from '../../../styles/box-items-style/box-picture.module.scss';
import React, {useRef} from 'react';
import { BsArrowsFullscreen } from "react-icons/bs";
import Link from "next/link";

function BoxPicture() {

  return (
    <Link href="/gallary/3">
    
    <div
      className={styles.boxPicture}
    >
      <Image
        className={styles.img}
        layout="responsive"
        src={img4}
        placeholder="blur"
      />
      <div className={styles.shadow}>
        <BsArrowsFullscreen className={styles.zoomIcon} />
      </div>
    </div>
    </Link>
  );
}

export default BoxPicture;
