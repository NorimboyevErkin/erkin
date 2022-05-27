import styles from "../../styles/upBtn-style/upBtn-style.module.scss";
import { VscChevronUp } from "react-icons/vsc";
import  {useEffect} from 'react';

function UpBtn() {

  return (
    <div className={styles.upBtn}
    onScroll={()=>{
      alert("scroll");
    }}
    >
      <a href="#">
        <VscChevronUp />
      </a>
    </div>
  );
}

export default UpBtn;
