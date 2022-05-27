// import styles from "../../styles/loader-style/loader-style.module.scss";
import styles from '../../styles/loader-style/loader-style.module.scss';
import {useEffect , useState} from 'react';
import { useRouter } from "next/router";

function Loader() {
    const router = useRouter();
    const [loader, setloader] = useState(false);

    useEffect(() => {
      router.events.on("routeChangeStart", () => {
        setloader(true);
      });
      router.events.on("routeChangeComplete", () => {
        setloader(false);
      });
    }, [router.events]);

    return (
      <div className={styles.loading} id="loader">
        <style jsx>
{
  `
  #loader{
    display:${loader?"fixed":"none"};
  }
  `
}
        </style>
        <div className={styles.loader}></div>
      </div>
    );
}

export default Loader;