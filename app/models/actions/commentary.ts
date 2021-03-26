interface IResponse {
  commentaries: [];
  keyMoments: [];
}

export interface ILiveCommentaryResponseState {
  type: String;
  response: IResponse;
}
