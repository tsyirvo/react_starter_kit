import React from 'react';
import {
  StyledContainerBasic,
  StyledContainerColumn
} from '../../styles/styledComponents/containers';

import Button from '../shared/Button';

const StyledWrapper = StyledContainerBasic.extend`
  justify-content: center;
`;

const Home = () => {
  return (
    <StyledWrapper>
      <StyledContainerColumn>
        <Button to="/posts" label="Go to posts API example" />
      </StyledContainerColumn>
    </StyledWrapper>
  );
};

export default Home;
