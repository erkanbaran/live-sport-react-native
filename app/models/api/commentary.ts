export interface ICommentaryItem {
  id: number;
  minute: number;
  commentary: string;
}

export interface IKeyMomentItem {
  id: number;
  minute: number;
  commentary: string;
}

export interface ICommentaryResponse {
  commentaries: ICommentaryItem[];
  keyMoments: IKeyMomentItem[];
}
