export interface ImageType {
  author: string;
  name: string;
  year: string;
  preview: string;
  full: string;
}

export interface QuizResultType {
  [x: string]: QuizResultItemType;
}

export interface QuizResultItemType {
  [x: number]: boolean[];
}

export interface PlaylistItem {
  title: string;
  src: string;
}
