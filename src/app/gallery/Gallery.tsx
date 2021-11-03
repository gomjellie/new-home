import React, { useState } from "react";
import styled from "styled-components";

import { Space, VerticalLayout } from "atom/layout";
import { Crossfade, ScrollArea } from "atom/display";
import { NavPanel, WindowTitlebar } from "component/window";
import { GalleryGrid } from "./component";

// @ts-ignore
import * as rania from "../../asset/app/gallery/rania/*.png";

const AppIcon = require("asset/icon/gallery.png").default;

enum ContentType {
  Index = "index",
  Github = "github",
}

interface GalleryProps {}
export const Gallery = ({ ...props }: GalleryProps) => {
  const [contentType, setContentType] = useState(ContentType.Index);

  return (
    <>
      <NavPanel icon={AppIcon} items={[]} />

      <Content>
        <WindowTitlebar
          icon={require("asset/icon/gallery.png").default}
          title="Gallery"
        />
        {contentType === ContentType.Index && (
          <ScrollArea>
            <GalleryGrid
              items={[
                "https://www.wechall.net/challenge/training/stegano1/stegano1.bmp",
              ]}
            />
          </ScrollArea>
        )}
        {contentType === ContentType.Github && (
          <ScrollArea>
            <GalleryGrid
              items={[
                require("asset/app/gallery/boxel/1.png").default,
                ...Object.values(rania as any),
              ]}
            />
          </ScrollArea>
        )}
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
