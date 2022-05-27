import "../styles/color/color.scss";
import "../styles/globals.css";
import { MyContext } from "../myContext/myContext";
import { useRouter } from "next/router";
import Loader from "../components/loader/Loader";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../Redux/Store/reduxStore";
import UpBtn from "../components/upBtn/UpBtn";
import Layout from "../components/Layout/Layout";


function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const [loader, setloader] = useState(false);

  // useEffect(() => {
  //   router.events.on("routeChangeStart", () => {
  //     setloader(true);
  //   });
  //   router.events.on("routeChangeComplete", () => {
  //     setloader(false);
  //   });

  // }, [router.events]);


  useEffect(() => {
    document.body.setAttribute("dir", "light");
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <Loader />
      </Layout>

        <UpBtn />
    </Provider>
  );
}

export default MyApp;
