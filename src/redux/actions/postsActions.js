// @flow

import type {
  PostsImmutable,
  FetchPostsSucceededAction,
  FetchPostsFailedAction
} from '../../types/flowTypes/posts';

/* ***** *****  Fetch posts  ***** ***** */

export const fetchPostsSucceeded = (
  data: Array<PostsImmutable>
): FetchPostsSucceededAction => {
  return {
    type: 'FETCH_POSTS_SUCCEEDED',
    payload: {
      data
    }
  };
};

export const fetchPostsFailed = (error: string): FetchPostsFailedAction => {
  return {
    type: 'FETCH_POSTS_FAILED',
    payload: {
      error
    }
  };
};
