"use server";

import getDB, { ConfluenceVideoTable } from "@/db";
import { Selectable } from "kysely";

const fetchRelatedVideos = async (video: Selectable<ConfluenceVideoTable>) => {
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
