import Container from "@/components/Container";
import getDB from "@/db";
import { notFound } from "next/navigation";
import { NextPage } from "next";
import { headers } from "next/headers";
import PageSwitcher from "./_pageSwitcher";

interface IProps {
  params: Promise<{ choirId: string }>;
}

const Choir: NextPage<React.PropsWithChildren<IProps>> = async ({ children, params }) => {
  const { choirId } = await params;

  const db = await getDB();

  const choirs = await db.selectFrom("showChoirGroups").selectAll().where("id", "==", choirId).execute();

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
        paddingTop: "100px",
        width: "100vw",
        height: "100vh",
        color: choir.primaryColor,
        backgroundColor: choir.secondaryColor,
        backgroundImage: `url("${choir.imageUrl}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <h1>
          {choir.name} {choir.season}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            height: "calc(100vh - 164px - 1rem)",
            gap: "1rem",
          }}
        >
          <PageSwitcher choir={choir} />
          {children}
        </div>
      </Container>
    </div>
  );
};

export default Choir;
