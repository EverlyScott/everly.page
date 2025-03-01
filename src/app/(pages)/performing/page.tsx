import { NextPage } from "next";
import styles from "./performing.module.scss";
import Divider from "@/components/Divider";
import Link from "next/link";

const Music: NextPage = () => {
  return (
    <>
      <div
        style={{
          margin: "1rem",
          backgroundColor: "#f4f3f2",
          height: "calc(100vh - 8vw)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
          i've performed in a ton of different things since i was a kid. here's some of them:
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#111111",
          backgroundImage: `url("/assets/confluence_banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          color: "#ffffff",
          height: "calc(100vh + 8vw)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
        }}
      >
        <Link href="./confluence" className={styles.confluenceLink} style={{ zIndex: 10, cursor: "pointer" }}>
          <h1
            style={{
              backgroundColor: "rgba(51, 28, 80, 0.5)",
              color: "#A37FD9",
              fontSize: "calc(25vw / 5)",
              fontWeight: "bold",
              backdropFilter: "blur(4px) brightness(50%)",
              padding: "0 2rem",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Confluence
          </h1>
        </Link>
        {/* <p style={{ fontSize: "smaller", fontStyle: "italic" }}>(image credit goes to Theresa M. Smerud)</p> */}
        {/* <div
          style={{
            position: "absolute",
            width: "100%",
            height: "calc(100vh + 8vw)",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Divider color="#f4f3f2" />
        </div> */}
      </div>
      <div
        style={{
          backgroundColor: "#00000000",
          backgroundImage: `url("/assets/show-choir_banner.png")`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          color: "#ffffff",
          height: "calc(100vh + 8vw)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          // hopefully this works to prevent whitespace from showing...
          marginTop: "clamp(-30vw, -10vw, -30vh)",
          position: "relative",
        }}
      >
        <Link
          href="./show-choir"
          className={styles.confluenceLink}
          style={{ zIndex: 10, cursor: "pointer", color: "#FAB2D0" }}
        >
          <h1
            style={{
              backgroundColor: "rgba(74, 31, 63, .5)",
              color: "#FAB2D0",
              fontSize: "calc(25vw / 5)",
              fontWeight: "bold",
              backdropFilter: "blur(4px)",
              padding: "0 2rem",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Show Choir
          </h1>
        </Link>
        {/* <p style={{ fontSize: "smaller", fontStyle: "italic" }}>(image credit goes to Theresa M. Smerud)</p> */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "calc(100vh + 8vw)",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* <Divider color="#f4f3f2" /> */}
        </div>
      </div>
    </>
  );
};

export default Music;
