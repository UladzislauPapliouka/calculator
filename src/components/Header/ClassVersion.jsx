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

  setIsModalOpen = (value) => this.setState({ isModalOpen: value });

  render() {
    const { state, setIsModalOpen } = this;
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
        <MobileNavigation onClick={() => setIsModalOpen(true)}>
          <BiMenu />
        </MobileNavigation>
        {state.isModalOpen && (
          <ClassModal closeModal={() => setIsModalOpen(false)}>
            <MobileNavigationWrapper>
              <NavLink to="/func/home">
                {({ isActive }) => (
                  <Link
                    href="replace"
                    onClick={() => setIsModalOpen(false)}
                    active={isActive}
                  >
                    HomeFC
                  </Link>
                )}
              </NavLink>
              <NavLink to="home">
                {({ isActive }) => (
                  <Link
                    href="replace"
                    onClick={() => setIsModalOpen(false)}
                    active={isActive}
                  >
                    HomeCC
                  </Link>
                )}
              </NavLink>
              <NavLink to="settings">
                {({ isActive }) => (
                  <Link
                    href="replace"
                    onClick={() => setIsModalOpen(false)}
                    active={isActive}
                  >
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
