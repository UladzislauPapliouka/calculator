import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { FuncModal } from '@components/Modal';

import {
  HeaderWrapper,
  Link,
  MobileNavigation,
  MobileNavigationWrapper,
  NavigationWrapper,
} from './styled';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);
  return (
    <HeaderWrapper>
      <span>Calculator App</span>
      <NavigationWrapper>
        <NavLink to="home">
          {({ isActive }) => (
            <Link href="replace" active={isActive}>
              HomeFC
            </Link>
          )}
        </NavLink>
        <NavLink to="/class/home">
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
      {isModalOpen && (
        <FuncModal handleClose={handleClose}>
          <MobileNavigationWrapper>
            <NavLink to="home">
              {({ isActive }) => (
                <Link href="replace" onClick={handleClose} active={isActive}>
                  HomeFC
                </Link>
              )}
            </NavLink>
            <NavLink to="/class/home">
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
        </FuncModal>
      )}
    </HeaderWrapper>
  );
};

export default Header;
