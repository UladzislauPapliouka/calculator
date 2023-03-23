import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

import {
  HeaderWrapper,
  MobileNavigation,
  MobileNavigationWrapper,
  NavigationWrapper,
  Title,
} from '@components/Header/styled';
import { ModalFC } from '@components/Modal';
import routesLink from '@constants/links';

const HeaderFC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleIsModalOpen = () => setIsModalOpen((prevState)=>!prevState);

  const links = (
    <>
      {routesLink.map(({ path, title }) => (
        <NavLink to={path} data-cy={title} onClick={isModalOpen && toggleIsModalOpen}>
          {title}
        </NavLink>
      ))}
    </>
  );

  return (
    <HeaderWrapper>
      <Title>Calculator App</Title>
      <NavigationWrapper>{links}</NavigationWrapper>
      <MobileNavigation onClick={toggleIsModalOpen}>
        <BiMenu />
      </MobileNavigation>
      {isModalOpen && (
        <ModalFC handleClose={toggleIsModalOpen}>
          <MobileNavigationWrapper>{links}</MobileNavigationWrapper>
        </ModalFC>
      )}
    </HeaderWrapper>
  );
};

export default HeaderFC;
