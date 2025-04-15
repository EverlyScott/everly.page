import "dotenv/config";
import PocketBase, { BaseModel, RecordModel, RecordService } from "pocketbase";

type NewRecordModel = RecordModel & { expand?: undefined };

export type Expand<T, E extends { [key in keyof T]?: Record<string, any> }> = T & {
  expand?: Partial<E>;
};

export interface Collections {
  confluencePerformances: ConfluencePerformance;
  confluenceVenues: ConfluenceVenue;
  confluenceVideos: ConfluenceVideo;
  bandVideos: BandChoirVideos;
  choirVideos: BandChoirVideos;
  showChoirPerformances: ShowChoirPerformances;
  showChoirEvents: ShowChoirEvents;
  showChoirGroups: ShowChoirGroups;
}

export interface ConfluenceVenue {
  id: string;
  name: string;
}

export interface ConfluencePerformance {
  id: string;
  name: string;
  venue: string;
  season: number;
  date: string;
}

export interface ConfluenceVideo {
  id: string;
  song: string;
  suffix: string;
  performance: string;
  performanceOrder: number;
  rootUrl: string;
}

export interface BandChoirVideos {
  id: string;
  isFullPerformance: boolean;
  title: string;
  performanceOrder?: number;
  date: string;
  rootUrl: `${string}/`;
}

export interface ShowChoirPerformances {
  id: string;
  event: string;
  title?: string;
  rootUrl: `${string}/`;
}

export interface ShowChoirEvents {
  id: string;
  name: string;
  group: string;
  /**
   * `-2` = Exhibition
   * `-1` = Non competitive
   * `0` = Did not place
   */
  place: number;
  captions: string[] | Record<never, never>;
  date: string;
}

export interface ShowChoirGroups {
  id: string;
  name: string;
  season: number;
  primaryColor: `#${string}`;
  secondaryColor: `#${string}`;
  imageUrl: string;
  bio?: string;
  directors: string[];
  choreographers: string[];
  repertoire: ShowChoirRepertoire[];
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

class TypedPocketBase<T = { [key: string]: NewRecordModel }> extends PocketBase {
  collection<M extends Extract<keyof T, string>>(idOrName: M): RecordService<T[M] & NewRecordModel> {
    return super.collection<T[M] & NewRecordModel>(idOrName);
  }
}

const db = new TypedPocketBase<Collections>(process.env.POCKETBASE_URL);

db.autoCancellation(false);

export default db;
