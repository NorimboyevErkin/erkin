import styles from "../../styles/show-case-style/show-case-style.module.scss";
import Btn from "../btn/Btn";
import TitleAnimation from "../title-animation/TitleAnimation";
import {useRouter} from 'next/router';

function ShowCase() {
  const router = useRouter();
  const data = new Date();
  const [year, month, day] = [
    data.getFullYear(),
    data.getMonth(),
    data.getDate(),
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
    return (
      <div className={styles.showCase}>
        <div className={styles.showBoxs}>
          <div className={styles.showBox}>
            <TitleAnimation />
            <br />
            <br />
            {router.pathname === "/" ? (
              <Btn
                type="show"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/about");
                }}
              >
                About me
              </Btn>
            ) : (
              <Btn
                type="show"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/contact");
                }}
              >
                Contact me
              </Btn>
            )}
          </div>
          <div className={styles.showBox}>
            <div className={styles.siteDate}>
              <strong className={styles.timeTitle}>Site of the Day</strong>
              <p className={styles.time}>
                {months[month]} {day} , {year}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ShowCase;