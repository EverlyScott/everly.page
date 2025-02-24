import Container from "@/components/Container";
import getDB, { ShowChoirEventsTable, ShowChoirPerformancesTable } from "@/db";
import { notFound } from "next/navigation";
import VideoLink from "../../confluence/_videoLink";

interface IProps {
  params: Promise<{ choirId: string }>;
}

const Choir: React.FC<IProps> = async ({ params }) => {
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

  const events = await db.selectFrom("showChoirEvents").selectAll().where("groupId", "==", choir.id).execute();

  if (choirs.length < 1) {
    throw new Error("");
  }

  const allPerformances: { event: ShowChoirEventsTable; performance: ShowChoirPerformancesTable }[] = [];

  for (let i = 0; i < events.length; i++) {
    const event = events[i];

    const performances = await db
      .selectFrom("showChoirPerformances")
      .selectAll()
      .where("eventId", "==", event.id)
      .execute();

    allPerformances.push(
      ...performances.map((performance) => ({
        event,
        performance,
      }))
    );
  }

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
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "calc(100vh - 164px - 1rem)",
          }}
        >
          <div
            style={{
              backdropFilter: "blur(4px) brightness(50%)",
              flexGrow: 2,
              padding: "1rem",
              borderRadius: "10px",
              overflowY: "scroll",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {allPerformances.map((performance) => {
              if (performance.performance.rootUrl === "stub") {
                return <></>;
              }

              return (
                <VideoLink
                  rootUrl="/watch/show-choir/"
                  video={{
                    id: performance.performance.id,
                    song: performance.event.name,
                    venue: performance.performance.title,
                    date: performance.event.date as any,
                    performanceOrder: 0,
                    rootUrl: performance.performance.rootUrl as any,
                    suffix: "",
                  }}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Choir;
