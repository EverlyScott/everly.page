import getDB from "@/db";
import Link from "next/link";
import styles from "./videoBrowser.module.scss";

const VideoBrowser: React.FC = async () => {
  const db = await getDB();

  const choirs = await db.selectFrom("showChoirGroups").selectAll().execute();

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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4rem", flexWrap: "wrap" }}>
        {choirs.map((choir) => {
          return (
            <Link href={`/performing/show-choir/${choir.id}/`} className={styles.video} key={choir.id}>
              <div
                style={{
                  maxWidth: "20vw",
                  width: "500px",
                  backgroundImage: `url(${choir.imageUrl})`,
                  aspectRatio: 16 / 9,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "10px",
                }}
              />
              {/* <img src={choir.imageUrl} style={{ maxWidth: "20vw", width: "500px" }} /> */}
              {/* Using multiple jsx variables breaks the wavy underline, so we're just passing one complete string*/}
              <h1>{`${choir.name} ${choir.season}`}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoBrowser;
