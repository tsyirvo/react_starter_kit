import styled from 'styled-components';

export const StyledText = styled.span`
  font-size: ${props => props.theme.textSizes.regular};
  color: ${props => props.theme.colors.primary};
`;

export const StyledTextBold = styled.span`
  font-size: ${props => props.theme.textSizes.big};
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;
