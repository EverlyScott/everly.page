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
              <Link className={linkColors.orange} href="https://photos.everly.page" target="_blank">
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
              I'm a high school senior with a lifelong passion for computers. I built my first website in HTML when I
              was around 10 years old, and I've been exploring technology ever since.
            </p>
            <p>
              Music has also been a big part of my life. I started with general music in elementary school, then
              continued with choir and band throughout middle and high school. I play tuba in band and sing baritone in
              choir. In my junior year, I took a music theory class, and this year, I was in a rock ensemble class where
              I learnt guitar, bass, keys, and drums.
            </p>
            <p>
              Freshman year, I joined our school's show band and picked up the trumpet, which I played for two years
              before switching to drums in junior year. Now, I play auxiliary percussion. I've also experimented with
              saxophone and trombone, and as a kid, I took piano lessons on and off—something I still enjoy playing for
              fun.
            </p>
            <p>
              During my junior year, I joined Confluence, a student-led cover band. While we organize the music
              ourselves, our teachers support us with funding and guidance. Each year, we welcome new members and put
              together a fresh setlist as seniors graduate.
            </p>
            <p>
              Photography is a more recent interest of mine—I've been into it for about five years. I love capturing the
              beauty in everyday moments, especially when traveling.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
