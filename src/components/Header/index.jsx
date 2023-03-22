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
import { ModalCC, ModalFC } from '@components/Modal';
import routesLink from '@constants/links';

const HeaderFC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const links = (
    <>
      {routesLink.map(({ path, title }) => (
        <NavLink to={path} data-cy={title} onClick={closeModal}>
          {title}
        </NavLink>
      ))}
    </>
  );

  return (
    <HeaderWrapper>
      <Title>Calculator App</Title>
      <NavigationWrapper>{links}</NavigationWrapper>
      <MobileNavigation onClick={openModal}>
        <BiMenu />
      </MobileNavigation>
      {isModalOpen && (
        <ModalFC handleClose={closeModal}>
          <MobileNavigationWrapper>{links}</MobileNavigationWrapper>
        </ModalFC>
      )}
    </HeaderWrapper>
  );
};

class HeaderCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.links = (
      <>
        {routesLink.map(({ path, title }) => (
          <NavLink to={path} data-cy={title} onClick={this.closeModal}>
            {title}
          </NavLink>
        ))}
      </>
    );
  }

  closeModal = () => this.setState({ isModalOpen: false });

  openModal = () => this.setState({ isModalOpen: true });

  render() {
    const { state, openModal, closeModal, links } = this;

    return (
      <HeaderWrapper>
        <Title>Calculator App</Title>
        <NavigationWrapper>{links}</NavigationWrapper>
        <MobileNavigation onClick={openModal}>
          <BiMenu />
        </MobileNavigation>
        {state.isModalOpen && (
          <ModalCC handleClose={closeModal}>
            <MobileNavigationWrapper>{links}</MobileNavigationWrapper>
          </ModalCC>
        )}
      </HeaderWrapper>
    );
  }
}

export { HeaderCC, HeaderFC };
