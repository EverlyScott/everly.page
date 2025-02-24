import { Generated, Kysely, SqliteDialect } from "kysely";
import SQLite from "better-sqlite3";
import { useState } from "react";
import fs from "fs";
import createDb from "./createDb";
import { z } from "zod";

interface Database {
  confluenceVideos: ConfluenceVideosTable;
  bandVideos: BandChoirVideosTable;
  choirVideos: BandChoirVideosTable;
  showChoirPerformances: ShowChoirPerformancesTable;
  showChoirEvents: ShowChoirEventsTable;
  showChoirGroups: ShowChoirGroupsTable;
}

export interface ConfluenceVideosTable {
  id: string;
  song: string;
  suffix: string | null;
  venue: string;
  performanceOrder: number;
  date: `${number}/${number}/${number}`;
  rootUrl: `${string}/`;
}

export interface BandChoirVideosTable {
  id: string;
  isFullPerformance: boolean;
  title: string;
  performanceOrder?: number;
  date: string;
  rootUrl: string;
}

export interface ShowChoirPerformancesTable {
  id: string;
  eventId: string;
  title?: string;
  rootUrl: string;
}

export interface ShowChoirEventsTable {
  id: string;
  name: string;
  groupId: string;
  /**
   * `-2` = Exhibition
   * `-1` = Non competitive
   * `0` = Did not place
   */
  place: number;
  captions: z.infer<typeof stringArr>;
  date: string;
}

export interface ShowChoirGroupsTable {
  id: string;
  name: string;
  season: number;
  primaryColor: string;
  secondaryColor: string;
  imageUrl: string;
  directors: z.infer<typeof stringArr>;
  choreographers: z.infer<typeof stringArr>;
  repertoire: z.infer<typeof showChoirRepertoire>;
}

const stringArr = z.array(z.string());

export const showChoirSong = z.object({
  type: z.literal("song"),
  title: z.string(),
  by: z.string(),
  link: z.string().url().optional(),
});

export const showChoirRepertoire = z.array(
  z.union([
    showChoirSong,
    z.object({
      type: z.literal("medley"),
      title: z.string(),
      songs: z.array(showChoirSong),
    }),
  ])
);

if (fs.existsSync("main.sqlite")) {
  fs.rmSync("main.sqlite");
}

const database = new SQLite("main.sqlite");

const dialect = new SqliteDialect({
  database,
});

const db = new Kysely<Database>({
  dialect,
});

let initialized = false;

export type DB = typeof db;

export const getDB = async () => {
  if (!initialized) {
    await createDb(db);

    initialized = true;
  }

  return db;
};

export default getDB;
