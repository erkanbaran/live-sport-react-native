import createReducer from '../../lib/createReducer';
import * as types from '../actions/types';

import {ICommentaryState} from '../../models/reducers/commentary';
import {ILiveCommentaryResponseState} from '../../models/actions/commentary';

const initialState: ICommentaryState = {
  commentaries: [],
  keyMoments: [],
};

export const commentaryReducers = createReducer(initialState, {
  [types.LIVE_COMMENTARY_REQUEST](state: ICommentaryState) {
    return {
      ...state,
    };
  },
  [types.LIVE_COMMENTARY_RESPONSE](
    state: ICommentaryState,
    action: ILiveCommentaryResponseState,
  ) {
    return {
      ...state,
      commentaries: action.response.commentaries,
      keyMoments: action.response.keyMoments,
    };
  },
});
