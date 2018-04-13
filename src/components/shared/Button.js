// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
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

const Button = ({
  label,
  action,
  to,
  ...otherProps
}: {
  label: string,
  action?: () => mixed,
  to?: string,
}) => {
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
  label: PropTypes.string.isRequired,
  action: PropTypes.func,
  to: PropTypes.string,
};

export default Button;
