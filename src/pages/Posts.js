// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { StyledContainerRow } from '../styles/styledComponents/containers';
import postsSelectorByUserId from '../redux/selectors/postsSelectors';

import { PostsList } from '../components/posts';

import type { PostsList as PostsListType } from '../types/flowTypes/posts';
import { postsList } from '../types/propTypes/posts';

const Posts = ({
  posts,
  postsByUserId,
  getPosts
}: {
  posts: PostsListType,
  postsByUserId: PostsListType,
  getPosts: () => mixed
}) => {
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
  getPosts: PropTypes.func.isRequired,
  posts: postsList.isRequired,
  postsByUserId: postsList.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch({ type: 'FETCH_POSTS' });
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
