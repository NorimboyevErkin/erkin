import styles from '../../styles/title-style/title-style.module.scss'

function TitleAnimation() {
    return (
      <div className={styles.titleAnimation}>
        <h1>
          Hello, <span></span>
        </h1>
        <h1>
          My Name is <span></span>
        </h1>
        <h1>
          Erkin<span></span>
        </h1>

      </div>
    );
}

export default TitleAnimation;