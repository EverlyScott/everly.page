import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/404.module.scss";
import { Gradient } from "../public/gradient";
import { useEffect, useRef } from "react";
import Link from "next/link";

const NotFound: NextPage = () => {
  let gradient: any;

  useEffect(() => {
    //If the user does not have reduced motion enabled then initialize the gradient
    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      gradient = new Gradient();

      gradient.initGradient("#gradient-canvas");
    }
  }, []);

  return (
    <>
      <canvas id="gradient-canvas" className={styles.gradientCanvas} data-transition-in></canvas>
      <div className={styles.container}>
        <h1>500</h1>
        <h2>
          Somethings gone wrong <span className="emoji">☹️</span>
        </h2>
        <p>Please come back later</p>
      </div>
    </>
  );
};

export default NotFound;
