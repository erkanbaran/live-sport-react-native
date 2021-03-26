export interface ICommentaryItem {
  id: number;
  minute: number;
  message: string;
}

export interface IKeyMomentItem {
  id: number;
  minute: number;
  message: string;
}

export interface ICommentaryResponse {
  commentaries: ICommentaryItem[];
  keyMoments: IKeyMomentItem[];
}
