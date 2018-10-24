import styled from 'styled-components';

const Paragraph = styled.p`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-size: ${props => props.size}em;
  font-weight: ${props => props.fontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: ${props => props.lineHeight};
  letter-spacing: normal;
  color: ${props => props.color};
`;

Paragraph.defaultProps = {
  margin: 0,
  padding: 0,
  fontSize: 1.2,
  fontWeight: 'normal',
  color: '#000000',
};

export default Paragraph;
