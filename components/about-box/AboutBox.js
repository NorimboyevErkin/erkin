import styles from "../../styles/about-style/aboutBox-style.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React , {useEffect} from 'react';
import myImg from '../../public/picture-1.jpg'
import avatar from "../../public/avatar.jpg";
import InfoFooter from "../box-items/box-info/Info-footer";
import InfoHeader from "../box-items/box-info/Info-header";
import Carousel from "../carousel/carousel";
import Mymap from "../map/Mymap";



function AboutBox({type}) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={styles.boxItem} data-aos="fade-up" data-aos-offset="150">
      <div className={styles.boxPicture}>
        {type === "contact" ? <Mymap /> : <Carousel />}

      </div>

      <div className={styles.boxInfo}>
        <InfoHeader
          title="My Portfolio"
          from="Uzbekiston"
          data="March 3, 2022"
        />
        <div className={styles.header}>
          <p>
            Portfolio for the Copenhagen-based, award-winning photography and
            videography studio BüroJantzen. The click-through concept was
            inspired by the traditional analog photo portfolio. The
            click-through concept was inspired by the traditional analog photo
            portfolio.
          </p>
          <p>
            Portfolio for the Copenhagen-based, award-winning photography and
            videography studio BüroJantzen. The click-through concept was
            inspired by the traditional analog photo portfolio.
          </p>
        </div>
        <InfoFooter name="Erkin Norimboyev" />
      </div>
    </div>
  );
}

export default AboutBox;
