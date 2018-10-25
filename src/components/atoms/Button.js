import styled from 'styled-components';

export const FullScreenButton = styled.button`
  width: 100%;
  height: 9.375%;
  border: none;
  background-color: ${props => props.bgColor};
  font-size: ${props => props.size}em;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${props => props.color};
  text-align: center;
`;
