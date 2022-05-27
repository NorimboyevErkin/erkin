import { useRouter } from "next/router";
import styles from "../../styles/btn-style/btn-style.module.scss";


function Btn({ children ,type , bgBtn , bgHover , color, ...other}) {
  return (
    <button
      className={type === "show" ? styles.btn1 : styles.btn2}
      style={{ backgroundColor: `${bgBtn}` , color:`${color}`}}
      {...other}
    >
      <div
        className={type === "show" ? styles.btnHover1 : styles.btnHover2}
        style={{ backgroundColor: `${bgHover}` }}
      ></div>
      <span className={type === "show" ? styles.btnTitle1 : styles.btnTitle2}>
        {children}
      </span>
    </button>
  );
}

export default Btn;
