"use client";

import { ConfluencePerformance, ConfluenceVideo, Expand } from "@/db";
import VideoLink from "../../../../performing/confluence/_videoLink";
import fetchRelatedVideos from "./fetchRelatedVideos";
import { use, useEffect, useState } from "react";
import LoadingRelatedVideos from "./loadingRelatedVideos";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";
import { useMediaQuery } from "usehooks-ts";
import { RecordModel } from "pocketbase";

interface IProps {
  video: Expand<ConfluenceVideo & RecordModel, { performance: ConfluencePerformance & RecordModel }>;
  id: string;
}

const RelatedVideos: React.FC<IProps> = ({ id, video }) => {
  const [sameSong, setSameSong] = useState<ConfluenceVideo[]>();
  const [samePerformance, setSamePerformance] = useState<ConfluenceVideo[]>();
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
            console.log(currentVideo);
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
