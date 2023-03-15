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
      <MobileNavigation onClick={() => setIsModalOpen(true)}>
        <BiMenu />
      </MobileNavigation>
      {isModalOpen && (
        <FuncModal closeModal={() => setIsModalOpen(false)}>
          <MobileNavigationWrapper>
            <NavLink to="home">
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
            <NavLink to="/class/home">
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
        </FuncModal>
      )}
    </HeaderWrapper>
  );
};

export default Header;
