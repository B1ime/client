import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${props => props.size}px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: ${props => props.lineHeight};
  letter-spacing: normal;
  color: #222222;
`;

export default Title;
