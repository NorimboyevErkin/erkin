import styles from '../../styles/map-style/map-style.module.scss';

function Mymap({
  location = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40026.63612588845!2d69.26136974369261!3d41.31853107260186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b12e8e1416b%3A0xcb67e6da1b81dea8!2sAlisher%20Navoi!5e0!3m2!1sen!2sus!4v1648555995583!5m2!1sen!2sus",
}) {
  return (
    <iframe
      src={location}
      loading="lazy"
      className={styles.mapBox}
    ></iframe>
  );
}

export default Mymap;