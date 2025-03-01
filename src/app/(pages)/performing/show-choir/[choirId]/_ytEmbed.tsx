"use client";

import { createContext, MouseEventHandler, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IProps {
  youtubeId: string;
}

const currentlyPlayingContext = createContext<
  [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>]
>([undefined, () => {}]);

export const CurrentlyPlayingProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [playing, setPlaying] = useState<string>(undefined);

  return <currentlyPlayingContext.Provider value={[playing, setPlaying]}>{children}</currentlyPlayingContext.Provider>;
};

const PlayButton: React.FC<IProps> = ({ youtubeId }) => {
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
      <button className="playpause" onClick={handlePlay}>
        {playing === youtubeId ? "stop" : "play"}
      </button>
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: ".playpause{display:none;}" }} />
      </noscript>
      {playing === youtubeId ? createPortal(<Embed youtubeId={youtubeId} />, document.body) : <></>}
    </>
  );
};

const Embed: React.FC<IProps> = ({ youtubeId }) => {
  const [_, setPlaying] = useContext(currentlyPlayingContext);
  const [xy, setXY] = useState<[number, number]>();
  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (evt) => {
    console.log(evt.currentTarget);
    if (evt.currentTarget.id === "close") {
      return;
    }
    setWidth(evt.currentTarget.clientWidth);
    setHeight(evt.currentTarget.clientHeight);
    setXY([evt.pageX - evt.currentTarget.clientWidth / 2, evt.pageY - evt.currentTarget.clientHeight / 2]);
    setDragging(true);
  };

  const handleMouseMove = (evt: MouseEvent) => {
    if (dragging) {
      setXY([evt.pageX - width / 2, evt.pageY - height / 2]);
    }
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = (evt) => {
    setDragging(false);
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const handleDoubleClick = () => {
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
        width="426"
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
