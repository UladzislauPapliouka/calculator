import React, { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

import appRoutes from '@components/App/AppRealization/AppCC/config';
import { HeaderCC } from '@components/Header';

class AppCC extends PureComponent {
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
export default AppCC;
