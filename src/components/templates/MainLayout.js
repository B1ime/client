import React, { Component } from 'react';
import { IntroSection } from '../organisms';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <IntroSection
          description="새로운 모임을 만들어보세요!"
          index={1}
          title="방 만들기"
        />
        <div />
        <IntroSection
          description="만들어진 모임에 참여해보세요!"
          index={2}
          title="참여하기"
        />
      </div>
    );
  }
}

export default MainLayout;
