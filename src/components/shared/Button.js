import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledText } from '../../styles/styledComponents/texts';

const StyledButton = styled.div`
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.grey};
  margin: 10px 0 15px 15px;
  display: inline-block;
  cursor: pointer;
`;

const Button = ({ label, action, to, ...otherProps }) => {
  if (to !== '') {
    return (
      <Link {...otherProps} to={to} onClick={action}>
        <StyledButton>
          <StyledText>{label}</StyledText>
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton {...otherProps} onClick={action}>
      <StyledText>{label}</StyledText>
    </StyledButton>
  );
};

Button.defaultProps = {
  action: () => {},
  to: '',
};

Button.propTypes = {
  label: string.isRequired,
  action: func,
  to: string,
};

export default Button;
