import db from "@/db";
import Link from "next/link";
import styles from "./choirBrowser.module.scss";

const ChoirBrowser: React.FC = async () => {
  const choirs = await db.collection("showChoirGroups").getFullList();

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
        style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", gap: "4rem", flexWrap: "wrap" }}
      >
        {choirs.map((choir) => {
          return (
            <Link href={`/performing/show-choir/${choir.id}/`} className={styles.choir} key={choir.id}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${choir.imageUrl})`,
                  aspectRatio: 16 / 9,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "10px",
                }}
              />
              {/* <img src={choir.imageUrl} style={{ maxWidth: "20vw", width: "500px" }} /> */}
              {/* Using multiple jsx variables breaks the wavy underline, so we're just passing one complete string*/}
              <h1 style={{ textAlign: "center" }}>{`${choir.name} ${choir.season}`}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChoirBrowser;
