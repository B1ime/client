import styled from 'styled-components';

const Title = styled.h1`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-size: ${props => props.size}em;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: ${props => props.lineHeight};
  letter-spacing: normal;
  color: ${props => props.color};
`;

Title.defaultProps = {
  margin: 0,
  padding: 0,
};

export default Title;
