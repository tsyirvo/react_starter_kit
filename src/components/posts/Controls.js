import React from 'react';
import { func } from 'prop-types';

import { StyledContainerRow } from '../../styles/styledComponents/containers';

import Button from '../shared/Button';

const Controls = ({ filterBy }) => {
  return (
    <StyledContainerRow>
      <Button action={() => filterBy('all')} label="Show all" to="/posts" />
      <Button
        action={() => filterBy('user')}
        label="Filter posts for user 1"
        to="/posts"
      />
    </StyledContainerRow>
  );
};

Controls.propTypes = {
  filterBy: func.isRequired
};

export default Controls;
