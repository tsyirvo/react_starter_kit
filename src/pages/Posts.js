import { connect } from 'react-redux';

import * as ActionTypes from '../redux/actionTypes/postsActionTypes';
import postsSelectorByUserId from '../redux/selectors/postsSelectors';

import { Posts } from '../components/posts';

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch({ type: ActionTypes.FETCH_POSTS });
    }
  };
};

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    postsByUserId: postsSelectorByUserId(state),
    postsError: state.posts.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
