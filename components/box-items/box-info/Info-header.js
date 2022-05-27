import styles from "../../../styles/box-items-style/box-info.module.scss";
function InfoHeader({title , from , data}) {
  return (
      <div className={styles.header}>
        <div className={styles.title1}>
          <h3>{title}</h3>
        </div>
        <div className={styles.title2}>
          <div className={styles.boxLeft}>From {from}</div>
          <div className={styles.boxRight}>{data}</div>
        </div>
      </div>
 
  );
}

export default InfoHeader;
