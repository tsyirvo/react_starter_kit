import React from 'react';

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

export default Post;
