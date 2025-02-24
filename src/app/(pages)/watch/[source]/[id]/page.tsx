import { NextPage } from "next";
import sources from "./sources";
import { notFound, redirect } from "next/navigation";
import Container from "@/components/Container";
import Player from "@/components/Player";

interface IProps {
  params: {
    source: string;
    id: string;
  };
}

const Video: NextPage<IProps> = async ({ params }) => {
  const { source, id } = params;

  if (!id) {
    return redirect("/");
  }

  if (!sources[source]) {
    return notFound();
  }

  try {
    const video = await sources[source](id);

    return (
      <div
        style={{
          paddingTop: "100px",
          width: "100vw",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          backgroundColor: video.backgroundColor ?? "#ffffff",
        }}
      >
        <Container>
          <h1 style={{ marginBottom: 0, lineHeight: "30px" }}>{video.fullTitle}</h1>
          {video.subTitle ? (
            <h3 style={{ marginTop: "-4px", marginBottom: "0.5rem", fontWeight: "normal" }}>{video.subTitle}</h3>
          ) : (
            <></>
          )}
          <Player
            title={video.playerTitle}
            src={video.src}
            staticSrc={video.staticSrc}
            thumbnail={video.thumbnail}
            previews={video.previews}
          />
          {video.relatedVideos ? (
            <>
              <div style={{ height: "2rem" }} />
              {video.relatedVideos}
            </>
          ) : (
            <></>
          )}
        </Container>
      </div>
    );
  } catch (err) {
    if (err === "404") {
      return notFound();
    }
    return (
      <div>
        <h1>{err}</h1>
      </div>
    );
  }
};

export default Video;
