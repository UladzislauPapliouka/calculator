import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { ClassModal } from '@components/Modal';

import {
  HeaderWrapper,
  Link,
  MobileNavigation,
  MobileNavigationWrapper,
  NavigationWrapper,
} from './styled';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleClose = () => {
    console.log('close');
    this.setState({ isModalOpen: false });
  };

  handleOpen = () => this.setState({ isModalOpen: true });

  render() {
    const { state, handleClose, handleOpen } = this;
    return (
      <HeaderWrapper>
        <span>Calculator App</span>
        <NavigationWrapper>
          <NavLink to="/func/home">
            {({ isActive }) => (
              <Link href="replace" active={isActive}>
                HomeFC
              </Link>
            )}
          </NavLink>
          <NavLink to="home">
            {({ isActive }) => (
              <Link href="replace" active={isActive}>
                HomeCC
              </Link>
            )}
          </NavLink>
          <NavLink to="settings">
            {({ isActive }) => (
              <Link href="replace" active={isActive}>
                Settings
              </Link>
            )}
          </NavLink>
        </NavigationWrapper>
        <MobileNavigation onClick={handleOpen}>
          <BiMenu />
        </MobileNavigation>
        {state.isModalOpen && (
          <ClassModal handleClose={handleClose}>
            <MobileNavigationWrapper>
              <NavLink to="/func/home">
                {({ isActive }) => (
                  <Link href="replace" onClick={handleClose} active={isActive}>
                    HomeFC
                  </Link>
                )}
              </NavLink>
              <NavLink to="home">
                {({ isActive }) => (
                  <Link href="replace" onClick={handleClose} active={isActive}>
                    HomeCC
                  </Link>
                )}
              </NavLink>
              <NavLink to="settings">
                {({ isActive }) => (
                  <Link href="replace" onClick={handleClose} active={isActive}>
                    Settings
                  </Link>
                )}
              </NavLink>
            </MobileNavigationWrapper>
          </ClassModal>
        )}
      </HeaderWrapper>
    );
  }
}

export default Header;
