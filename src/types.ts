export type Layout = (props: { children: React.ReactNode }) => React.ReactNode;

export interface GenericVideo {
  fullTitle: string;
  subTitle: string;
  playerTitle: string;
  src: string;
  staticSrc: string;
  thumbnail: string;
  previews: string;
}
