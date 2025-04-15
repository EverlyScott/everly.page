import db, { ShowChoirEvents, ShowChoirGroups, ShowChoirPerformances } from "@/db";
import { NextPage } from "next";
import { notFound, redirect } from "next/navigation";
import PerformanceLink from "./_performanceLink";
import { getNumberWithOrdinal } from "@/tools/getNumberWithOrdinal";
import EventLink from "./_eventLink";
import moment from "moment";

interface IProps {
  params: Promise<{ choirId: string }>;
  searchParams: Promise<{ tab?: string }>;
}

const PerformanceBrowser: NextPage<IProps> = async ({ params, searchParams }) => {
  const { choirId } = await params;

  const choir = await db.collection("showChoirGroups").getFirstListItem(`id="${choirId}"`);

  const partialEvents = await db.collection("showChoirEvents").getFullList({ filter: `group="${choir.id}"` });

  if (partialEvents.length < 1) {
    throw new Error(`No events found for choir with id ${choirId}`);
  }

  const events: { event: ShowChoirEvents; performances: ShowChoirPerformances[] }[] = [];

  for (let i = 0; i < partialEvents.length; i++) {
    const partialEvent = partialEvents[i];

    const performances = await db
      .collection("showChoirPerformances")
      .getFullList({ filter: `event="${partialEvent.id}"` });

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

  return (
    <div
      style={{
        backgroundColor: `${choir.secondaryColor}80`,
        backdropFilter: "blur(4px) brightness(50%)",
        maxWidth: "100%",
        borderRadius: "10px",
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
          {moment.utc(event.event.date).format("MMM Do, YYYY")} &bull; <i>{place}</i>
        </p>
        <ul style={{ marginLeft: "2rem" }}>
          {(Array.isArray(event.event.captions) ? event.event.captions : []).map((caption) => {
            return <li>{caption}</li>;
          })}
        </ul>
        <hr style={{ margin: "1rem 0", border: `1px solid ${choir.primaryColor}` }} />
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>
          <h3>Performances</h3>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
            {event.performances.map((performance) => {
              if (performance.rootUrl === "https://example.com/stub/") {
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
