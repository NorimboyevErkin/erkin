import AboutBox from "../components/about-box/AboutBox";
import BoxItem from "../components/box-items/box-item";
import styles from '../styles/about-style/about-style.module.scss';
import Title from "../components/title/title";
import ShowCase from '../components/show-case/ShowCase';
import Container from "../components/container/Container";
import Gallary from "../components/Gallary/Gallry";
import Layout from "../components/Layout/Layout";

function About() {
    return (

      <Container>
        <div className={styles.aboutBox}>
          <ShowCase />
          <Title title="Myself #About me" />
          <div className={styles.container}>
            <AboutBox />
          <Title title="Web Dev #My Jop" />
            <AboutBox />

          <Title icon="Instagram" title="Follow my Instagram #webDev" />
            <Gallary/>
          </div>
        </div>
      </Container>
    );
}

export default About;