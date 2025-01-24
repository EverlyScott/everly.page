import getDB from "@/db";
import { NextPage } from "next";
import { useParams, notFound } from "next/navigation";
import { Suspense } from "react";
import RelatedVideos from "./_relatedVideos";
import Player from "../../../../../components/Player";
import Container from "./_container";

interface IProps {
  params: {
    id: string;
  };
}

const Video: NextPage<IProps> = async ({ params }) => {
  const { id } = params;

  const db = await getDB();

  const videos = await db.selectFrom("confluenceVideos").selectAll().where("id", "==", id).execute();

  if (!videos[0]) {
    return notFound();
  }

  const video = videos[0];

  return (
    <div
      style={{
        paddingTop: "100px",
        width: "100vw",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#331C50",
      }}
    >
      <Container>
        <h1 style={{ marginBottom: 0, lineHeight: "30px" }}>
          {video.performanceOrder}. {video.song}
          {video.suffix ? ` ${video.suffix}` : ""}
        </h1>
        <h3 style={{ marginTop: "-4px", marginBottom: "0.5rem", fontWeight: "normal" }}>{video.venue}</h3>
        <Player
          title={video.song}
          src={`${video.rootUrl}index.m3u8`}
          staticSrc={`${video.rootUrl}original.mp4`}
          thumbnail={`${video.rootUrl}thumb.avif`}
        />
        <div style={{ height: "2rem" }} />
        <RelatedVideos id={id} video={video} />
      </Container>
    </div>
  );
};

export default Video;
