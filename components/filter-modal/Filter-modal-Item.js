import styles from "../../styles/filter-modal-style/filter-modal-item-style.module.scss";
import { IoMdClose } from "react-icons/io";

function FilterModalItem({ children, type , ...other}) {
  return (
    <button
      className={styles.filterModalItem}
{...other}
    >
      <span className={styles.filterModalTitle}>{children}</span>
      {type ? (
        ""
      ) : (
        <div className={styles.filterModalCancel}>
          <IoMdClose />
        </div>
      )}
    </button>
  );
}

export default FilterModalItem;
