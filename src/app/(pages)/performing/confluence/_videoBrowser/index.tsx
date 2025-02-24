import db, { ConfluenceVideosTable, getDB } from "@/db";
import { NextPage } from "next";
import VideoLink from "../_videoLink";
import Link from "next/link";
import Image from "next/image";
import styles from "./videoBrowser.module.scss";
import { redirect } from "next/navigation";

interface IProps {
  Tab?: string;
}

export interface Venue {
  venue: ConfluenceVideosTable["venue"];
  date: ConfluenceVideosTable["date"];
  videos: ConfluenceVideosTable[];
}

const VideoBrowser: React.FC<IProps> = async ({ Tab }) => {
  const tab = parseInt(Tab ?? "0");

  const db = await getDB();

  const videos = await db.selectFrom("confluenceVideos").selectAll().execute();
  let finishedVenues: ConfluenceVideosTable["venue"][] = [];
  const venues: Venue[] = videos
    .map((video) => {
      if (finishedVenues.includes(video.venue)) {
        return undefined;
      }

      finishedVenues.push(video.venue);
      return {
        venue: video.venue,
        date: video.date,
        videos: videos.filter((subVideo) => subVideo.venue === video.venue),
      };
    })
    .filter((video) => video !== undefined);

  const selectedVenue = venues[tab];

  if (!selectedVenue) {
    return redirect("./?tab=0#videos");
  }

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div id="videos" className={styles.videos}>
        <div className={styles.venues}>
          {venues.map((venue, i) => {
            const selected = i === tab;
            return (
              <Link href={`./?tab=${i}#videos`} style={{ color: "#ffffff" }} key={i}>
                <div
                  className={styles.venue}
                  style={{
                    backgroundColor: selected ? "#ffffff40" : undefined,
                  }}
                >
                  <img
                    src={`${venue.videos[0].rootUrl}thumb.avif`}
                    width="100px"
                    style={{ borderRadius: "10px", aspectRatio: 16 / 9 }}
                  />
                  <div>
                    <p>{venue.venue}</p>
                    <p style={{ fontStyle: "italic", fontSize: "0.8rem" }}>{venue.videos[0].date}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div
          style={{
            overflow: "auto",
            maxHeight: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          {selectedVenue.videos.map((video) => {
            return <VideoLink video={video} rootUrl="/watch/confluence/" key={video.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoBrowser;
