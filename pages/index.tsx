import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { Gradient } from "../public/gradient";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  let gradient: any;

  useEffect(() => {
    //If the user does not have reduced motion enabled then initialize the gradient
    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      gradient = new Gradient();

      gradient.initGradient("#gradient-canvas");
    }
  }, []);

  const container = useRef<HTMLDivElement>(null);
  const hiText = useRef<HTMLParagraphElement>(null);
  const projectsText = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const Container = container.current;
    let projectsTextScrollHeight = 0;

    if (Container) {
      const onScroll = () => {
        if (Container.scrollTop !== 0 && Container.scrollTop < window.innerHeight * 2) {
          hiText.current!.style.top = `${Container.scrollTop}px`;
        }

        if (Container.scrollTop > window.innerHeight * 3 && Container.scrollTop < window.innerHeight * 4) {
          projectsTextScrollHeight = (Container.scrollTop - window.innerHeight * 3) / 1.5;
          projectsText.current!.style.top = `${projectsTextScrollHeight}px`;
        }

        if (Container.scrollTop > window.innerHeight * 4 && Container.scrollTop < window.innerHeight * 6) {
          projectsText.current!.style.top = `${
            projectsTextScrollHeight + (Container.scrollTop - window.innerHeight * 4)
          }px`;
        }
      };

      Container.addEventListener("scroll", onScroll);

      return () => {
        Container.removeEventListener("scroll", onScroll);
      };
    }
  }, [container]);

  return (
    <>
      <Head>
        <title>Everly Scott</title>
      </Head>
      <canvas id="gradient-canvas" className={styles.gradientCanvas} data-transition-in></canvas>
      <div ref={container} className={styles.container}>
        <h1 hidden>Hi</h1>
        <div className={styles.scroll1}>
          <p aria-hidden ref={hiText} className={styles.hiText}>
            Hi
          </p>
        </div>
        <div className={styles.scroll2}>
          <p className={styles.hiTextPlaceholder}>&nbsp;</p>
          <p>my name is Everly Scott</p>
        </div>
        <div className={styles.scroll3}>
          <p className={styles.hiTextPlaceholder}>&nbsp;</p>
          <p>I am 15 years old and am into web development, music, video production, and theater.</p>
        </div>

        <h1 hidden>Projects</h1>
        <div className={styles.scroll4}>
          <p aria-hidden ref={projectsText} className={styles.projectsText}>
            Projects
          </p>
        </div>
        <div className={styles.scroll5}>
          <a className={styles.projectLink} target="_blank" rel="noreferrer" href="https://unusann.us">
            <div className={styles.project}>
              <h2>The Unus Annus Archive</h2>
              <p>
                This is by far my most successful project. I started work on it around October-November 2020 and
                released the site on November 13th, 2020. It consists of every single Unus Annus video archived in their
                original quality (1080p & 4k).
              </p>
            </div>
          </a>
        </div>
        <div className={styles.scroll6}>
          <a className={styles.projectLink} target="_blank" rel="noreferrer" href="https://tyroxeen.com">
            <div className={styles.project}>
              <h2>Tyroxeen Music</h2>
              <p>
                The creater of Tyroxeen Music, Lars Keibel, was our former exchange student and in his time with us, I
                decided to surprise him with a full website. He liked it and ended up publishing it on his domain and
                I&apos;m now updating it whenever he releases a new song.
              </p>
            </div>
          </a>
        </div>
        <div className={styles.scroll7}>
          <a className={styles.projectLink} target="_blank" rel="noreferrer" href="https://tmr.everly.page">
            <div className={styles.project}>
              <h2>The Monday Record</h2>
              <p>
                <p>
                  The Monday Record is a website I created for my US History class, where we needed to make a news
                  website as if it was created in the 1920&apos;s and create two articles on it. We were supposed to
                  create it in Google Sites, but of course, I went above and beyond and created it in Next.JS.
                </p>
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
