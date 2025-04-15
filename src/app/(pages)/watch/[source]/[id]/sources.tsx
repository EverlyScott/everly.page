import db, {
  ConfluencePerformance,
  ConfluenceVenue,
  ConfluenceVideo,
  Expand,
  ShowChoirEvents,
  ShowChoirGroups,
  ShowChoirPerformances,
} from "@/db";
import { GenericVideo } from "@/types";
import RelatedVideos from "./_confluence/relatedVideos";
import { RecordModel } from "pocketbase";

interface Source {
  [key: string]: (id: string) => Promise<GenericVideo & { backgroundColor?: string; relatedVideos?: JSX.Element }>;
}

type ExpandedConfluenceVideo = Expand<
  ConfluenceVideo & RecordModel,
  {
    performance: Expand<
      ConfluencePerformance & RecordModel,
      {
        venue: ConfluenceVenue & RecordModel;
      }
    >;
  }
>;

type ExpandedShowChoirPerformance = Expand<
  ShowChoirPerformances & RecordModel,
  {
    event: Expand<
      ShowChoirEvents & RecordModel,
      {
        group: ShowChoirGroups & RecordModel;
      }
    >;
  }
>;

const sources: Source = {
  confluence: async (id: string) => {
    const video = await db
      .collection("confluenceVideos")
      .getFirstListItem<ExpandedConfluenceVideo>(`id="${id}"`, { expand: "performance, performance.venue" });

    if (!video) {
      throw new Error("404");
    }

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
    const performance = await db
      .collection("showChoirPerformances")
      .getFirstListItem<ExpandedShowChoirPerformance>(`id="${id}"`, { expand: "event, event.group" });

    if (!performance) {
      throw new Error("404");
    }

    const { event } = performance.expand;

    if (!event) {
      throw new Error(`No event found with ID ${performance.event}`);
    }

    const { group } = event.expand;

    if (!group) {
      throw new Error(`No group found with ID ${event.group}`);
    }

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
