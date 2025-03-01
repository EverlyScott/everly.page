import getDB, { ShowChoirEventsTable, ShowChoirGroupsTable, ShowChoirPerformancesTable } from "@/db";
import { NextPage } from "next";
import { notFound, redirect } from "next/navigation";
import PerformanceLink from "./_performanceLink";
import { getNumberWithOrdinal } from "@/tools/getNumberWithOrdinal";
import { z } from "zod";
import EventLink from "./_eventLink";

interface IProps {
  params: Promise<{ choirId: string }>;
  searchParams: Promise<{ tab?: string }>;
}

const PerformanceBrowser: NextPage<IProps> = async ({ params, searchParams }) => {
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

  const partialEvents = await db.selectFrom("showChoirEvents").selectAll().where("groupId", "==", choir.id).execute();

  if (choirs.length < 1) {
    throw new Error("");
  }

  const events: { event: ShowChoirEventsTable; performances: ShowChoirPerformancesTable[] }[] = [];

  for (let i = 0; i < partialEvents.length; i++) {
    const partialEvent = partialEvents[i];

    const performances = await db
      .selectFrom("showChoirPerformances")
      .selectAll()
      .where("eventId", "==", partialEvent.id)
      .execute();

    events.push({
      event: partialEvent,
      performances,
    });
  }

  const tab = parseInt((await searchParams).tab ?? "0");

  const event = events[tab];

  if (!event) {
    console.error(`No event found with index ${tab}`);
    return redirect(`/performing/show-choir/${choir.id}/performances/?tab=0`);
  }

  const place =
    event.event.place === -2
      ? "Exhibition"
      : event.event.place === -1
      ? "Non competitive"
      : event.event.place === 0
      ? "Did not place"
      : `${getNumberWithOrdinal(event.event.place)} Place`;

  const captions: string[] = JSON.parse(event.event.captions ?? "[]");

  return (
    <div
      style={{
        backgroundColor: `${choir.secondaryColor}80`,
        backdropFilter: "blur(4px) brightness(50%)",
        maxHeight: "90%",
        maxWidth: "100%",
        borderRadius: "10px",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <div style={{ overflowX: "auto", overflowY: "hidden" }}>
        <div
          style={{
            minWidth: "max-content",
            maxHeight: "100%",
            flexShrink: 0,
            backdropFilter: "brightness(150%)",
            padding: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {events.map((event, i) => {
            return (
              <EventLink
                i={i}
                selected={i === tab}
                choir={choir}
                event={event.event}
                performances={event.performances}
                key={event.event.id}
              />
            );
          })}
        </div>
      </div>
      <div style={{ padding: "1rem" }}>
        <h2>{event.event.name}</h2>
        <p style={{ fontWeight: "bold", marginLeft: "1rem" }}>
          {event.event.date} &bull; <i>{place}</i>
        </p>
        <ul style={{ marginLeft: "2rem" }}>
          {captions.map((caption) => {
            return <li>{caption}</li>;
          })}
        </ul>
        <hr style={{ margin: "1rem 0", border: `1px solid ${choir.primaryColor}` }} />
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>
          <h3>Performances</h3>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
            {event.performances.map((performance) => {
              if (performance.rootUrl === "stub/") {
                return <></>;
              }
              return (
                <PerformanceLink choir={choir} event={event.event} performance={performance} key={performance.id} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceBrowser;
