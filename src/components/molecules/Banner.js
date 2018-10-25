import React from 'react';
import styled from 'styled-components';
import { Title, Paragraph } from '../atoms';

const Wrapper = styled.div`
  margin-top: 26.39%;
  margin-bottom: 6.61%;
`;

// 방 개수가 1개 이상일 경우
const Banner = () => (
  <Wrapper>
    <Title size={3.4} lineHeight={1.47} color="#4262f3">
      반가워요!
    </Title>
    <Paragraph size={1} fontWeight={300} lineHeight={1.4} color="#666666">
      오늘 나의 모임을 클릭 후 참여하기 버튼을 누르면
      <br /> 약속 시간 2시간 전부터 나의 현위치가 공개됩니다.
      <br /> 하나의 방에만 참여가 가능합니다 :)
    </Paragraph>
  </Wrapper>
);

export default Banner;
