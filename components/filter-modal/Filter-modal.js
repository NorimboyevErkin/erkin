import styles from "../../styles/filter-modal-style/filter-modal-style.module.scss";
import FilterModalItem from "./Filter-modal-Item";


function FilterModal() {

  return (
    <div className={styles.filterModalBoxs}>
      <h3 className={styles.filterMadalTitle}>Category</h3>
      <div className={styles.modalBox}>
        <FilterModalItem
          style={{
            padding: "0.5em 0.7em 0.5em 1.5em",
            backgroundImage:
              "linear-gradient(to right ,rgb(246, 162, 36),rgb(250, 189, 48))",
          }}
        >
          hello{" "}
        </FilterModalItem>
        <FilterModalItem
          style={{
            padding: "0.5em 0.7em 0.5em 1.5em",
            backgroundImage:
              "linear-gradient(to right ,rgb(246, 162, 36),rgb(250, 189, 48))",
          }}
        >
          hello{" "}
        </FilterModalItem>
        <FilterModalItem
          style={{
            padding: "0.5em 0.7em 0.5em 1.5em",
            backgroundImage:
              "linear-gradient(to right ,rgb(246, 162, 36),rgb(250, 189, 48))",
          }}
        >
          hello{" "}
        </FilterModalItem>
        <FilterModalItem
          style={{
            padding: "0.5em 0.7em 0.5em 1.5em",
            backgroundImage:
              "linear-gradient(to right ,rgb(246, 162, 36),rgb(250, 189, 48))",
          }}
        >
          hello{" "}
        </FilterModalItem>
      </div>
      <h3 className={styles.filterMadalTitle}>All Category</h3>
      <div className={styles.modalBox}>
        <FilterModalItem
          type={true}
          style={{
            padding: "0.5em 1.5em",
            backgroundImage:
              "linear-gradient(to right ,rgb(99, 203, 2),#71E500FF)",
          }}
        >
          hello{" "}
        </FilterModalItem>
        <FilterModalItem
          type={true}
          style={{
            padding: "0.5em 1.5em",
            backgroundImage:
              "linear-gradient(to right ,rgb(99, 203, 2),#71E500FF)",
          }}
        >
          hello{" "}
        </FilterModalItem>
        <FilterModalItem
          type={true}
          style={{
            padding: "0.5em 1.5em",
            backgroundImage:
              "linear-gradient(to right ,rgb(99, 203, 2),#71E500FF)",
          }}
        >
          hello{" "}
        </FilterModalItem>
        <FilterModalItem
          type={true}
          style={{
            padding: "0.5em 1.5em",
            backgroundImage:
              "linear-gradient(to right ,rgb(99, 203, 2),#71E500FF)",
          }}
        >
          hello{" "}
        </FilterModalItem>
      </div>
      <h3 className={styles.filterMadalTitle}>Filter</h3>
      <div className={styles.modalBox}>
        <FilterModalItem
          type={true}
          style={{
            padding: ".7em 2em",
            backgroundImage: "linear-gradient(to right ,#374271FF,#485690FF)",
          }}
        >
          Filter
        </FilterModalItem>
      </div>
    </div>
  );
}

export default FilterModal;
