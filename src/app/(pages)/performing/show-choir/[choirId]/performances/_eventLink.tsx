import { ShowChoirEvents, ShowChoirGroups, ShowChoirPerformances } from "@/db";
import Link from "next/link";
import styles from "./_link.module.scss";
import moment from "moment";

interface IProps {
  i: number;
  selected: boolean;
  choir: ShowChoirGroups;
  event: ShowChoirEvents;
  performances: ShowChoirPerformances[];
}

const EventLink: React.FC<IProps> = ({ i, selected, choir, event, performances }) => {
  const firstWorkingPerformance = performances.find(
    (performance) => performance.rootUrl !== "https://example.com/stub/"
  );

  if (!firstWorkingPerformance) {
    // If there are only stub performances then there's no point in showing the event.
    return <></>;
  }

  return (
    <Link
      href={`/performing/show-choir/${choir.id}/performances/?tab=${i}`}
      className={styles.link}
      style={{ color: choir.primaryColor, margin: "0.25rem", display: "inline-flex" }}
    >
      <div
        style={{
          backdropFilter: "blur(2px) brightness(50%)",
          backgroundColor: selected ? "#ffffff40" : undefined,
          padding: "0.5rem",
          borderRadius: "10px",
          width: "216px",
          height: "100%",
        }}
      >
        <img
          src={`${firstWorkingPerformance.rootUrl}thumb.avif`}
          width="200px"
          style={{ borderRadius: "10px", aspectRatio: 16 / 9 }}
        />
        <p style={{ fontWeight: "bold" }}>{event.name}</p>
        <span style={{ textDecoration: "none!important" }}>
          <p style={{ textDecoration: "none!important" }}>{moment.utc(event.date).format("MMM Do, YYYY")}</p>
        </span>
      </div>
    </Link>
  );
};

export default EventLink;
