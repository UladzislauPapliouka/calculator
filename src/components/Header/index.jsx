import React, { useCallback, useState } from 'react';
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
  const toggleIsOpen = () => setIsModalOpen(!isModalOpen);
  const links = (
    <>
      {routesLink.map((route) => (
        <NavLink
          to={route.path}
          data-cy={route.title}
          onClick={isModalOpen && toggleIsOpen}
        >
          {route.title}
        </NavLink>
      ))}
    </>
  );

  return (
    <HeaderWrapper>
      <Title>Calculator App</Title>
      <NavigationWrapper>{links}</NavigationWrapper>
      <MobileNavigation onClick={isModalOpen && toggleIsOpen}>
        <BiMenu />
      </MobileNavigation>
      {isModalOpen && (
        <ModalFC handleClose={isModalOpen && toggleIsOpen}>
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
        {routesLink.map((route) => (
          <NavLink
            to={route.path}
            data-cy={route.title}
            onClick={this.state.isModalOpen && this.toggleIsOpen}
          >
            {route.title}
          </NavLink>
        ))}
      </>
    );
  }

  toggleIsOpen = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  render() {
    const { state, toggleIsOpen, links } = this;
    return (
      <HeaderWrapper>
        <Title>Calculator App</Title>
        <NavigationWrapper>{links}</NavigationWrapper>
        <MobileNavigation onClick={state.isModalOpen && toggleIsOpen}>
          <BiMenu />
        </MobileNavigation>
        {state.isModalOpen && (
          <ModalCC handleClose={state.isModalOpen && toggleIsOpen}>
            <MobileNavigationWrapper>{links}</MobileNavigationWrapper>
          </ModalCC>
        )}
      </HeaderWrapper>
    );
  }
}

export { HeaderCC, HeaderFC };
