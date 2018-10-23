import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.fontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: ${props => props.lineHeight};
  letter-spacing: normal;
  color: ${props => props.color};
`;

export default Paragraph;
