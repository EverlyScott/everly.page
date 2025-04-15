"use client";

import useIsSmallScreen from "@/hooks/useIsSmallScreen";
import { createContext, MouseEventHandler, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IButtonProps {
  youtubeId: string;
  buttonColor: string;
  buttonTextColor: string;
}

const currentlyPlayingContext = createContext<
  [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>]
>([undefined, () => {}]);

export const CurrentlyPlayingProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [playing, setPlaying] = useState<string>(undefined);

  return <currentlyPlayingContext.Provider value={[playing, setPlaying]}>{children}</currentlyPlayingContext.Provider>;
};

const PlayButton: React.FC<IButtonProps> = ({ youtubeId, buttonColor, buttonTextColor }) => {
  const [playing, setPlaying] = useContext(currentlyPlayingContext);

  const handlePlay = () => {
    if (playing === youtubeId) {
      return setPlaying(undefined);
    }

    return setPlaying(youtubeId);
  };

  if (!youtubeId) {
    return <></>;
  }

  return (
    <>
      <button
        style={{
          all: "unset",
          backgroundColor: buttonColor,
          backdropFilter: "blur(4px) brightness(50%)",
          borderRadius: "10px",
          padding: "1rem .5rem",
          color: buttonTextColor,
        }}
        className="playpause"
        onClick={handlePlay}
      >
        {playing === youtubeId ? "Stop" : "Play"}
      </button>
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: ".playpause{display:none;}" }} />
      </noscript>
      {playing === youtubeId ? createPortal(<Embed youtubeId={youtubeId} />, document.body) : <></>}
    </>
  );
};

interface IEmbedProps {
  youtubeId: string;
}

const Embed: React.FC<IEmbedProps> = ({ youtubeId }) => {
  const [_, setPlaying] = useContext(currentlyPlayingContext);
  const [xy, setXY] = useState<[number, number]>();
  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const isSmallScreen = useIsSmallScreen();

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (evt) => {
    if (isSmallScreen) {
      return;
    }
    setWidth(evt.currentTarget.clientWidth);
    setHeight(evt.currentTarget.clientHeight);
    setXY([evt.pageX - evt.currentTarget.clientWidth / 2, evt.pageY - evt.currentTarget.clientHeight / 2]);
    setDragging(true);
  };

  const handleMouseMove = (evt: MouseEvent) => {
    if (isSmallScreen) {
      return;
    }
    if (dragging) {
      setXY([evt.pageX - width / 2, evt.pageY - height / 2]);
    }
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = (evt) => {
    if (isSmallScreen) {
      return;
    }
    setDragging(false);
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const handleDoubleClick = () => {
    if (isSmallScreen) {
      return;
    }
    setXY(undefined);
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: xy ? undefined : 0,
        top: xy ? xy[1] : undefined,
        left: xy ? xy[0] : 0,
        backgroundColor: "#000000",
        userSelect: "none",
        zIndex: 99999,
        width: isSmallScreen ? "100%" : undefined,
      }}
    >
      <div
        style={{
          backgroundColor: "gray",
          display: "flex",
        }}
      >
        <div
          style={{ flexGrow: 1, cursor: dragging ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onDoubleClick={handleDoubleClick}
        />
        <button
          id="close"
          onClick={(evt) => {
            setPlaying(undefined);
          }}
        >
          X
        </button>
      </div>
      <iframe
        width={isSmallScreen ? "100%" : "426"}
        height="240"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        autoFocus
      />
    </div>
  );
};

export default PlayButton;
