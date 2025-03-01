import { ShowChoirEventsTable, ShowChoirGroupsTable, ShowChoirPerformancesTable } from "@/db";
import Link from "next/link";
import styles from "./_link.module.scss";

interface IProps {
  choir: ShowChoirGroupsTable;
  event: ShowChoirEventsTable;
  performance: ShowChoirPerformancesTable;
}

const PerformanceLink: React.FC<IProps> = ({ choir, event, performance }) => {
  return (
    <Link
      href={`/watch/show-choir/${performance.id}`}
      className={styles.link}
      style={{ color: choir.primaryColor, margin: "0.25rem", display: "inline-flex" }}
    >
      <div
        style={{
          backdropFilter: "blur(2px) brightness(50%)",
          padding: "0.5rem",
          borderRadius: "10px",
          width: "216px",
          height: "100%",
        }}
      >
        <img
          src={`${performance.rootUrl}thumb.avif`}
          width="200px"
          style={{ borderRadius: "10px", aspectRatio: 16 / 9 }}
        />
        <p style={{ fontWeight: "bold" }}>{performance.title ?? event.name}</p>
      </div>
    </Link>
  );
};

export default PerformanceLink;
