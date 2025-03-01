import { ShowChoirGroupsTable, ShowChoirMedley, ShowChoirRepertoire, ShowChoirSong } from "@/db";
import Link from "next/link";
import { CSSProperties } from "react";
import PlayButton, { CurrentlyPlayingProvider } from "./_ytEmbed";

interface IProps {
  choir: ShowChoirGroupsTable;
}

const RepertoireList: React.FC<IProps> = ({ choir }) => {
  const repertoire: ShowChoirRepertoire[] = JSON.parse(choir.repertoire);

  return (
    <>
      <h2>Repertoire</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
        <CurrentlyPlayingProvider>
          {repertoire.map((song, i) => {
            if (song.type === "medley") {
              return <Medley i={i} choir={choir} medley={song} key={song.title} />;
            }

            return <Song i={i} choir={choir} song={song} key={song.title} />;
          })}
        </CurrentlyPlayingProvider>
      </div>
    </>
  );
};

interface IMedleyProps {
  i: number;
  choir: ShowChoirGroupsTable;
  medley: ShowChoirMedley;
}

const Medley: React.FC<IMedleyProps> = ({ i, choir, medley }) => {
  return (
    <span
      style={{
        color: choir.primaryColor,
        backgroundColor: `${choir.secondaryColor}80`,
        backdropFilter: "blur(2px) brightness(50%)",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <h3>
        {i + 1}. {medley.title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
        {medley.songs.map((song, i) => (
          <Song i={i} choir={choir} song={song} sub />
        ))}
      </div>
    </span>
  );
};

interface ISongProps {
  i: number;
  choir: ShowChoirGroupsTable;
  song: ShowChoirSong;
  sub?: boolean;
}

const Song: React.FC<ISongProps> = ({ i, choir, song, sub }) => {
  return (
    <div
      style={{
        display: "flex",
        color: choir.primaryColor,
        backgroundColor: `${choir.secondaryColor}80`,
        backdropFilter: `blur(2px) brightness(${sub ? "150%" : "50%"})`,
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <LinkOrSpan
        href={song.link}
        style={{
          color: choir.primaryColor,
          flexGrow: 1,
        }}
      >
        <h3>
          {i + 1}. {song.title}
        </h3>
        <p>{song.by}</p>
      </LinkOrSpan>
      <PlayButton youtubeId={song.youtubeId} />
    </div>
  );
};

const LinkOrSpan: React.FC<React.PropsWithChildren<{ href?: string; style?: CSSProperties }>> = ({
  children,
  href,
  style,
}) => {
  if (href) {
    return (
      <Link href={href} target="_blank" style={style}>
        {children}
      </Link>
    );
  }

  return <span style={style}>{children}</span>;
};

export default RepertoireList;
