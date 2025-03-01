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
  rootUrl: `${string}/`;
}

export interface ShowChoirPerformancesTable {
  id: string;
  eventId: string;
  title?: string;
  rootUrl: `${string}/`;
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
  captions: string;
  date: `${number}-${number}-${number}`;
}

export interface ShowChoirGroupsTable {
  id: string;
  name: string;
  season: number;
  primaryColor: `#${string}`;
  secondaryColor: `#${string}`;
  imageUrl: string;
  bio?: string;
  directors: string;
  choreographers: string;
  repertoire: string;
}

export interface ShowChoirSong {
  type: "song";
  title: string;
  by: string;
  link?: string;
  youtubeId?: string;
}

export interface ShowChoirMedley {
  type: "medley";
  title: string;
  songs: ShowChoirSong[];
}

export type ShowChoirRepertoire = ShowChoirSong | ShowChoirMedley;

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
  if (initialized === false) {
    await createDb(db);

    initialized = true;
  }

  return db;
};

export default getDB;
