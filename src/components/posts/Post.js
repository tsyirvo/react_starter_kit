// @flow

import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledContainerColumn,
  StyledContainerRow
} from '../../styles/styledComponents/containers';
import {
  StyledTextBold,
  StyledText
} from '../../styles/styledComponents/texts';

import Button from '../shared/Button';

const Post = ({
  title,
  body,
  onEdit,
  onDelete
}: {
  title: string,
  body: string,
  onEdit: () => mixed,
  onDelete: () => mixed
}) => (
  <StyledContainerColumn>
    <div>
      <StyledTextBold>{title}</StyledTextBold>
      <StyledText>{body}</StyledText>
    </div>

    <StyledContainerRow>
      <Button action={() => onEdit()} label="Edit" />
      <Button action={() => onDelete()} label="Delete" />
    </StyledContainerRow>
  </StyledContainerColumn>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Post;
