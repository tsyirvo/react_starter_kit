import React from 'react';
import { string, func } from 'prop-types';

import {
  StyledContainerColumn,
  StyledContainerRow
} from '../../styles/styledComponents/containers';
import {
  StyledTextBold,
  StyledText
} from '../../styles/styledComponents/texts';

import Button from '../shared/Button';

const Post = ({ title, body, onEdit, onDelete }) => {
  return (
    <StyledContainerColumn>
      <div>
        <StyledTextBold>{title}</StyledTextBold>
        <StyledText>{body}</StyledText>
      </div>

      <StyledContainerRow>
        <Button action={() => onEdit()} label="Edit" to="/posts" />
        <Button action={() => onDelete()} label="Delete" to="/posts" />
      </StyledContainerRow>
    </StyledContainerColumn>
  );
};

Post.propTypes = {
  title: string.isRequired,
  body: string.isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired
};

export default Post;
