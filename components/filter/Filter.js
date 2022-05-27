import { useRef } from "react";
import { RiFilter2Fill } from "react-icons/ri";
import { RiRefreshLine } from "react-icons/ri";
import styles from "../../styles/filter-style/filter-style.module.scss";
import MyInput from "./My-input";
import Btn from "../btn/Btn";
import FilterModal from "../filter-modal/Filter-modal";
function Filter() {
  const filterModal = useRef();
  return (
    <div className={styles.filterBox}>
      <div className={styles.filterNav}>
        <Btn
          onClick={() => {
            filterModal.current.classList.toggle("hidden");
          }}
          bgBtn="var(--bg-color2)"
          bgHover="var(--filter-hover-btn-bg)"
        >
          <RiFilter2Fill />
        </Btn>
        <MyInput />
        <Btn bgBtn="var(--bg-color2)" bgHover="var(--filter-hover-btn-bg)">
          <RiRefreshLine />
        </Btn>
      </div>
      <div ref={filterModal} className={styles.filterModalBox}>
        <FilterModal />
      </div>
    </div>
  );
}

export default Filter;
