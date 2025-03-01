import type { DB, ShowChoirRepertoire } from "@/db";

const createDb = async (db: DB) => {
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

  await db.schema
    .createTable("bandVideos")
    .addColumn("id", "text", (col) => col.primaryKey().notNull().unique())
    .addColumn("isFullPerformance", "boolean", (col) => col.notNull())
    .addColumn("title", "text", (col) => col.notNull())
    .addColumn("performanceOrder", "integer")
    .addColumn("date", "text", (col) => col.notNull())
    .addColumn("rootUrl", "text", (col) => col.notNull())
    .execute();

  await db.schema
    .createTable("choirVideos")
    .addColumn("id", "text", (col) => col.primaryKey().notNull().unique())
    .addColumn("isFullPerformance", "boolean", (col) => col.notNull())
    .addColumn("title", "text", (col) => col.notNull())
    .addColumn("performanceOrder", "integer")
    .addColumn("date", "text", (col) => col.notNull())
    .addColumn("rootUrl", "text", (col) => col.notNull())
    .execute();

  await db.schema
    .createTable("showChoirPerformances")
    .addColumn("id", "text", (col) => col.primaryKey().notNull().unique())
    .addColumn("eventId", "text", (col) => col.notNull())
    .addColumn("title", "text")
    .addColumn("rootUrl", "text", (col) => col.notNull())
    .execute();

  await db.schema
    .createTable("showChoirEvents")
    .addColumn("id", "text", (col) => col.primaryKey().notNull().unique())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("groupId", "text", (col) => col.notNull())
    .addColumn("place", "integer", (col) => col.notNull())
    .addColumn("captions", "json")
    .addColumn("date", "text", (col) => col.notNull())
    .execute();

  await db.schema
    .createTable("showChoirGroups")
    .addColumn("id", "text", (col) => col.primaryKey().notNull().unique())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("season", "integer", (col) => col.notNull())
    .addColumn("primaryColor", "text", (col) => col.notNull())
    .addColumn("secondaryColor", "text", (col) => col.notNull())
    .addColumn("imageUrl", "text", (col) => col.notNull())
    .addColumn("bio", "text")
    .addColumn("directors", "json", (col) => col.notNull())
    .addColumn("choreographers", "json", (col) => col.notNull())
    .addColumn("repertoire", "json", (col) => col.notNull())
    .execute();

  await db
    .insertInto("confluenceVideos")
    .values([
      {
        id: "2024-04-19-upside-down",
        song: "Upside Down",
        venue: "Rivoli Film Festival",
        performanceOrder: 1,
        date: "04/19/2024",
        rootUrl: "https://r2.everly.page/confluence/04-19 Rivoli/1. Upside Down/",
      },
      {
        id: "2024-04-19-until-i-found-you",
        song: "Until I Found You",
        venue: "Rivoli Film Festival",
        performanceOrder: 2,
        date: "04/19/2024",
        rootUrl: "https://r2.everly.page/confluence/04-19 Rivoli/2. Until I Found You/",
      },
      {
        id: "2024-04-19-ho-hey",
        song: "Ho Hey",
        venue: "Rivoli Film Festival",
        performanceOrder: 3,
        date: "04/19/2024",
        rootUrl: "https://r2.everly.page/confluence/04-19 Rivoli/3. Ho Hey/",
      },
      {
        id: "2024-04-19-brown-eyed-girl",
        song: "Brown Eyed Girl",
        venue: "Rivoli Film Festival",
        performanceOrder: 4,
        date: "04/19/2024",
        rootUrl: "https://r2.everly.page/confluence/04-19 Rivoli/4. Brown Eyed Girl/",
      },
      {
        id: "2024-04-19-the-night-we-met",
        song: "The Night We Met",
        venue: "Rivoli Film Festival",
        performanceOrder: 5,
        date: "04/19/2024",
        rootUrl: "https://r2.everly.page/confluence/04-19 Rivoli/5. The Night We Met/",
      },
      {
        id: "2024-04-19-groove-is-in-the-heart",
        song: "Groove Is In The Heart",
        venue: "Rivoli Film Festival",
        performanceOrder: 6,
        date: "04/19/2024",
        rootUrl: "https://r2.everly.page/confluence/04-19 Rivoli/6. Groove Is In The Heart/",
      },
      {
        id: "2024-04-19-everlong",
        song: "Everlong",
        venue: "Rivoli Film Festival",
        performanceOrder: 7,
        date: "04/19/2024",
        rootUrl: "https://r2.everly.page/confluence/04-19 Rivoli/7. Everlong/",
      },
      {
        id: "2024-04-19-sweet-dreams",
        song: "Sweet Dreams (Are Made of This)",
        venue: "Rivoli Film Festival",
        performanceOrder: 8,
        date: "04/19/2024",
        rootUrl: "https://r2.everly.page/confluence/04-19 Rivoli/8. Sweet Dreams/",
      },
      {
        id: "2024-04-19-cant-stop-the-feeling",
        song: "Can't Stop The Feeling!",
        venue: "Rivoli Film Festival",
        performanceOrder: 9,
        date: "04/19/2024",
        rootUrl: "https://r2.everly.page/confluence/04-19 Rivoli/9. Can't Stop The Feeling/",
      },

      {
        id: "2024-04-26-upside-down",
        song: "Upside Down",
        venue: "Central High School",
        performanceOrder: 1,
        date: "04/26/2024",
        rootUrl: "https://r2.everly.page/confluence/04-26 Central/1. Upside Down/",
      },
      {
        id: "2024-04-26-ho-hey",
        song: "Ho Hey",
        venue: "Central High School",
        performanceOrder: 2,
        date: "04/26/2024",
        rootUrl: "https://r2.everly.page/confluence/04-26 Central/2. Ho Hey/",
      },
      {
        id: "2024-04-26-groove-is-in-the-heart",
        song: "Groove Is In The Heart",
        venue: "Central High School",
        performanceOrder: 3,
        date: "04/26/2024",
        rootUrl: "https://r2.everly.page/confluence/04-26 Central/3. Groove Is In The Heart/",
      },
      {
        id: "2024-04-26-until-i-found-you",
        song: "Until I Found You",
        venue: "Central High School",
        performanceOrder: 4,
        date: "04/26/2024",
        rootUrl: "https://r2.everly.page/confluence/04-26 Central/4. Until I Found You/",
      },
      {
        id: "2024-04-26-everlong",
        song: "Everlong",
        venue: "Central High School",
        performanceOrder: 5,
        date: "04/26/2024",
        rootUrl: "https://r2.everly.page/confluence/04-26 Central/5. Everlong/",
      },
      {
        id: "2024-04-26-aint-it-fun",
        song: "Ain't It Fun",
        venue: "Central High School",
        performanceOrder: 6,
        date: "04/26/2024",
        rootUrl: "https://r2.everly.page/confluence/04-26 Central/6. Ain't It Fun/",
      },
      {
        id: "2024-04-26-cant-stop-the-feeling",
        song: "Can't Stop The Feeling!",
        venue: "Central High School",
        performanceOrder: 7,
        date: "04/26/2024",
        rootUrl: "https://r2.everly.page/confluence/04-26 Central/7. Can't Stop The Feeling/",
      },

      {
        id: "2024-05-03-brown-eyed-girl",
        song: "Brown Eyed Girl",
        venue: "Logan High School",
        performanceOrder: 1,
        date: "05/03/2024",
        rootUrl: "https://r2.everly.page/confluence/05-03 Logan/1. Brown Eyed Girl/",
      },
      {
        id: "2024-05-03-the-night-we-met",
        song: "The Night We Met",
        venue: "Logan High School",
        performanceOrder: 2,
        date: "05/03/2024",
        rootUrl: "https://r2.everly.page/confluence/05-03 Logan/2. The Night We Met/",
      },
      {
        id: "2024-05-03-groove-is-in-the-heart",
        song: "Groove Is In The Heart",
        venue: "Logan High School",
        performanceOrder: 3,
        date: "05/03/2024",
        rootUrl: "https://r2.everly.page/confluence/05-03 Logan/3. Groove Is In The Heart/",
      },
      {
        id: "2024-05-03-everlong",
        song: "Everlong",
        venue: "Logan High School",
        performanceOrder: 4,
        date: "05/03/2024",
        rootUrl: "https://r2.everly.page/confluence/05-03 Logan/4. Everlong/",
      },

      {
        id: "2024-05-10-ho-hey",
        song: "Ho Hey",
        venue: "Rivoli Full Show",
        performanceOrder: 1,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/1. Ho Hey/",
      },
      {
        id: "2024-05-10-upside-down",
        song: "Upside Down",
        venue: "Rivoli Full Show",
        performanceOrder: 2,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/2. Upside Down/",
      },
      {
        id: "2024-05-10-until-i-found-you",
        song: "Until I Found You",
        venue: "Rivoli Full Show",
        performanceOrder: 3,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/3. Until I Found You/",
      },
      {
        id: "2024-05-10-build-me-up-buttercup",
        song: "Build Me Up Buttercup",
        venue: "Rivoli Full Show",
        performanceOrder: 4,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/4. Build Me Up Buttercup/",
      },
      {
        id: "2024-05-10-groove-is-in-the-heart",
        song: "Groove Is In The Heart",
        venue: "Rivoli Full Show",
        performanceOrder: 5,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/5. Groove Is In The Heart/",
      },
      {
        id: "2024-05-10-the-night-we-met",
        song: "The Night We Met",
        venue: "Rivoli Full Show",
        performanceOrder: 6,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/6. The Night We Met/",
      },
      {
        id: "2024-05-10-everlong",
        song: "Everlong",
        venue: "Rivoli Full Show",
        performanceOrder: 7,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/7. Everlong/",
      },
      {
        id: "2024-05-10-aint-it-fun",
        song: "Ain't It Fun",
        venue: "Rivoli Full Show",
        performanceOrder: 8,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/8. Ain't It Fun/",
      },
      {
        id: "2024-05-10-brown-eyed-girl",
        song: "Brown Eyed Girl",
        venue: "Rivoli Full Show",
        performanceOrder: 9,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/9. Brown Eyed Girl/",
      },
      {
        id: "2024-05-10-sweet-dreams",
        song: "Sweet Dreams (Are Made of This)",
        venue: "Rivoli Full Show",
        performanceOrder: 10,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/10. Sweet Dreams/",
      },
      {
        id: "2024-05-10-carry-on-wayward-son",
        song: "Carry On Wayward Son",
        venue: "Rivoli Full Show",
        performanceOrder: 11,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/11. Carry On Wayward Son/",
      },
      {
        id: "2024-05-10-cant-stop-the-feeling",
        song: "Can't Stop The Feeling!",
        venue: "Rivoli Full Show",
        performanceOrder: 12,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/12. Can't Stop The Feeling/",
      },
      {
        id: "2024-05-10-groove-is-in-the-heart-encore",
        song: "Groove Is In The Heart",
        suffix: "(Encore)",
        venue: "Rivoli Full Show",
        performanceOrder: 13,
        date: "05/10/2024",
        rootUrl: "https://r2.everly.page/confluence/05-10 Rivoli/13. Groove Is In The Heart (Encore)/",
      },

      {
        id: "2024-05-19-upside-down",
        song: "Upside Down",
        venue: "The Main",
        performanceOrder: 1,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/1. Upside Down/",
      },
      {
        id: "2024-05-19-ho-hey",
        song: "Ho Hey",
        venue: "The Main",
        performanceOrder: 2,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/2. Ho Hey/",
      },
      {
        id: "2024-05-19-until-i-found-you",
        song: "Until I Found You",
        venue: "The Main",
        performanceOrder: 3,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/3. Until I Found You/",
      },
      {
        id: "2024-05-19-groove-is-in-the-heart",
        song: "Groove Is In The Heart",
        venue: "The Main",
        performanceOrder: 4,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/4. Groove Is In The Heart/",
      },
      {
        id: "2024-05-19-build-me-up-buttercup",
        song: "Build Me Up Buttercup",
        venue: "The Main",
        performanceOrder: 5,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/5. Build Me Up Buttercup/",
      },
      {
        id: "2024-05-19-the-night-we-met",
        song: "The Night We Met",
        venue: "The Main",
        performanceOrder: 6,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/6. The Night We Met/",
      },
      {
        id: "2024-05-19-aint-it-fun",
        song: "Ain't It Fun",
        venue: "The Main",
        performanceOrder: 7,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/7. Ain't It Fun/",
      },
      {
        id: "2024-05-19-everlong",
        song: "Everlong",
        venue: "The Main",
        performanceOrder: 8,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/8. Everlong/",
      },
      {
        id: "2024-05-19-brown-eyed-girl",
        song: "Brown Eyed Girl",
        venue: "The Main",
        performanceOrder: 9,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/9. Brown Eyed Girl/",
      },
      {
        id: "2024-05-19-sweet-dreams",
        song: "Sweet Dreams (Are Made of This)",
        venue: "The Main",
        performanceOrder: 10,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/10. Sweet Dreams/",
      },
      {
        id: "2024-05-19-carry-on-wayward-son",
        song: "Carry On Wayward Son",
        venue: "The Main",
        performanceOrder: 11,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/11. Carry On My Wayward Son/",
      },
      {
        id: "2024-05-19-cant-stop-the-feeling",
        song: "Can't Stop The Feeling!",
        venue: "The Main",
        performanceOrder: 12,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/12. Can't Stop The Feeling/",
      },
      {
        id: "2024-05-19-jump-in-the-line",
        song: "Jump In the Line",
        venue: "The Main",
        performanceOrder: 13,
        date: "05/19/2024",
        rootUrl: "https://r2.everly.page/confluence/05-19 The Main/13. Jump In The Line/",
      },

      {
        id: "2024-06-09-upside-down",
        song: "Upside Down",
        venue: "Riverside Park",
        performanceOrder: 1,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/1. Upside Down/",
      },
      {
        id: "2024-06-09-ho-hey",
        song: "Ho Hey",
        venue: "Riverside Park",
        performanceOrder: 2,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/2. Ho Hey/",
      },
      {
        id: "2024-06-09-until-i-found-you",
        song: "Until I Found You",
        venue: "Riverside Park",
        performanceOrder: 3,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/3. Until I Found You/",
      },
      {
        id: "2024-06-09-groove-is-in-the-heart",
        song: "Groove Is In The Heart",
        venue: "Riverside Park",
        performanceOrder: 4,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/4. Groove Is In The Heart/",
      },
      {
        id: "2024-06-09-build-me-up-buttercup",
        song: "Build Me Up Buttercup",
        venue: "Riverside Park",
        performanceOrder: 5,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/5. Build Me Up Buttercup/",
      },
      {
        id: "2024-06-09-the-night-we-met",
        song: "The Night We Met",
        venue: "Riverside Park",
        performanceOrder: 6,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/6. The Night We Met/",
      },
      {
        id: "2024-06-09-aint-it-fun",
        song: "Ain't It Fun",
        venue: "Riverside Park",
        performanceOrder: 7,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/7. Ain't It Fun/",
      },
      {
        id: "2024-06-09-everlong",
        song: "Everlong",
        venue: "Riverside Park",
        performanceOrder: 8,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/8. Everlong/",
      },
      {
        id: "2024-06-09-brown-eyed-girl",
        song: "Brown Eyed Girl",
        venue: "Riverside Park",
        performanceOrder: 9,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/9. Brown Eyed Girl/",
      },
      {
        id: "2024-06-09-sweet-dreams",
        song: "Sweet Dreams (Are Made of This)",
        venue: "Riverside Park",
        performanceOrder: 10,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/10. Sweet Dreams/",
      },
      {
        id: "2024-06-09-carry-on-wayward-son",
        song: "Carry On Wayward Son",
        venue: "Riverside Park",
        performanceOrder: 11,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/11. Carry On Wayward Son/",
      },
      {
        id: "2024-06-09-cant-stop-the-feeling",
        song: "Can't Stop The Feeling!",
        venue: "Riverside Park",
        performanceOrder: 12,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/12. Can't Stop The Feeling/",
      },
      {
        id: "2024-06-09-jump-in-the-line",
        song: "Jump In the Line",
        venue: "Riverside Park",
        performanceOrder: 13,
        date: "06-09-2024",
        rootUrl: "https://r2.everly.page/confluence/06-09 Riverside/13. Jump In The Line/",
      },

      {
        id: "2024-06-20-ho-hey",
        song: "Ho Hey",
        venue: "Moon Tunes",
        performanceOrder: 1,
        date: "06-20-2024",
        rootUrl: "https://r2.everly.page/confluence/06-20 Moon Tunes/1. Ho Hey/",
      },
      {
        id: "2024-06-20-aint-it-fun",
        song: "Ain't It Fun",
        venue: "Moon Tunes",
        performanceOrder: 2,
        date: "06-20-2024",
        rootUrl: "https://r2.everly.page/confluence/06-20 Moon Tunes/2. Ain't It Fun/",
      },
      {
        id: "2024-06-20-brown-eyed-girl",
        song: "Brown Eyed Girl",
        venue: "Moon Tunes",
        performanceOrder: 3,
        date: "06-20-2024",
        rootUrl: "https://r2.everly.page/confluence/06-20 Moon Tunes/3. Brown Eyed Girl/",
      },
      {
        id: "2024-06-20-carry-on-wayward-son",
        song: "Carry On Wayward Son",
        venue: "Moon Tunes",
        performanceOrder: 4,
        date: "06-20-2024",
        rootUrl: "https://r2.everly.page/confluence/06-20 Moon Tunes/4. Carry On/",
      },
      {
        id: "2024-06-20-groove-is-in-the-heart",
        song: "Groove Is In The Heart",
        venue: "Moon Tunes",
        performanceOrder: 5,
        date: "06-20-2024",
        rootUrl: "https://r2.everly.page/confluence/06-20 Moon Tunes/5. Groove Is In The Heart/",
      },

      {
        id: "2024-08-10-aint-it-fun",
        song: "Ain't It Fun",
        venue: "Ashley For The Arts",
        performanceOrder: 1,
        date: "08-10-2024",
        rootUrl: "https://r2.everly.page/confluence/08-10 Ashley For The Arts/1. Ain't It Fun/",
      },
      {
        id: "2024-08-10-brown-eyed-girl",
        song: "Brown Eyed Girl",
        venue: "Ashley For The Arts",
        performanceOrder: 2,
        date: "08-10-2024",
        rootUrl: "https://r2.everly.page/confluence/08-10 Ashley For The Arts/2. Brown Eyed Girl/",
      },
      {
        id: "2024-08-10-carry-on-wayward-son",
        song: "Carry On Wayward Son",
        venue: "Ashley For The Arts",
        performanceOrder: 3,
        date: "08-10-2024",
        rootUrl: "https://r2.everly.page/confluence/08-10 Ashley For The Arts/3. Carry On Wayward Son/",
      },

      {
        id: "2024-09-14-everlong",
        song: "Everlong",
        venue: "Vernon County Fair",
        performanceOrder: 1,
        date: "09-14-2024",
        rootUrl: "https://r2.everly.page/confluence/09-14 Vernon County Fair/1. Everlong/",
      },
      {
        id: "2024-09-14-upside-down",
        song: "Upside Down",
        venue: "Vernon County Fair",
        performanceOrder: 2,
        date: "09-14-2024",
        rootUrl: "https://r2.everly.page/confluence/09-14 Vernon County Fair/2. Upside Down/",
      },
      {
        id: "2024-09-14-build-me-up-buttercup",
        song: "Build Me Up Buttercup",
        venue: "Vernon County Fair",
        performanceOrder: 3,
        date: "09-14-2024",
        rootUrl: "https://r2.everly.page/confluence/09-14 Vernon County Fair/3. Build Me Up Buttercup/",
      },
      {
        id: "2024-09-14-ho-hey",
        song: "Ho Hey",
        venue: "Vernon County Fair",
        performanceOrder: 4,
        date: "09-14-2024",
        rootUrl: "https://r2.everly.page/confluence/09-14 Vernon County Fair/4. Ho Hey/",
      },
      {
        id: "2024-09-14-brown-eyed-girl",
        song: "Brown Eyed Girl",
        venue: "Vernon County Fair",
        performanceOrder: 5,
        date: "09-14-2024",
        rootUrl: "https://r2.everly.page/confluence/09-14 Vernon County Fair/5. Brown Eyed Girl/",
      },
      {
        id: "2024-09-14-aint-it-fun",
        song: "Ain't It Fun",
        venue: "Vernon County Fair",
        performanceOrder: 6,
        date: "09-14-2024",
        rootUrl: "https://r2.everly.page/confluence/09-14 Vernon County Fair/6. Ain't It Fun/",
      },
      {
        id: "2024-09-14-carry-on-wayward-son",
        song: "Carry On Wayward Son",
        venue: "Vernon County Fair",
        performanceOrder: 7,
        date: "09-14-2024",
        rootUrl: "https://r2.everly.page/confluence/09-14 Vernon County Fair/7. Carry On Wayward Son/",
      },
    ])
    .execute();

  // await db.insertInto("bandVideos").values([]).execute();

  // await db.insertInto("choirVideos").values([]).execute();

  await db
    .insertInto("showChoirPerformances")
    .values([
      //
      // 2022 Season
      //
      {
        id: "11-06-2021-chippewa-falls-supershow-4pm",
        eventId: "11-06-2021-chippewa-falls-supershow",
        title: "4PM",
        rootUrl: "https://r2.everly.page/show-choir/11-06-2021-chippewa-falls-supershow-4pm/",
      },
      {
        id: "11-06-2021-chippewa-falls-supershow-8pm",
        eventId: "11-06-2021-chippewa-falls-supershow",
        title: "8PM",
        rootUrl: "https://r2.everly.page/show-choir/11-06-2021-chippewa-falls-supershow-8pm/",
      },
      {
        id: "12-18-2021-la-crosse-hot-chocolate-soiree-2pm",
        eventId: "12-18-2021-la-crosse-hot-chocolate-soiree",
        title: "2PM",
        rootUrl: "https://r2.everly.page/show-choir/12-18-2021-la-crosse-hot-chocolate-soiree-2pm/",
      },
      {
        id: "12-18-2021-la-crosse-hot-chocolate-soiree-4pm",
        eventId: "12-18-2021-la-crosse-hot-chocolate-soiree",
        title: "4PM",
        rootUrl: "https://r2.everly.page/show-choir/12-18-2021-la-crosse-hot-chocolate-soiree-4pm/",
      },
      {
        id: "01-08-2022-parkview-xtravaganza",
        eventId: "01-08-2022-parkview-xtravaganza",
        rootUrl: "https://r2.everly.page/show-choir/01-08-2022-parkview-xtravaganza/",
      },
      {
        id: "01-15-2022-onalaska-show-choir-classic-prelims",
        eventId: "01-15-2022-onalaska-show-choir-classic",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/01-15-2022-onalaska-show-choir-classic-prelims/",
      },
      {
        id: "01-15-2022-onalaska-show-choir-classic-finals",
        eventId: "01-15-2022-onalaska-show-choir-classic",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/01-15-2022-onalaska-show-choir-classic-finals/",
      },
      {
        id: "01-29-2022-sauk-prairie-executive-session-invitational-prelims",
        eventId: "01-29-2022-sauk-prairie-executive-session-invitational",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/01-29-2022-sauk-prairie-executive-session-invitational-prelims/",
      },
      {
        id: "01-29-2022-sauk-prairie-executive-session-invitational-finals",
        eventId: "01-29-2022-sauk-prairie-executive-session-invitational",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/01-29-2022-sauk-prairie-executive-session-invitational-finals/",
      },
      {
        id: "02-05-2022-bettendorf-rhythm-on-the-riverbend-prelims",
        eventId: "02-05-2022-bettendorf-rhythm-on-the-riverbend",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/02-05-2022-bettendorf-rhythm-on-the-riverbend-prelims/",
      },
      {
        id: "02-12-2022-la-crosse-logan-showcase-exhibition",
        eventId: "02-12-2022-la-crosse-logan-showcase",
        title: "Exhibition",
        rootUrl: "https://r2.everly.page/show-choir/02-12-2022-la-crosse-logan-showcase-exhibition/",
      },
      {
        id: "03-05-2022-totino-grace-show-choir-spectacular-prelims",
        eventId: "03-05-2022-totino-grace-show-choir-spectacular",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/03-05-2022-totino-grace-show-choir-spectacular-prelims/",
      },
      {
        id: "03-12-2022-holmen-gathering-of-the-stars-prelims",
        eventId: "03-12-2022-holmen-gathering-of-the-stars",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/03-12-2022-holmen-gathering-of-the-stars-prelims/",
      },
      {
        id: "03-12-2022-holmen-gathering-of-the-stars-finals",
        eventId: "03-12-2022-holmen-gathering-of-the-stars",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/03-12-2022-holmen-gathering-of-the-stars-finals/",
      },
      {
        id: "03-13-2022-la-crosse-spring-spectacular",
        eventId: "03-13-2022-la-crosse-spring-spectacular",
        rootUrl: "https://r2.everly.page/show-choir/03-13-2022-la-crosse-spring-spectacular/",
      },
      {
        id: "03-13-2022-la-crosse-spring-spectacular-final-ballad",
        eventId: "03-13-2022-la-crosse-spring-spectacular",
        title: "Final Ballad",
        rootUrl: "https://r2.everly.page/show-choir/03-13-2022-la-crosse-spring-spectacular-final-ballad/",
      },

      //
      // 2023 Season
      //
      {
        id: "12-17-2022-la-crosse-chocolate-soiree-2pm",
        eventId: "12-17-2022-la-crosse-chocolate-soiree",
        title: "2PM",
        rootUrl: "https://r2.everly.page/show-choir/12-17-2022-la-crosse-chocolate-soiree-2pm/",
      },
      {
        id: "12-17-2022-la-crosse-chocolate-soiree-4pm",
        eventId: "12-17-2022-la-crosse-chocolate-soiree",
        title: "4PM",
        rootUrl: "https://r2.everly.page/show-choir/12-17-2022-la-crosse-chocolate-soiree-4pm/",
      },
      {
        id: "01-07-2023-la-crosse-viterbo-101-prelims",
        eventId: "01-07-2023-la-crosse-viterbo-101",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/01-07-2023-la-crosse-viterbo-101-prelims/",
      },
      {
        id: "01-07-2023-la-crosse-viterbo-101-finals",
        eventId: "01-07-2023-la-crosse-viterbo-101",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/01-07-2023-la-crosse-viterbo-101-finals/",
      },
      {
        id: "01-14-2023-linn-mar-supernova-prelims",
        eventId: "01-14-2023-linn-mar-supernova",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/01-14-2023-linn-mar-supernova-prelims/",
      },
      {
        id: "01-28-2023-la-crosse-grand-river-invitational-prelims",
        eventId: "01-28-2023-la-crosse-grand-river-invitational",
        title: "Prelims",
        rootUrl: "stub/",
      },
      {
        id: "01-28-2023-la-crosse-grand-river-invitational-finals",
        eventId: "01-28-2023-la-crosse-grand-river-invitational",
        title: "Finals",
        rootUrl: "stub/",
      },
      {
        id: "02-04-2023-destination-de-pere-lets-jam-prelims",
        eventId: "02-04-2023-destination-de-pere-lets-jam",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/02-04-2023-destination-de-pere-lets-jam-prelims/",
      },
      {
        id: "03-04-2023-totino-grace-show-choir-spectacular-prelims",
        eventId: "03-04-2023-totino-grace-show-choir-spectacular",
        title: "Prelims",
        rootUrl: "stub/",
      },
      {
        id: "03-11-2023-holmen-gathering-of-the-stars-prelims",
        eventId: "03-11-2023-holmen-gathering-of-the-stars",
        title: "Prelims",
        rootUrl: "stub/",
      },
      {
        id: "03-11-2023-holmen-gathering-of-the-stars-finals",
        eventId: "03-11-2023-holmen-gathering-of-the-stars",
        title: "Finals",
        rootUrl: "stub/",
      },
      {
        id: "04-19-2023-la-crosse-spring-spectacular",
        eventId: "04-19-2023-la-crosse-spring-spectacular",
        rootUrl: "https://r2.everly.page/show-choir/04-19-2023-la-crosse-spring-spectacular/",
      },

      //
      // 2024 Season
      //
      {
        id: "12-16-2023-la-crosse-hot-chocolate-soiree-2pm",
        eventId: "12-16-2023-la-crosse-hot-chocolate-soiree",
        title: "2PM",
        rootUrl: "https://r2.everly.page/show-choir/12-16-2023-la-crosse-chocolate-soiree-2pm/",
      },
      {
        id: "12-16-2023-la-crosse-hot-chocolate-soiree-4pm",
        eventId: "12-16-2023-la-crosse-hot-chocolate-soiree",
        title: "4PM",
        rootUrl: "https://r2.everly.page/show-choir/12-16-2023-la-crosse-chocolate-soiree-4pm/",
      },
      {
        id: "01-06-2024-holmen-gathering-prelims",
        eventId: "01-06-2024-holmen-gathering",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/01-06-2024-holmen-gathering-prelims/",
      },
      {
        id: "01-13-2024-onalaska-show-choir-classic-prelims",
        eventId: "01-13-2024-onalaska-show-choir-classic",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/01-13-2024-onalaska-show-choir-classic-prelims/",
      },
      {
        id: "01-13-2024-onalaska-show-choir-classic-finals",
        eventId: "01-13-2024-onalaska-show-choir-classic",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/01-13-2024-onalaska-show-choir-classic-finals/",
      },
      {
        id: "01-20-2024-west-salem-wonderstruck-prelims",
        eventId: "01-20-2024-west-salem-wonderstruck",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/01-20-2024-west-salem-wonderstruck-prelims/",
      },
      {
        id: "01-20-2024-west-salem-wonderstruck-finals",
        eventId: "01-20-2024-west-salem-wonderstruck",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/01-20-2024-west-salem-wonderstruck-finals/",
      },
      {
        id: "01-27-2024-sauk-prairie-executive-session-invitational-prelims",
        eventId: "01-27-2024-sauk-prairie-executive-session-invitational",
        title: "Prelims",
        rootUrl: "stub/",
      },
      {
        id: "01-27-2024-sauk-prairie-executive-session-invitational-finals",
        eventId: "01-27-2024-sauk-prairie-executive-session-invitational",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/01-27-2024-sauk-prairie-executive-session-invitational-finals/",
      },
      {
        id: "02-10-2024-la-crosse-logan-showcase-exhibition",
        eventId: "02-10-2024-la-crosse-logan-showcase",
        title: "Exhibition",
        rootUrl: "https://r2.everly.page/show-choir/02-10-2024-la-crosse-logan-showcase-exhibition/",
      },
      {
        id: "03-02-2024-cedar-rapids-jefferson-show-choir-invitational-prelims",
        eventId: "03-02-2024-cedar-rapids-jefferson-show-choir-invitational",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/03-02-2024-cedar-rapids-jefferson-show-choir-invitational-prelims/",
      },
      {
        id: "03-02-2024-cedar-rapids-jefferson-show-choir-invitational-finals",
        eventId: "03-02-2024-cedar-rapids-jefferson-show-choir-invitational",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/03-02-2024-cedar-rapids-jefferson-show-choir-invitational-finals/",
      },
      {
        id: "03-09-2024-green-bay-southwest-packerland-powerhouse-showcase-prelims",
        eventId: "03-09-2024-green-bay-southwest-packerland-powerhouse-showcase",
        title: "Prelims",
        rootUrl:
          "https://r2.everly.page/show-choir/03-09-2024-green-bay-southwest-packerland-powerhouse-showcase-prelims/",
      },
      {
        id: "03-09-2024-green-bay-southwest-packerland-powerhouse-showcase-finals",
        eventId: "03-09-2024-green-bay-southwest-packerland-powerhouse-showcase",
        title: "Finals",
        rootUrl:
          "https://r2.everly.page/show-choir/03-09-2024-green-bay-southwest-packerland-powerhouse-showcase-finals/",
      },
      {
        id: "03-17-2024-la-crosse-spring-spectacular",
        eventId: "03-17-2024-la-crosse-spring-spectacular",
        rootUrl: "https://r2.everly.page/show-choir/03-17-2024-la-crosse-spring-spectacular/",
      },

      //
      // 2025 Season
      //
      {
        id: "10-02-2024-la-crosse-heritage-night",
        eventId: "10-02-2024-la-crosse-heritage-night",
        rootUrl: "https://r2.everly.page/show-choir/10-02-2024-la-crosse-heritage-night/",
      },
      {
        id: "11-17-2024-la-crosse-dinner-show-4pm",
        eventId: "11-17-2024-la-crosse-dinner-show",
        title: "4PM",
        rootUrl: "https://r2.everly.page/show-choir/11-17-2024-la-crosse-dinner-show-4pm/",
      },
      {
        id: "11-17-2024-la-crosse-dinner-show-7pm",
        eventId: "11-17-2024-la-crosse-dinner-show",
        title: "7PM",
        rootUrl: "https://r2.everly.page/show-choir/11-17-2024-la-crosse-dinner-show-7pm/",
      },
      {
        id: "12-07-2024-la-crosse-hot-chocolate-soiree",
        eventId: "12-07-2024-la-crosse-hot-chocolate-soiree",
        rootUrl: "https://r2.everly.page/show-choir/12-07-2024-la-crosse-hot-chocolate-soiree/",
      },
      {
        id: "01-03-2025-elementary-school-performance",
        eventId: "01-03-2025-elementary-school-performance",
        rootUrl: "https://r2.everly.page/show-choir/01-03-2025-elementary-school-performance/",
      },
      {
        id: "01-04-2025-holmen-gathering-prelims",
        eventId: "01-04-2025-holmen-gathering",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/01-04-2025-holmen-gathering-prelims/",
      },
      {
        id: "01-04-2025-holmen-gathering-finals",
        eventId: "01-04-2025-holmen-gathering",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/01-04-2025-holmen-gathering-finals/",
      },
      {
        id: "01-11-2025-onalaska-show-choir-classic-prelims",
        eventId: "01-11-2025-onalaska-show-choir-classic",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/01-11-2025-onalaska-show-choir-classic-prelims/",
      },
      {
        id: "01-11-2025-onalaska-show-choir-classic-finals",
        eventId: "01-11-2025-onalaska-show-choir-classic",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/01-11-2025-onalaska-show-choir-classic-finals/",
      },
      {
        id: "01-18-2025-milton-rock-the-rock-prelims",
        eventId: "01-18-2025-milton-rock-the-rock",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/01-18-2025-milton-rock-the-rock-prelims/",
      },
      {
        id: "01-18-2025-milton-rock-the-rock-finals",
        eventId: "01-18-2025-milton-rock-the-rock",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/01-18-2025-milton-rock-the-rock-finals/",
      },
      {
        id: "01-24-2025-la-crosse-grand-showcase-ms-exhibition",
        eventId: "01-24-2025-la-crosse-grand-showcase-ms",
        title: "Exhibition",
        rootUrl: "https://r2.everly.page/show-choir/01-24-2025-la-crosse-grand-showcase-ms-exhibition/",
      },
      {
        id: "02-01-2025-bloomington-kennedy-gold-prelims",
        eventId: "02-01-2025-bloomington-kennedy-gold",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/02-01-2025-bloomington-kennedy-gold-prelims/",
      },
      {
        id: "02-01-2025-bloomington-kennedy-gold-finals",
        eventId: "02-01-2025-bloomington-kennedy-gold",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/02-01-2025-bloomington-kennedy-gold-finals/",
      },
      {
        id: "02-08-2025-la-crosse-grand-showcase-hs-exhibition",
        eventId: "02-08-2025-la-crosse-grand-showcase-hs",
        title: "Exhibition",
        rootUrl: "https://r2.everly.page/show-choir/02-08-2025-la-crosse-grand-showcase-hs-exhibition/",
      },
      {
        id: "02-22-2025-medford-red-white-spotlight-prelims",
        eventId: "02-22-2025-medford-red-white-spotlight",
        title: "Prelims",
        rootUrl: "https://r2.everly.page/show-choir/02-22-2025-medford-red-white-spotlight-prelims/",
      },
      {
        id: "02-22-2025-medford-red-white-spotlight-finals",
        eventId: "02-22-2025-medford-red-white-spotlight",
        title: "Finals",
        rootUrl: "https://r2.everly.page/show-choir/02-22-2025-medford-red-white-spotlight-finals/",
      },
    ])
    .execute();

  await db
    .insertInto("showChoirEvents")
    .values([
      //
      // 2022 Season
      //
      {
        id: "11-06-2021-chippewa-falls-supershow",
        name: "Chippewa Falls Supershow",
        groupId: "tca-2022",
        place: -1,
        date: "11-06-2021",
      },
      {
        id: "12-18-2021-la-crosse-hot-chocolate-soiree",
        name: "La Crosse Hot Chocolate Soiree",
        groupId: "tca-2022",
        place: -1,
        date: "12-18-2021",
      },
      {
        id: "01-08-2022-parkview-xtravaganza",
        name: "Parkview Xtravaganza",
        groupId: "tca-2022",
        place: 10,
        date: "01-08-2022",
      },
      {
        id: "01-15-2022-onalaska-show-choir-classic",
        name: "Onalaska Show Choir Classic",
        groupId: "tca-2022",
        place: 2,
        date: "01-15-2022",
      },
      {
        id: "01-29-2022-sauk-prairie-executive-session-invitational",
        name: "Sauk Prairie Executive Session Invitational",
        groupId: "tca-2022",
        place: 4,
        date: "01-29-2022",
      },
      {
        id: "02-05-2022-bettendorf-rhythm-on-the-riverbend",
        name: "Bettendorf Rhythm On The Riverbend",
        groupId: "tca-2022",
        place: 0,
        date: "02-05-2022",
      },
      {
        id: "02-12-2022-la-crosse-logan-showcase",
        name: "La Crosse Logan Showcase",
        groupId: "tca-2022",
        place: -2,
        date: "02-12-2022",
      },
      {
        id: "03-05-2022-totino-grace-show-choir-spectacular",
        name: "Totino-Grace Show Choir Spectacular",
        groupId: "tca-2022",
        place: 0,
        date: "03-05-2022",
      },
      {
        id: "03-12-2022-holmen-gathering-of-the-stars",
        name: "Holmen Gathering Of The Stars",
        groupId: "tca-2022",
        place: 5,
        date: "03-12-2022",
      },
      {
        id: "03-13-2022-la-crosse-spring-spectacular",
        name: "La Crosse Spring Spectacular",
        groupId: "tca-2022",
        place: -1,
        date: "03-13-2022",
      },

      //
      // 2023 Season
      //
      {
        id: "12-17-2022-la-crosse-chocolate-soiree",
        name: "La Crosse Chocolate Soiree",
        groupId: "tca-2023",
        place: -1,
        date: "12-17-2022",
      },
      {
        id: "01-07-2023-la-crosse-viterbo-101",
        name: "La Crosse Viterbo 101",
        groupId: "tca-2023",
        place: 7,
        date: "01-07-2023",
      },
      {
        id: "01-14-2023-linn-mar-supernova",
        name: "Linn Mar Supernova",
        groupId: "tca-2023",
        place: 0,
        date: "01-14-2023",
      },
      {
        id: "01-28-2023-la-crosse-grand-river-invitational",
        name: "La Crosse Grand River Invitational",
        groupId: "tca-2023",
        place: 5,
        captions: JSON.stringify(["Best Opener", "People's Choice", "Best Female Soloist (Aerin Gots)"]),
        date: "01-28-2023",
      },
      {
        id: "02-04-2023-destination-de-pere-lets-jam",
        name: "Destination De Pere: Let's Jam!",
        groupId: "tca-2023",
        place: 0,
        date: "02-04-2023",
      },
      {
        id: "03-04-2023-totino-grace-show-choir-spectacular",
        name: "Totino-Grace Show Choir Spectacular",
        groupId: "tca-2023",
        place: 0,
        date: "03-04-2023",
      },
      {
        id: "03-11-2023-holmen-gathering-of-the-stars",
        name: "Holmen Gathering Of The Stars",
        groupId: "tca-2023",
        place: 3,
        captions: JSON.stringify(["Best Opener", "Spirit Award", "Best Soloist (Aerin Gotts)"]),
        date: "03-11-2023",
      },
      {
        id: "04-19-2023-la-crosse-spring-spectacular",
        name: "La Crosse Spring Spectacular",
        groupId: "tca-2023",
        place: -1,
        date: "04-19-2023",
      },

      //
      // 2024 Season
      //
      {
        id: "12-16-2023-la-crosse-hot-chocolate-soiree",
        name: "La Crosse Hot Chocolate Soiree",
        groupId: "tca-2024",
        place: -1,
        date: "12-16-2023",
      },
      {
        id: "01-06-2024-holmen-gathering",
        name: "Holmen Gathering",
        groupId: "tca-2024",
        place: 0,
        captions: JSON.stringify(["Best Crew", "Best Captions"]),
        date: "01-06-2024",
      },
      {
        id: "01-13-2024-onalaska-show-choir-classic",
        name: "Onalaska Show Choir Classic",
        groupId: "tca-2024",
        place: 3,
        date: "01-13-2024",
      },
      {
        id: "01-20-2024-west-salem-wonderstruck",
        name: "West Salem Wonderstruck",
        groupId: "tca-2024",
        place: 3,
        date: "01-20-2024",
      },
      {
        id: "01-27-2024-sauk-prairie-executive-session-invitational",
        name: "Sauk Prairie Executive Session Invitational",
        groupId: "tca-2024",
        place: 5,
        date: "01-27-2024",
      },
      {
        id: "02-10-2024-la-crosse-logan-showcase",
        name: "La Crosse Logan Showcase",
        groupId: "tca-2024",
        place: -2,
        date: "02-10-2024",
      },
      {
        id: "03-02-2024-cedar-rapids-jefferson-show-choir-invitational",
        name: "Cedar Rapids Jefferson Show Choir Invitational",
        groupId: "tca-2024",
        place: 4,
        captions: JSON.stringify(["People's Choice"]),
        date: "03-02-2024",
      },
      {
        id: "03-09-2024-green-bay-southwest-packerland-powerhouse-showcase",
        name: "Green Bay Southwest Packerland Powerhouse Showcase",
        groupId: "tca-2024",
        place: 3,
        captions: JSON.stringify(["Best Crew", "Best Soloist"]),
        date: "03-09-2024",
      },
      {
        id: "03-17-2024-la-crosse-spring-spectacular",
        name: "La Crosse Spring Spectacular",
        groupId: "tca-2024",
        place: -1,
        date: "03-17-2024",
      },

      //
      // 2025 Season
      //
      {
        id: "10-02-2024-la-crosse-heritage-night",
        name: "La Crosse Heritage Night",
        groupId: "rcr-2025",
        place: -1,
        date: "10-02-2024",
      },
      {
        id: "11-17-2024-la-crosse-dinner-show",
        name: "La Crosse Dinner Show",
        groupId: "rcr-2025",
        place: -1,
        date: "11-17-2024",
      },
      {
        id: "12-07-2024-la-crosse-hot-chocolate-soiree",
        name: "La Crosse Hot Chocolate Soiree",
        groupId: "rcr-2025",
        place: -1,
        date: "12-07-2024",
      },
      {
        id: "01-03-2025-elementary-school-performance",
        name: "Elementary School Performance",
        groupId: "rcr-2025",
        place: -1,
        date: "01-03-2025",
      },
      {
        id: "01-04-2025-holmen-gathering",
        name: "Holmen Gathering",
        groupId: "rcr-2025",
        place: 3,
        captions: JSON.stringify([
          "Outstanding Soloist within a Show (Harmony Gasch)",
          "Spirit of Competition",
          "People's Choice Award",
        ]),
        date: "01-04-2025",
      },
      {
        id: "01-11-2025-onalaska-show-choir-classic",
        name: "Onalaska Show Choir Classic",
        groupId: "rcr-2025",
        place: 2,
        date: "01-11-2025",
      },
      {
        id: "01-18-2025-milton-rock-the-rock",
        name: "Milton Rock The Rock",
        groupId: "rcr-2025",
        place: 1,
        captions: JSON.stringify(["Best Vocals"]),
        date: "01-18-2025",
      },
      {
        id: "01-24-2025-la-crosse-grand-showcase-ms",
        name: "La Crosse Grand Showcase Middle Schools",
        groupId: "rcr-2025",
        place: -2,
        date: "01-24-2025",
      },
      {
        id: "02-01-2025-bloomington-kennedy-gold",
        name: "Bloomington Kennedy Gold",
        groupId: "rcr-2025",
        place: 4,
        captions: JSON.stringify(["Showstopper: Gianna Pedretti"]),
        date: "02-01-2025",
      },
      {
        id: "02-08-2025-la-crosse-grand-showcase-hs",
        name: "La Crosse Grand Showcase High Schools",
        groupId: "rcr-2025",
        place: -2,
        date: "02-08-2025",
      },
      {
        id: "02-22-2025-medford-red-white-spotlight",
        name: "Medford Red White Spotlight",
        groupId: "rcr-2025",
        place: 1,
        captions: JSON.stringify([
          "Best Vocals",
          "Best Choreography",
          "Best Band",
          "Tombraider (People's Choice)",
          "Best Treble Soloist (Harmony Gasch)",
          "Showstopper: Loriana Jones",
        ]),
        date: "02-22-2025",
      },
      // {
      //   id: "03-01-2025-marion-masquerade",
      //   name: "Marion Masquerade",
      //   groupId: "rcr-2025",
      //   place: 0,
      //   date: "03-01-2025",
      // },
      // {
      //   id: "03-09-2025-la-crosse-spring-spectacular",
      //   name: "La Crosse Spring Spectacular",
      //   groupId: "rcr-2025",
      //   place: -1,
      //   date: "03-09-2025",
      // },
    ])
    .execute();

  await db
    .insertInto("showChoirGroups")
    .values([
      {
        id: "tca-2022",
        name: "The Class Act",
        season: 2022,
        primaryColor: "#ffffff",
        secondaryColor: "#6B6402",
        imageUrl: "https://r2.everly.page/show-choir/tca-2022.avif",
        bio: "bio: todo",
        directors: JSON.stringify(["Doreen Athnos", "Kayla Shue"]),
        choreographers: JSON.stringify(["Kevin Chase", "Kyle Aiden"]),
        repertoire: JSON.stringify([
          {
            type: "medley",
            title: "Any Other World / Walk On Water",
            songs: [
              {
                type: "song",
                title: "Any Other World",
                by: "MIKA",
                link: "https://song.link/i/1440764112",
              },
              {
                type: "song",
                title: "Walk On Water",
                by: "Thirty Seconds to Mars",
                link: "https://song.link/i/1440900563",
              },
            ],
          },
          {
            type: "song",
            title: "Perfect World",
            by: "Allen Stone",
            link: "https://song.link/i/1438962737",
          },
          {
            type: "song",
            title: "Nothing To Lose (But Your Heart)",
            by: "Liz Callaway",
            link: "https://song.link/i/646027642",
          },
          {
            type: "song",
            title: "I 2 I",
            by: "Tevin Campbell & Rosie Gaines",
            link: "https://song.link/i/1452864487",
          },
          {
            type: "medley",
            title: "Welcome To The New Story",
            songs: [
              {
                type: "song",
                title: "Welcome To The New",
                by: "MercyMe",
                link: "https://song.link/i/1556720122",
              },
              {
                type: "song",
                title: "Story",
                by: "Sam Tsui",
                link: "https://song.link/i/644756639",
              },
            ],
          },
        ]),
      },
      {
        id: "tca-2023",
        name: "The Class Act",
        season: 2023,
        primaryColor: "#ffffff",
        secondaryColor: "#59066C",
        imageUrl: "https://r2.everly.page/show-choir/tca-2023.avif",
        bio: "bio: todo",
        directors: JSON.stringify(["Adam Carty", "Morrigan Villa"]),
        choreographers: JSON.stringify(["Erik Hall"]),
        repertoire: JSON.stringify([
          {
            type: "medley",
            title: "I Surrender / The Great Escape",
            songs: [
              {
                type: "song",
                title: "I Surrender",
                by: "Céline Dion",
                link: "https://song.link/i/1481513141",
              },
              {
                type: "song",
                title: "The Great Escape",
                by: "BOYS LIKE GIRLS",
                link: "https://song.link/i/276649797",
              },
            ],
          },
          {
            type: "medley",
            title: "Space Medley",
            songs: [
              {
                type: "song",
                title: "Interplanetary Party",
                by: "Santana",
                link: "https://song.link/i/265817856",
              },
              {
                type: "song",
                title: "Space Cowboy (Yippie-Yi-Yay)",
                by: '*NSYNC, Lisa "Left Eye" Lopes',
                link: "https://song.link/i/303171395",
              },
              {
                type: "song",
                title: "Upside Down",
                by: "Paloma Faith",
                link: "https://song.link/i/329417954",
              },
            ],
          },
          {
            type: "song",
            title: "Flying",
            by: "Cody Fry",
            link: "https://song.link/i/1632336384",
          },
          {
            type: "song",
            title: "Stars",
            by: "Damon Brown",
          },
          {
            title: "Learn To Fly Away",
            type: "medley",
            songs: [
              {
                type: "song",
                title: "Fly Away",
                by: "Lenny Kravitz",
                link: "https://song.link/i/723338326",
              },
              {
                type: "song",
                title: "Learn To Fly",
                by: "Foo Fighters",
                link: "https://song.link/i/278229654",
              },
            ],
          },
        ]),
      },
      {
        id: "tca-2024",
        name: "The Class Act",
        season: 2024,
        primaryColor: "#BB4275",
        secondaryColor: "#551527",
        imageUrl: "https://r2.everly.page/show-choir/tca-2024.avif",
        bio: "bio: todo",
        directors: JSON.stringify(["Adam Carty"]),
        choreographers: JSON.stringify(["Ben Eklund", "Dalton Myatt"]),
        repertoire: JSON.stringify([
          {
            type: "medley",
            title: "Fallin' (Adrenaline)",
            songs: [
              {
                type: "song",
                title: "Eat Your Young (Bekon's Choral Version)",
                by: "Hozier",
                link: "https://song.link/i/1685986090",
              },
              {
                type: "song",
                title: "Fallin' (Adrenaline)",
                by: "Why Don't We",
                link: "https://song.link/i/1539259479",
              },
            ],
          },
          {
            type: "medley",
            title: "White Rabbit / Wonderland",
            songs: [
              {
                type: "song",
                title: "White Rabbit",
                by: "Jefferson Airplane",
                link: "https://song.link/i/281811771",
              },
              {
                type: "song",
                title: "Wonderland",
                by: "Sounds Like Harmony",
                link: "https://song.link/i/1758982457",
              },
            ],
          },
          {
            type: "song",
            title: "All of the Colors",
            by: "Gatton",
            link: "https://song.link/i/1701740501",
          },
          {
            type: "song",
            title: "The Mad Hatter",
            by: "Kate Shindle & Wonderland Ensemble",
            link: "https://song.link/i/433522137",
          },
          {
            type: "medley",
            title: "Queen Of The Night / Heads Will Roll",
            songs: [
              {
                type: "song",
                title: "Queen of The Night",
                by: "Kelly Clarkson",
                link: "https://song.link/i/1625180110",
              },
              {
                type: "song",
                title: "Heads Will Roll",
                by: "Yeah Yeah Yeahs",
                link: "https://song.link/i/1440771850",
              },
            ],
          },
        ] as ShowChoirRepertoire[]),
      },
      {
        id: "rcr-2025",
        name: "River City Revolution",
        season: 2025,
        primaryColor: "#FAB2D0",
        secondaryColor: "#4A1F3F",
        imageUrl: "https://r2.everly.page/show-choir/rcr-2025.avif",
        bio: "<p>After two long and historic runs as separate programs, La Crosse Central and Logan high schools have now joined forces to create a new and exciting group that is performing for us today.</p><p>River City Revolution is made up of 52 singers, a 17 member band, and a 5 member crew. They are directed by Ian Schultz and Adam Carty, with assistant direction by Madeline Beuning. Their band is directed by Andy Meurer with music arranged by Steve Shanley. Todays set has been choreographed by Lexi Robson Buglewicz and Braxton Carr.</p><p>Their performance today is titled Department Stories and tells the tale of two rival clans of manequins that take a stand within a store where trends and styles compete. Lets make some noise for River City Revolution.</p>",
        directors: JSON.stringify(["Ian Schultz", "Adam Carty"]),
        choreographers: JSON.stringify(["Lexi Robson Buglewicz", "Braxton Carr"]),
        repertoire: JSON.stringify([
          {
            type: "medley",
            title: "Happy Customers / Shiny Happy People",
            songs: [
              {
                type: "song",
                title: "Happy Customers",
                by: "Two Door Cinema Club",
                link: "https://song.link/i/1728919768",
                youtubeId: "DQduxQCRfgQ",
              },
              {
                type: "song",
                title: "Shiny Happy People",
                by: "R.E.M.",
                link: "https://song.link/i/1440945300",
                youtubeId: "YYOKMUTTDdA",
              },
            ],
          },
          {
            type: "medley",
            title: "Fabulous / The Anthem",
            songs: [
              {
                type: "song",
                title: "Fabulous",
                by: "Sharpay & Ryan",
                link: "https://song.link/i/1440769323",
                youtubeId: "44izuSvo9c0",
              },
              {
                type: "song",
                title: "The Anthem",
                by: "Good Charlotte",
                link: "https://song.link/i/288051950",
                youtubeId: "desJKYvdq9A",
              },
            ],
          },
          {
            type: "song",
            title: "Disco Man",
            by: "Remi Wolf",
            link: "https://song.link/i/1514025433",
            youtubeId: "V1dtRs_vN6Y",
          },
          {
            type: "medley",
            title: "I Made It Through the Rain / Freedom! '90",
            songs: [
              {
                type: "song",
                title: "I Made It Through the Rain",
                by: "Barry Manilow",
                link: "https://song.link/i/268160570",
                youtubeId: "cfMhFnm-9S8",
              },
              {
                type: "song",
                title: "Freedom! '90",
                by: "The Bellas",
                link: "https://song.link/i/1440903485",
                youtubeId: "5U17PTWpLWI",
              },
            ],
          },
          {
            type: "song",
            title: "Physical",
            by: "Dua Lipa",
            link: "https://song.link/i/1538003644",
            youtubeId: "9HDEHj2yzew",
          },
        ] as ShowChoirRepertoire[]),
      },
    ])
    .execute();
};

export default createDb;
