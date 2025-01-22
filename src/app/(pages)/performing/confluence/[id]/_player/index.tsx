"use client";

import { ConfluenceVideoTable } from "@/db";
import { Selectable } from "kysely";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Time } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";

interface IProps {
  video: Selectable<ConfluenceVideoTable>;
}

const Player: React.FC<IProps> = ({ video }) => {
  return (
    <>
      <MediaPlayer
        title={video.song}
        src={`${video.rootUrl}index.m3u8`}
        style={{ maxHeight: "75vh", aspectRatio: 16 / 9 }}
        autoPlay
        id="player"
      >
        <MediaProvider
          style={{ width: "100%", height: "100%" }}
          mediaProps={{ style: { width: "100%", height: "100%" } }}
        />
        <DefaultVideoLayout
          thumbnails={`${video.rootUrl}thumb.avif`}
          icons={defaultLayoutIcons}
          slots={{
            beforeCurrentTime: <div style={{ width: ".5rem" }}></div>,
          }}
        />
      </MediaPlayer>
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: "#player { display: none; }" }} />
        <video
          controls
          title={video.song}
          poster={`${video.rootUrl}thumb.avif`}
          autoPlay
          style={{ maxHeight: "75vh", width: "100%", aspectRatio: 16 / 9, backgroundColor: "#000000" }}
        >
          <source src={`${video.rootUrl}index.m3u8`} />
          <source src={`${video.rootUrl}original.mp4`} />
        </video>
      </noscript>
    </>
  );
};

export default Player;
