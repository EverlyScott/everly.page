import Link from "next/link";
import { Layout as ILayout } from "../../types";
import styles from "./layout.module.scss";
import Image from "next/image";

const Layout: ILayout = ({ children }) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "4rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          paddingLeft: ".5rem",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* <Link href="/" className={styles.homeLink}>
          Home
        </Link> */}
        <Link href="../">
          <Image src="/back.svg" alt="Back" width={48} height={48} className={styles.homeImage} />
        </Link>
      </div>
      {children}
    </>
  );
};

export default Layout;
