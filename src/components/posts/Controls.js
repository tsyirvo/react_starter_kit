import * as React from 'react';

import { StyledContainerRow } from '../../styles/styledComponents/containers';

import Button from '../shared/Button';

const Controls = ({ filterBy }: { filterBy: (param: string) => mixed }) => (
  <StyledContainerRow>
    <Button action={() => filterBy('all')} label="Show all" />
    <Button action={() => filterBy('user')} label="Filter posts for user 1" />
  </StyledContainerRow>
);

export default Controls;
