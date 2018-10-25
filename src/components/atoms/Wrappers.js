import styled from 'styled-components';

export const FullScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const FullWidthWrapper = styled.div`
  width: 100%;
  height: ${props => (props.height ? props.height : 'inherit')};
`;

export const FullHeightWrapper = styled.div`
  height: 100%;
  width: ${props => (props.width ? props.width : 'inherit')};
`;
