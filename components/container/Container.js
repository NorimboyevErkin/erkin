import styles from "../../styles/container-style/container-style.module.scss";

function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
