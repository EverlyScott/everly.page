import { Generated, Kysely, SqliteDialect } from "kysely";
import SQLite from "better-sqlite3";
import { useState } from "react";
import fs from "fs";

interface Database {
  confluenceVideos: ConfluenceVideoTable;
}

export interface ConfluenceVideoTable {
  id: string;
  song: string;
  suffix: string | null;
  venue: string;
  performanceOrder: number;
  date: `${number}/${number}/${number}`;
  rootUrl: `${string}/`;
}

const dbExists = fs.existsSync("main.sqlite");

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
  if (initialized || dbExists) {
    initialized = true;
    return db;
  }

  await db.schema
    .createTable("confluenceVideos")
    .addColumn("id", "text", (col) => col.primaryKey().notNull().unique())
    .addColumn("song", "text", (col) => col.notNull())
    .addColumn("suffix", "text")
    .addColumn("venue", "text", (col) => col.notNull())
    .addColumn("performanceOrder", "integer", (col) => col.notNull())
    .addColumn("date", "text", (col) => col.notNull())
    .addColumn("rootUrl", "text", (col) => col.notNull())
    .execute();

  initialized = true;

  return db;
};

export default getDB;
