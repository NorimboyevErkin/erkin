import styles from '../../styles/title-style/title-style.module.scss';
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";


function Title({ icon, title }) {
  return (
    <div className={styles.title}>
      {icon === "Instagram" ? (
        <IoLogoInstagram className={styles.icon} />
      ) : ""}
      <h3>{title}</h3>
    </div>
  );
}

export default Title;
