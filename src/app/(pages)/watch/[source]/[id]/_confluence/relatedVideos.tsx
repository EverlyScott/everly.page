"use client";

import { ConfluenceVideosTable, DB } from "@/db";
import { Selectable } from "kysely";
import VideoLink from "../../../../performing/confluence/_videoLink";
import fetchRelatedVideos from "./fetchRelatedVideos";
import { use, useEffect, useState } from "react";
import LoadingRelatedVideos from "./loadingRelatedVideos";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";
import { useMediaQuery } from "usehooks-ts";

interface IProps {
  video: Selectable<ConfluenceVideosTable>;
  id: string;
}

const RelatedVideos: React.FC<IProps> = ({ id, video }) => {
  const [sameSong, setSameSong] = useState<Selectable<ConfluenceVideosTable>[]>();
  const [samePerformance, setSamePerformance] = useState<Selectable<ConfluenceVideosTable>[]>();
  const isSmallScreen = useMediaQuery("(max-width: 1200px)");

  useEffect(() => {
    (async () => {
      const { sameSong, samePerformance } = await fetchRelatedVideos(video);

      setSameSong(sameSong);
      setSamePerformance(samePerformance);
    })();
  }, []);

  if (!sameSong || !samePerformance) {
    return <LoadingRelatedVideos />;
  }

  return (
    <div style={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row" }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ textAlign: "center" }}>Same Song</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {sameSong.map((currentVideo) => {
            if (currentVideo.id === video.id) {
              return <></>;
            }

            return <VideoLink video={currentVideo} rootUrl="/watch/confluence/" key={currentVideo.id} />;
          })}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h2 style={{ textAlign: "center" }}>Same Performance</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {samePerformance.map((currentVideo) => {
            if (currentVideo.id === video.id) {
              return <></>;
            }

            return <VideoLink video={currentVideo} rootUrl="/watch/confluence/" key={currentVideo.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedVideos;
