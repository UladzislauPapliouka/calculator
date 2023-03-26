import React, { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

import appRoutes from '@components/AppRouting/AppRoutingCC/config';
import { HeaderCC } from '@components/Header';

class AppRoutingCC extends PureComponent {
  render() {
    return (
      <>
        <HeaderCC />
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </>
    );
  }
}
export default AppRoutingCC;
