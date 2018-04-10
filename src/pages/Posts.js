import React from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, shape, number, string } from 'prop-types';

import { StyledContainerRow } from '../styles/styledComponents/containers';

import * as ActionTypes from '../redux/actionTypes/postsActionTypes';
import postsSelectorByUserId from '../redux/selectors/postsSelectors';

import { PostsList } from '../components/posts';

const Posts = ({ posts, postsByUserId, getPosts }) => {
  return (
    <StyledContainerRow>
      <PostsList
        posts={posts}
        postsByUserId={postsByUserId}
        getPosts={() => {
          getPosts();
        }}
      />
    </StyledContainerRow>
  );
};

Posts.propTypes = {
  getPosts: func.isRequired,
  posts: arrayOf(
    shape({
      userId: number.isRequired,
      id: number.isRequired,
      title: string.isRequired,
      body: string.isRequired,
    })
  ).isRequired,
  postsByUserId: arrayOf(
    shape({
      userId: number.isRequired,
      id: number.isRequired,
      title: string.isRequired,
      body: string.isRequired,
    })
  ).isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch({ type: ActionTypes.FETCH_POSTS });
    },
  };
};

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    postsByUserId: postsSelectorByUserId(state),
    postsError: state.posts.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
