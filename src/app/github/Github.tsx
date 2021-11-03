import React, { useState } from "react";
import styled from "styled-components";

import { VerticalLayout } from "atom/layout";
import { Crossfade } from "atom/display";
import { NavPanel, WindowTitlebar } from "component/window";

const AppIcon = require("asset/app/github/icon.png").default;

const contents = [
  {
    icon: require("asset/icon/user.png").default,
    label: "Profile",
    url: "https://github-e.com/#/user/gomjellie",
  },
];

interface GithubProps {}
export const Github = ({ ...props }: GithubProps) => {
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <>
      <NavPanel
        icon={AppIcon}
        items={contents.map((x, idx) => ({
          icon: x.icon,
          label: x.label,
          onClick: () => setContentIndex(idx),
        }))}
      />

      <Content>
        <WindowTitlebar title="Github" />
        <Crossfade style={{ background: "rgba(240, 240, 240, 0.8)" }}>
          {contents.map(
            (x, idx) =>
              idx === contentIndex && <IFrame loading="lazy" src={x.url} />
          )}
        </Crossfade>
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
const IFrame = styled.iframe.attrs({
  frameBorder: "none",
})`
  flex: 1;
`;
