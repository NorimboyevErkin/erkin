import styles from '../../styles/filter-style/my-input-style.module.scss';
function MyInput() {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
      />
      <button className={styles.searchBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="feather feather-search"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </button>
    </div>
  );
}

export default MyInput;
