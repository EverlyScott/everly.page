"use client";

import { ShowChoirGroups } from "@/db";
import { usePathname } from "next/navigation";
import styles from "./layout.module.scss";
import Link from "next/link";

interface IProps {
  choir: ShowChoirGroups;
}

const PageSwitcher: React.FC<IProps> = ({ choir }) => {
  const pathname = usePathname();

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: `${choir.secondaryColor}80`,
        backdropFilter: "blur(4px) brightness(50%)",
        overflowX: "scroll",
        maxWidth: "100%",
        minHeight: "1rem",
        borderRadius: "10px",
        color: `${choir.primaryColor}`,
        justifySelf: "flex-start",
      }}
    >
      <Link
        href={`/performing/show-choir/${choir.id}/`}
        className={styles.link}
        style={{
          padding: "1rem .5rem 1rem 1rem",
          backgroundColor: pathname === `/performing/show-choir/${choir.id}/` ? "#ffffff80" : undefined,
        }}
      >
        Group Info
      </Link>
      <Link
        href={`/performing/show-choir/${choir.id}/performances/`}
        className={styles.link}
        style={{
          padding: "1rem 1rem 1rem .5rem",
          backgroundColor: pathname === `/performing/show-choir/${choir.id}/performances/` ? "#ffffff80" : undefined,
        }}
      >
        Performances
      </Link>
      {/* <hr style={{ width: "1", height: "100%" }} /> */}
    </div>
  );
};

export default PageSwitcher;
