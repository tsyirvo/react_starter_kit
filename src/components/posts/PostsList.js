// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bind } from 'decko';

import { StyledContainerBasic } from '../../styles/styledComponents/containers';

import type { PostsList as PostsListType } from '../../types/flowTypes/posts';
import { postsList } from '../../types/propTypes/posts';

import Post from './Post';
import Controls from './Controls';

const StyledSeparator = styled.div`
  height: 1;
  background-color: ${props => props.theme.colors.primary};
  margin-vertical: 15;
`;

class PostsList extends React.PureComponent<
  {
    getPosts: () => mixed,
    posts: PostsListType,
    postsByUserId: PostsListType
  },
  {
    datas: PostsListType
  }
> {
  state = {
    datas: []
  };

  componentDidMount() {
    this.props.getPosts();
  }

  componentWillReceiveProps(nextProps: { posts: PostsListType }) {
    if (this.props.posts !== nextProps.posts) {
      this.setState(state => {
        return {
          ...state,
          datas: nextProps.posts
        };
      });
    }
  }

  @bind
  filterBy(filter: string) {
    if (filter === 'all') {
      this.setState(state => {
        return {
          ...state,
          datas: this.props.posts
        };
      });
    } else {
      this.setState(state => {
        return {
          ...state,
          datas: this.props.postsByUserId
        };
      });
    }
    return false;
  }

  render() {
    const { datas } = this.state;

    return (
      <StyledContainerBasic>
        <Controls filterBy={this.filterBy} />
        <ul>
          {datas.map((item, index) => {
            return (
              <div key={`${item.body}${index}`}>
                <Post
                  title={item.title}
                  body={item.body}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
                <StyledSeparator />
              </div>
            );
          })}
        </ul>
      </StyledContainerBasic>
    );
  }
}

PostsList.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: postsList.isRequired,
  postsByUserId: postsList.isRequired
};

export default PostsList;
