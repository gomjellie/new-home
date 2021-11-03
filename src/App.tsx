import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root'
import 'antd/dist/antd.css';

import { DesktopPage } from 'page/DesktopPage';
import { isMobile } from 'utils';

const App = () => {
  useEffect(() => {
    if (isMobile())
      alert('Sorry, this page does not work properly on mobile devices.');
  }, []);

  return (
    <DesktopPage />
  );
}
export default process.env.NODE_ENV === "development" ? hot(App) : App;
