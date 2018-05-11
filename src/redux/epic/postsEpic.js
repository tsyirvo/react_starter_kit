import { Observable } from 'rxjs';
import type { Epic, PostsImmutable } from '../../types/flowTypes/posts';

import { getEpic } from '../../utils/api';
import { fetchPostsSucceeded, fetchPostsFailed } from '../actions/postsActions';

const watchFetchData: Epic = action$ =>
  action$.ofType('FETCH_POSTS').mergeMap(() => {
    return getEpic(`/posts`)
      .map((data: Array<PostsImmutable>) => {
        return fetchPostsSucceeded(data);
      })
      .catch(error => Observable.of(fetchPostsFailed(error)));
  });

export default watchFetchData;
