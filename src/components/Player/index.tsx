"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";

interface IProps {
  title: string;
  src: string;
  staticSrc?: string;
  thumbnail: string;
}

const Player: React.FC<IProps> = ({ title, src, staticSrc, thumbnail }) => {
  return (
    <>
      <MediaPlayer title={title} src={src} style={{ maxHeight: "75vh", aspectRatio: 16 / 9 }} autoPlay id="player">
        <MediaProvider
          style={{ width: "100%", height: "100%" }}
          mediaProps={{ style: { width: "100%", height: "100%" } }}
        />
        <DefaultVideoLayout
          thumbnails={thumbnail}
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
          title={title}
          poster={thumbnail}
          autoPlay
          style={{ maxHeight: "75vh", width: "100%", aspectRatio: 16 / 9, backgroundColor: "#000000" }}
        >
          <source src={src} />
          <source src={staticSrc} />
        </video>
      </noscript>
    </>
  );
};

export default Player;
