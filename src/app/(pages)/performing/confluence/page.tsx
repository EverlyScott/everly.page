import Divider from "@/components/Divider";
import { NextPage } from "next";
import VideoBrowser from "./_videoBrowser";
import { Suspense } from "react";

interface IProps {
  searchParams: Promise<{ tab?: string }>;
}

const Confluence: NextPage<IProps> = async ({ searchParams }) => {
  const { tab } = await searchParams;

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "#331C50",
          backgroundImage: "url(/assets/confluence.jpg)",
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
        <p
          style={{
            position: "absolute",
            bottom: "6vw",
            left: "1rem",
            zIndex: 999,
            color: "#ffffff",
            fontStyle: "italic",
          }}
        >
          image credit goes to Jessica Miller
        </p>
        <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1
            style={{
              backgroundColor: "rgba(51, 28, 80, 0.5)",
              color: "#A37FD9",
              fontSize: "calc(25vw / 5)",
              zIndex: 0,
              fontWeight: "bold",
              backdropFilter: "blur(4px) brightness(50%)",
              padding: "0 2rem",
              borderRadius: "10px",
            }}
          >
            Confluence
          </h1>
        </div>
        {/* <div style={{ flexGrow: 1 }} /> */}
        <Divider color="#331C5080" />
      </div>
      <div
        style={{
          backgroundColor: "#331C50",
          backgroundImage: "url(/assets/confluence.jpg)",
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
        <div style={{ width: "100%", height: "100%", backgroundColor: "#331C5080", color: "#A37FD9" }}>
          <Suspense fallback="Loading...">
            <VideoBrowser Tab={tab} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Confluence;
