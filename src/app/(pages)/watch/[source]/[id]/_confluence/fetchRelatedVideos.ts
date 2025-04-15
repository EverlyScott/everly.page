"use server";

import db, { ConfluencePerformance, ConfluenceVenue, ConfluenceVideo, Expand } from "@/db";
import { RecordModel } from "pocketbase";

type FullyExpandedVideo = Expand<
  ConfluenceVideo,
  {
    performance: Expand<
      ConfluencePerformance,
      {
        venue: ConfluenceVenue;
      }
    >;
  }
>;

const fetchRelatedVideos = async (
  video: Expand<
    ConfluenceVideo & RecordModel,
    {
      performance: ConfluencePerformance;
    }
  >
) => {
  const sameSong = await db
    .collection("confluenceVideos")
    .getFullList<FullyExpandedVideo>({ filter: `song="${video.song}"`, expand: "performance,performance.venue" });
  const samePerformance = await db
    .collection("confluenceVideos")
    .getFullList<FullyExpandedVideo>({
      filter: `performance="${video.performance}"`,
      expand: "performance,performance.venue",
    });

  return { sameSong, samePerformance };
};

export default fetchRelatedVideos;
