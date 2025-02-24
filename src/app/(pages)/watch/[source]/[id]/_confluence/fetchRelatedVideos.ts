"use server";

import getDB, { ConfluenceVideosTable } from "@/db";
import { Selectable } from "kysely";

const fetchRelatedVideos = async (video: Selectable<ConfluenceVideosTable>) => {
  const db = await getDB();

  const sameSong = await db.selectFrom("confluenceVideos").selectAll().where("song", "==", video.song).execute();
  const samePerformance = await db
    .selectFrom("confluenceVideos")
    .selectAll()
    .where("venue", "==", video.venue)
    .execute();

  return { sameSong, samePerformance };
};

export default fetchRelatedVideos;
