import type { ActionsObservable } from 'redux-observable';
import type {
  FETCH_POSTS_SUCCEEDED,
  FETCH_POSTS_FAILED,
  FETCH_POSTS
} from '../../redux/actionTypes/postsActionTypes';

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
  +type: FETCH_POSTS_SUCCEEDED,
  +payload: {
    +data: Array<PostsImmutable>
  }
};

export type FetchPostsFailedAction = {
  +type: FETCH_POSTS_FAILED,
  +payload: {
    +error: string
  }
};

export type FectchPostsAction = {
  +type: FETCH_POSTS
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
  actions$: ActionsObservable<Action>,
  { getState: () => State }
) => ActionsObservable<Action>;
