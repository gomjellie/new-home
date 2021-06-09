import React from 'react';
import styled from 'styled-components';

import { Desktop, Shortcut } from 'component/desktop';
import { App } from 'state/impl';
import { BladeApp } from 'app/blade';
import { GalleryApp } from 'app/gallery';
import { GithubApp } from 'app/github';
import { RookieApp } from 'app/rookie';
import { BlankApp } from 'app/blank';
import { CodepadApp } from 'app/codepad';
import { LineFeed } from 'atom/layout';

export const DesktopPage = ({

}) => {
  return(
    <Desktop>
      <SectionLabel>
        Personal Profile
      </SectionLabel>
      <LineFeed />

      <Shortcut
        src={require('asset/app/github/icon.png').default}
        name="Github"
        onClick={() => App.launch(GithubApp)}
      />
      <LineFeed />

      <SectionLabel>
        Game Development
      </SectionLabel>
      <LineFeed />

      <Shortcut
        src={require('asset/icon/gallery.png').default}
        name="Gallery"
        onClick={() => App.launch(GalleryApp)}
      />
      <Shortcut
        src={require('asset/app/blade/icon.png').default}
        name="Blade"
        onClick={() => App.launch(BladeApp)}
      />
      <LineFeed />

      <SectionLabel>
        Compilers
      </SectionLabel>
      <LineFeed />

      <Shortcut
        src={require('asset/app/rookie/icon.png').default}
        name="Rookie"
        onClick={() => App.launch(RookieApp)}
      />
      <LineFeed />

      <SectionLabel>
        WebOS Playground
      </SectionLabel>
      <LineFeed />
      <Shortcut
        src={require('asset/app/blank/icon.png').default}
        name="Blank"
        onClick={() => App.launch(BlankApp)}
      />
      <Shortcut
        src={require('asset/app/codepad/icon.png').default}
        name="CodePad"
        onClick={() => App.launch(CodepadApp)}
      />
      <Shortcut
        src={require('asset/icon/code.png').default}
        name="Source Code"
        onClick={() => window.open('https://github.com/pjc0247/new-home')}
      />
    </Desktop>
  );
};

const SectionLabel = styled.div`
  color: white;

  font-size: 14px;
`;
