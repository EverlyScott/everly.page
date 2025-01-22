import { NextPage } from "next";
import Link from "next/link";
import styles from "./photo.module.scss";

const Photo: NextPage = () => {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.main}>
        <p>
          I'm currently working on setting up a custom photo library, but for now you can see some of my work on my{" "}
          <Link className={styles.link} href="https://www.instagram.com/everly.scott_/" target="_blank">
            instagram
          </Link>
        </p>
      </div>
    </>
  );
};

export default Photo;
