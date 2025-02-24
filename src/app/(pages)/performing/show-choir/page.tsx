import Divider from "@/components/Divider";
import { NextPage } from "next";
import { Suspense } from "react";
import VideoBrowser from "./_videoBrowser";

interface IProps {
  searchParams: Promise<{ tab?: string }>;
}

const ShowChoir: NextPage<IProps> = async ({ searchParams }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FAB2D0",
          backgroundImage: "url(/assets/show-choir.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1
            style={{
              backgroundColor: "rgba(74, 31, 63, .5)",
              color: "#FAB2D0",
              fontSize: "calc(25vw / 5)",
              zIndex: 0,
              fontWeight: "bold",
              backdropFilter: "blur(4px) brightness(50%)",
              padding: "0 2rem",
              borderRadius: "10px",
            }}
          >
            Show Choir
          </h1>
        </div>
        <Divider color="#4A1F3F80" />
      </div>
      <div
        style={{
          backgroundColor: "#FAB2D0",
          backgroundImage: "url(/assets/show-choir.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: 1,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "100%", height: "100%", backgroundColor: "#4A1F3F80", color: "#FAB2D0" }}>
          <Suspense fallback="Loading...">
            <VideoBrowser />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default ShowChoir;
