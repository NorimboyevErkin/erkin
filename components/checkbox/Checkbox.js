import styles from "../../styles/checkbox-styles/checkbox-style.module.scss";
import { memo } from "react";

function Checkbox() {
  function onChange() {
    if (document.body.getAttribute("dir") === "light") {
      document.body.setAttribute("dir", "dark");
    } else {
      document.body.setAttribute("dir", "light");
    }
  }
  return (
    <>
      <button
        className={styles.switch}
        onClick={() => {
          onChange();
        }}
      >
        <div className={styles.switchHandle}></div>
      </button>
    </>
  );
}

export default memo(Checkbox);
