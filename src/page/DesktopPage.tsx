import React from "react";
import styled from "styled-components";

import { Desktop, Shortcut } from "component/desktop";
import { App } from "state/app";
import { BladeApp } from "app/blade";
import { GalleryApp } from "app/gallery";
import { GithubApp } from "app/github";
import { RookieApp } from "app/rookie";
import { BlankApp } from "app/blank";
import { CodepadApp } from "app/codepad";
import { LineFeed, Push } from "atom/layout";
import { LargeClock } from "component/widget";
import { BrowserApp } from "app/browser/app";
import { RaniaApp } from "app/rania";
import { VRApp } from "app/vr";
import { SlowSharpApp } from "app/slowsharp";

export const DesktopPage = ({}) => {
  return (
    <Desktop>
      <SectionLabel>Personal Profile</SectionLabel>
      <Push />
      <LargeClock />
      <LineFeed />

      <Shortcut
        src={require("asset/app/github/icon.png").default}
        name="Github"
        onClick={() => App.launch(GithubApp)}
      />
      <LineFeed />

      <div style={{ display: "flex", width: "100%" }}>
        <div>
          <SectionLabel>Solve this Problem</SectionLabel>
          <LineFeed />

          <Shortcut
            src={require("asset/icon/gallery.png").default}
            name="Gallery"
            onClick={() => App.launch(GalleryApp)}
          />
          <LineFeed />
        </div>
        <div style={{ width: "360px" }} />
        <div>
          <SectionLabel>Hints</SectionLabel>
          <LineFeed />
          <Shortcut
            src={require("asset/icon/rgb.png").default}
            name="steganography"
            onClick={() =>
              App.launch(BrowserApp, {
                url: "https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%85%8C%EA%B0%80%EB%85%B8%EA%B7%B8%EB%9E%98%ED%94%BC",
                width: 1024,
                height: 640,
              })
            }
          />
          <Shortcut
            src={require("asset/icon/cat.png").default}
            name="Cat 명령어"
            onClick={() =>
              App.launch(BrowserApp, {
                url: "https://codechacha.com/ko/linux-cat/",
                width: 480,
                height: 740,
              })
            }
          />
          <LineFeed />
        </div>
      </div>

      <SectionLabel>WebOS Playground</SectionLabel>
      <LineFeed />
      <Shortcut
        src={require("asset/app/blank/icon.png").default}
        name="Thanks To"
        onClick={() => App.launch(BlankApp)}
      />
      <Shortcut
        src={require("asset/app/codepad/icon.png").default}
        name="CodePad"
        onClick={() => App.launch(CodepadApp)}
      />
      <Shortcut
        src={require("asset/icon/code.png").default}
        name="Source Code"
        onClick={() => window.open("https://github.com/gomjellie/new-home")}
      />
    </Desktop>
  );
};

const SectionLabel = styled.div`
  color: white;

  font-size: 14px;

  user-select: none;
`;
