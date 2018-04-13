// @flow
import type { Observable } from 'rxjs';
import * as ActionTypes from '../../redux/actionTypes/postsActionTypes';

export type Posts = {
  userId: number,
  id: number,
  title: string,
  body: string
};

export type PostsList = Array<Posts>;

export type PostsImmutable = {
  +userId: number,
  +id: number,
  +title: string,
  +body: string
};

export type FetchPostsSucceededAction = {
  +type: ActionTypes.FETCH_POSTS_SUCCEEDED,
  +payload: {
    +data: Array<PostsImmutable>
  }
};

export type FetchPostsFailedAction = {
  +type: ActionTypes.FETCH_POSTS_FAILED,
  +payload: {
    +error: string
  }
};

export type FectchPostsAction = {
  +type: ActionTypes.FETCH_POSTS
};

export type State = {
  +error: string,
  +posts: Array<PostsImmutable>
};

export type Action =
  | FetchPostsSucceededAction
  | FetchPostsFailedAction
  | FectchPostsAction;

export type Epic = (
  actions$: Observable<Action>,
  { getState: () => State }
) => Observable<Action>;
