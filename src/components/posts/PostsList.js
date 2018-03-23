import React, { PureComponent } from 'react';
import { func, arrayOf, shape, string, number } from 'prop-types';
import styled from 'styled-components';
import { bind } from 'decko';

import { StyledContainerBasic } from '../../styles/styledComponents/containers';

import Post from './Post';
import Controls from './Controls';

const StyledSeparator = styled.div`
  height: 1;
  background-color: ${props => props.theme.colors.primary};
  margin-vertical: 15;
`;

class PostsList extends PureComponent {
  state = {
    datas: []
  };

  componentDidMount() {
    this.props.getPosts();
  }

  componentWillReceiveProps(nextProps) {
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
  filterBy(filter) {
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
  getPosts: func.isRequired,
  posts: arrayOf(
    shape({
      userId: number.isRequired,
      id: number.isRequired,
      title: string.isRequired,
      body: string.isRequired
    })
  ).isRequired,
  postsByUserId: arrayOf(
    shape({
      userId: number.isRequired,
      id: number.isRequired,
      title: string.isRequired,
      body: string.isRequired
    })
  ).isRequired
};

export default PostsList;
