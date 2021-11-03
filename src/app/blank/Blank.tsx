import React from "react";
import styled from "styled-components";

import { VerticalLayout } from "atom/layout";
import { WindowTitlebar } from "component/window";

const AppIcon = require("asset/app/blank/icon.png").default;

interface BlankProps {}
export const Blank = ({ ...props }: BlankProps) => {
  return (
    <Content>
      <WindowTitlebar icon={AppIcon} title="Blank" />
      <HelloWorldText>
        <a href="https://github.com/pjc0247">pjc0247</a>님의{" "}
        <a href="https://github.com/pjc0247/new-home/issues/2">허락</a>을 받아
        <a href="pjc0247.github.io/new-home">포트폴리오</a> 프로젝트를 참고해서
        만들었습니다.
        <br />
        pjc0247님께 다시한번 감사드립니다!
      </HelloWorldText>
    </Content>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
const HelloWorldText = styled.div`
  color: white;

  font-size: 18px;
  text-align: center;

  margin: auto auto;
`;
