import Link from "next/link";
import styles from "./videoList.module.scss";

interface IPerformance {
  id: string;
  name: string;
  url: string;
  thumb: string;
}

const performances: IPerformance[] = [
  {
    id: "2024-03-17",
    name: "2024 Spring Spectacular",
    url: "https://youtu.be/vadDc7rLDLU",
    thumb: "/assets/spring-spec/2024.jpg",
  },
  {
    id: "2025-03-09",
    name: "2025 Spring Spectacular",
    url: "https://youtu.be/eNgUL0_ukoM",
    thumb: "/assets/spring-spec/2025.jpg",
  },
  {
    id: "2026-03-05",
    name: "2026 Spring Spectacular",
    url: "https://youtu.be/VK3EgmMw95g",
    thumb: "/assets/spring-spec/2026.jpg",
  },
];

const VideoList: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "4rem",
          flexWrap: "wrap",
        }}
      >
        {performances.map((performance) => {
          return (
            <Link href={performance.url} target="_blank" className={styles.performance} key={performance.id}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url("${performance.thumb}")`,
                  aspectRatio: 16 / 9,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "10px",
                }}
              />
              <h1 style={{ textAlign: "center" }}>{performance.name}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
