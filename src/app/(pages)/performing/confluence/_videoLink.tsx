"use client";

import { ConfluencePerformance, ConfluenceVenue, ConfluenceVideo, Expand } from "@/db";
import Link from "next/link";
import styles from "./_videoLink.module.scss";
import { useMediaQuery } from "usehooks-ts";

interface IProps {
  video: Expand<ConfluenceVideo, { performance: Expand<ConfluencePerformance, { venue: ConfluenceVenue }> }>;
  rootUrl: `${string}/`;
}

const VideoLink: React.FC<IProps> = ({ video, rootUrl }) => {
  return (
    <Link href={`${rootUrl}${video.id}/`} className={styles.link} style={{ color: "#f4f3f2", margin: "0.25rem" }}>
      <div
        style={{
          backdropFilter: "blur(2px) brightness(50%)",
          padding: "0.5rem",
          borderRadius: "10px",
          width: "216px",
          height: "100%",
        }}
      >
        <img src={`${video.rootUrl}thumb.avif`} width="200px" style={{ borderRadius: "10px", aspectRatio: 16 / 9 }} />
        <p style={{ fontWeight: "bold" }}>
          {video.performanceOrder}. {video.song}
          {video.suffix ? ` ${video.suffix}` : ""}
        </p>
        <span style={{ textDecoration: "none!important" }}>
          <p style={{ textDecoration: "none!important" }}>{video.expand.performance.name}</p>
        </span>
      </div>
    </Link>
  );
};

export default VideoLink;
