// import { Menu, Dropdown, Button, Space } from "antd";
import { RiTranslate2 } from "react-icons/ri";
import styles from '../../styles/upBtn-style/upBtn-style.module.scss';
import Image from "next/image";
// import uzb from '../../public/uz.png';
// import rus from "../../public/ru.png";
// import eng from "../../public/us.png";


function TranslateBtn() {
    return (
      <button className={styles.translateBtn}>
        <RiTranslate2 />
      </button>
    );
}

export default TranslateBtn;
