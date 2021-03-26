import * as types from './types';
import {ICommentaryResponse} from '../../models/api/commentary';

export function requestLiveCommentary() {
  return {
    type: types.LIVE_COMMENTARY_REQUEST,
  };
}

export function onLiveCommentaryResponse(response: ICommentaryResponse) {
  return {
    type: types.LIVE_COMMENTARY_RESPONSE,
    response,
  };
}
