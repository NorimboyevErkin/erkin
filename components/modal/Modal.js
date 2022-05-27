import styles from "../../styles/modal-syle/modal-style.module.scss";
import { BsXLg } from "react-icons/bs";
import Image from "next/image";
import React, { useEffect , useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import urlImg1 from "../../public/picture-1.jpg";
import { useRouter } from "next/router";
import InfoHeader from "../box-items/box-info/Info-header";
import InfoFooter from "../box-items/box-info/Info-footer";

function Modal({ urlImg }) {
  const footerBox = useRef();
  const cancelBtn = useRef();
  const router = useRouter();
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div data-aos="zoom-in" className={styles.modalBox}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <button
            className={styles.closeBtn}
            ref={cancelBtn}
            onClick={() => {
              router.back();
            }}
          >
            <BsXLg />
          </button>
        </div>
        <div
          className={styles.modalMain}
          onClick={() => {
            footerBox.current.classList.toggle(styles.down);
            cancelBtn.current.classList.toggle(styles.opacityBtn);
          }}
        >
          <Image src={urlImg1} className={styles.modalImg} layout="fill" />
        </div>
        <div className={styles.modalFooter} ref={footerBox}>
          <InfoHeader
            title="SABAR - The Malta Protests"
            from="Uzbekiston"
            data="March 3, 2022"
          />
          <InfoFooter name="Erkin Norimboyev" likes="54" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
