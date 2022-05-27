import styles from "../../../styles/box-items-style/box-info.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import avatar from "../../../public/avatar.jpg";
function InfoFooter({ name, likes }) {
  const [like, setlike] = useState(false);
  return (
    <div className={styles.footer}>
      <div className={styles.by}>
        <Image src={avatar} width={27} height={27} className={styles.avatar} />
        <span className={styles.byTitle}>
          BY
          <h4>{name}</h4>
        </span>
      </div>
      {likes ? (
        <div
          className={styles.like}
          onClick={() => {
            setlike(!like);
          }}
        >
          <p>{likes}</p>
          {like ? <FcLike /> : <FcLikePlaceholder />}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default InfoFooter;
