import styles from "../../styles/navbar-style/navbar-style.module.scss";
import { FaTelegram, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Networks() {
  return (
          <ul className={styles.localNetworks}>
            <li>
              <a href="#">
                <FaTelegram className={styles.icons}/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
  );
}

export default Networks;
