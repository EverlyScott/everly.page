import getDB from "@/db";
import { GenericVideo } from "@/types";
import RelatedVideos from "./_confluence/relatedVideos";

interface Source {
  [key: string]: (id: string) => Promise<GenericVideo & { backgroundColor?: string; relatedVideos?: JSX.Element }>;
}

const sources: Source = {
  confluence: async (id: string) => {
    const db = await getDB();

    const videos = await db.selectFrom("confluenceVideos").selectAll().where("id", "==", id).execute();

    if (!videos[0]) {
      throw new Error("404");
    }

    if (videos.length > 1) {
      throw new Error(`Multiple performances found with ID ${id}`);
    }

    const video = videos[0];

    return {
      fullTitle: `${video.performanceOrder}. ${video.song}${video.suffix ? ` ${video.suffix}` : ""}`,
      subTitle: video.venue,
      playerTitle: video.song,
      src: `${video.rootUrl}index.m3u8`,
      staticSrc: `${video.rootUrl}original.mp4`,
      thumbnail: `${video.rootUrl}thumb.avif`,
      previews: `${video.rootUrl}seek/seek.vtt`,
      backgroundColor: "#331C50",
      relatedVideos: <RelatedVideos id={id} video={video} />,
    };
  },
  "show-choir": async (id) => {
    const db = await getDB();

    const performances = await db.selectFrom("showChoirPerformances").selectAll().where("id", "==", id).execute();

    if (!performances[0]) {
      throw new Error("404");
    }

    if (performances.length > 1) {
      throw new Error(`Multiple performances found with ID ${id}`);
    }

    const performance = performances[0];

    const events = await db.selectFrom("showChoirEvents").selectAll().where("id", "==", performance.eventId).execute();

    if (!events[0]) {
      throw new Error(`No event found with ID ${performance.eventId}`);
    }

    if (events.length > 1) {
      throw new Error(`Multiple events found with ID ${performance.eventId}`);
    }

    const event = events[0];

    const groups = await db.selectFrom("showChoirGroups").selectAll().where("id", "==", event.groupId).execute();

    if (!groups[0]) {
      throw new Error(`No group found with ID ${event.groupId}`);
    }

    if (groups.length > 1) {
      throw new Error(`Multiple groups found with ID ${event.groupId}`);
    }

    const group = groups[0];

    return {
      fullTitle: `${event.name}${performance.title ? ` ${performance.title}` : ""}`,
      subTitle: `${group.name} ${group.season}`,
      playerTitle: `${event.name}${performance.title ? ` ${performance.title}` : ""}`,
      src: `${performance.rootUrl}index.m3u8`,
      staticSrc: `${performance.rootUrl}original.mp4`,
      thumbnail: `${performance.rootUrl}thumb.avif`,
      previews: `${performance.rootUrl}seek/seek.vtt`,
    };
  },
};

export default sources;
