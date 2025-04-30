import db, { ConfluencePerformance, ConfluenceVenue, ConfluenceVideo } from "@/db";
import { NextPage } from "next";
import VideoLink from "../_videoLink";
import Link from "next/link";
import Image from "next/image";
import styles from "./videoBrowser.module.scss";
import { redirect } from "next/navigation";
import moment from "moment";

interface IProps {
  Tab?: string;
}

export interface Venue {
  venue: ConfluenceVenue;
  date: ConfluencePerformance["date"];
  videos: ConfluenceVideo[];
}

const VideoBrowser: React.FC<IProps> = async ({ Tab }) => {
  const tab = parseInt(Tab ?? "0");

  // Prefetch all data first
  const fullVenues = await db.collection("confluenceVenues").getFullList();
  const fullPerformances = await db.collection("confluencePerformances").getFullList();
  const fullVideos = await db.collection("confluenceVideos").getFullList();

  const performances = fullPerformances.map((performance) => {
    const venue = fullVenues.find((venue) => venue.id === performance.venue);

    const videos = fullVideos.filter((video) => video.performance === performance.id);

    return {
      venue,
      performance,
      videos,
    };
  });

  const selectedVenue = performances[tab];

  if (!selectedVenue) {
    return redirect("./?tab=0#videos");
  }

  let lastSeason = 0;

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div id="videos" className={styles.videos}>
        <div className={styles.venuesContainer}>
          <div className={styles.venues}>
            {performances.map((performance, i) => {
              const selected = i === tab;
              return (
                <>
                  {lastSeason !== performance.performance.season ? (
                    (() => {
                      lastSeason = performance.performance.season;
                      return (
                        <div className={styles.seasonTextContainer}>
                          <h2>{performance.performance.season} Season</h2>
                        </div>
                      );
                    })()
                  ) : (
                    <></>
                  )}
                  {performance.videos[0] ? (
                    <Link href={`./?tab=${i}#videos`} style={{ color: "#ffffff" }} key={i}>
                      <div
                        className={styles.venue}
                        style={{
                          backgroundColor: selected ? "#ffffff40" : undefined,
                        }}
                      >
                        <img
                          src={`${performance.videos[0].rootUrl}thumb.avif`}
                          width="100px"
                          style={{ borderRadius: "10px", aspectRatio: 16 / 9 }}
                        />
                        <div>
                          <p>{performance.performance.name}</p>
                          {performance.venue.name !== performance.performance.name ? (
                            <p style={{ fontSize: "0.8rem" }}>@ {performance.venue.name}</p>
                          ) : (
                            <></>
                          )}
                          <p style={{ fontStyle: "italic", fontSize: "0.8rem" }}>
                            {moment.utc(performance.performance.date).format("MMM Do, YYYY")}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div
          style={{
            overflow: "auto",
            maxHeight: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            flexGrow: 2,
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          {selectedVenue.videos.map((video) => {
            return (
              <VideoLink
                video={{
                  ...video,
                  expand: { performance: { ...selectedVenue.performance, expand: { venue: selectedVenue.venue } } },
                }}
                rootUrl="/watch/confluence/"
                key={video.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoBrowser;
