import db, { ShowChoirRepertoire } from "@/db";
import { NextPage } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import RepertoireList from "./_repertoireList";

interface IProps {
  params: Promise<{ choirId: string }>;
}

const Choir: NextPage<IProps> = async ({ params }) => {
  const { choirId } = await params;

  const choirs = await db.collection("showChoirGroups").getFullList({ filter: `id="${choirId}"` });

  if (choirs.length > 1) {
    throw new Error(`Multiple choirs found with id ${choirId}`);
  }

  if (choirs.length < 1) {
    return notFound();
  }

  const choir = choirs[0];

  return (
    <div
      style={{
        backgroundColor: `${choir.secondaryColor}80`,
        backdropFilter: "blur(4px) brightness(50%)",
        width: "100%",
        borderRadius: "10px",
        overflowX: "hidden",
        padding: "1rem",
      }}
    >
      {choir.bio ? (
        <span
          dangerouslySetInnerHTML={{ __html: choir.bio }}
          style={{ display: "flex", flexDirection: "column", gap: ".5rem", marginBottom: "1rem" }}
        />
      ) : (
        <></>
      )}
      <h2>Directors</h2>
      <ul style={{ marginLeft: "1rem" }}>
        {choir.directors.map((director) => (
          <li>{director}</li>
        ))}
      </ul>
      <h2>Choreographers</h2>
      <ul style={{ marginLeft: "1rem" }}>
        {choir.choreographers.map((choreographer) => (
          <li>{choreographer}</li>
        ))}
      </ul>
      <br />
      <RepertoireList choir={choir} />
    </div>
  );
};

export default Choir;
