import { NextPage } from "next";
import linkColors from "./linkColors.module.scss";
import Divider from "@/components/Divider";
import Link from "next/link";
import utilStyles from "./util.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <div
        className={utilStyles.mobileBackgroundAttachmentFix}
        style={{
          backgroundColor: "#000000",
          backgroundImage: "url(/assets/banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          height: "100vh",
          display: "flex",
        }}
      >
        <h1
          style={{
            color: "#f4f3f2",
            fontSize: "4rem",
            padding: "25vh 0 0 5vw",
            position: "fixed",
            zIndex: 0,
            fontWeight: "bold",
          }}
        >
          Everly.
        </h1>
        <div style={{ flexGrow: 1 }} />
        <Divider color="#f4f3f2" />
      </div>
      <div
        style={{
          height: "200vh",
          position: "relative",
          zIndex: 1,
          backgroundColor: "#f4f3f2",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
            fontSize: "1.25rem",
            position: "sticky",
            top: "10px",
            zIndex: 3,
          }}
        >
          <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>hey, i'm everly.</p>
          <p>
            i'm interested in many things.
            <br />
            click below to see my work:
          </p>
          <ul>
            <li>
              <Link className={linkColors.green} href="https://github.com/EverlyScott" target="_blank">
                development
              </Link>
            </li>
            <li>
              <Link className={linkColors.blue} href="/audio">
                audio engineering
              </Link>
            </li>
            <li>
              <Link className={linkColors.orange} href="https://www.instagram.com/everly.scott_/" target="_blank">
                photography
              </Link>
            </li>
          </ul>
        </div>
        <div
          style={{ position: "absolute", width: "100%", height: "100vh", display: "flex", justifyContent: "flex-end" }}
        >
          <Divider color="#111111" />
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          position: "absolute",
          top: "200vh",
          zIndex: 1,
          backgroundColor: "#111111",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          fontSize: "1.25rem",
          color: "#f4f3f2",
        }}
      >
        <div style={{ padding: "1rem" }}>
          <h2>About Me.</h2>
          <br />
          <div style={{ maxWidth: "80vw", textAlign: "left", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p>
              I'm a college freshman with a strong interest in audio and technology, built on years of hands-on
              experience.
            </p>
            <p>
              I've been into computers since I was young. I built my first basic website around age 7 and I've continued
              developing technical skills ever since. Over time, that interest naturally expanded into audio, where I
              enjoy working with live sound and production.
            </p>
            <p>
              Music has been a big part of my life. I've been involved in band, choir, and show band, and I also play
              guitar, bass, piano, and drums, as well as having experience with brass instruments including tuba,
              trumpet, and trombone. That background has given me a solid understanding of how musicians perform and
              what they need to sound their best.
            </p>
            <p>
              More recently, I've focused on the technical side of music. During my junior year of high school, I joined
              Confluence, a student-led cover band. I started as a vocalist, but gradually took on the role of sound
              technician, handling recording and live mixing for performances, and I'm now contracted to continue the
              same work. I'm also contracted with the Logan Choral Program to record, mix, and livestream their choir
              concerts.
            </p>
            <p>
              I have hands-on experience with digital audio systems, including mixers like the Mackie DL32S, PreSonus
              16.4.2, Behringer X32, and the Allen & Heath Qu series, and I'm also proficient with Mixing Station. I'm
              comfortable setting up systems, managing monitor mixes, and troubleshooting in live environments. I enjoy
              the fast-paced nature of live events and the challenge of making everything come together seamlessly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
