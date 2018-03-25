import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledText } from '../../styles/styledComponents/texts';

const StyledButton = styled.div`
  padding-horizontal: 15px;
  padding-vertical: 10px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.grey};
  margin-horizontal: 15px;
  margin-top: 10px;
  padding: 5px;
  display: inline-block;
`;

const Button = ({ label, action, ...otherProps }) => {
  return (
    <Link {...otherProps}>
      <StyledButton onClick={action}>
        <StyledText>{label}</StyledText>
      </StyledButton>
    </Link>
  );
};

Button.defaultProps = {
  action: () => {}
};

Button.propTypes = {
  label: string.isRequired,
  action: func
};

export default Button;
