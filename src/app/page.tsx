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
              <Link className={linkColors.orange} href="/photo">
                photography
              </Link>
            </li>
            <li>
              <Link className={linkColors.blue} href="/performing">
                performing
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
              I am a senior in high school and have been interested in computers since i was a kid; I made my first
              website in HTML at around 10 years old and just went on from there.
            </p>
            <br />
            <p>
              When it comes to music, I had general music all through elementary school, and then took choir and band in
              both middle and high school. I also took a music theory class my junior year and am taking a rock ensemble
              class where we learn how to play guitar, bass, keys, and drums this year. I play tuba in band and I am a
              baritone in choir.
            </p>
            <p>
              In freshman year, I joined our school's show band and learned how to play trumpet, which i played for 2
              years before switching to drums my junior year; this year I'm playing aux percussion. I've also
              experimented with saxophone and trombone. As a kid I also took piano lessons on and off and still play for
              fun.
            </p>
            <p>
              My Junior year I joined Confluence. Confluence is a student lead cover band but our teachers help us with
              funding and help us learn the music. We get new music and members every year as seniors graduate so we
              have a new show every year.
            </p>
            <br />
            <p>
              I've only recently gotten into photography in the past 5 or so years, but I find it really fun capturing
              the beauty in things. I mainly just take pictures when we're on vacation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
