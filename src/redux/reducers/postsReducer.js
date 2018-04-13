// @flow

import type { State, Action } from '../../types/flowTypes/posts';

const initialState: State = {
  error: '',
  posts: []
};

const posts = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCEEDED': {
      return {
        ...state,
        posts: action.payload.data,
        error: ''
      };
    }
    case 'FETCH_POSTS_FAILED':
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default posts;
