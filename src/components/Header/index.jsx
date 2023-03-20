import React, { useCallback, useMemo, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import {
  HeaderWrapper,
  LinkText,
  MobileNavigation,
  MobileNavigationWrapper,
  NavigationWrapper,
} from '@components/Header/styled';
import { ModalCC, ModalFC } from '@components/Modal';
import routesLink from '@constants/links';

const HeaderFC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = useCallback(() => setIsModalOpen(false), []);
  const handleOpen = useCallback(() => setIsModalOpen(true), []);
  const links = useMemo(
    () => (
      <>
        {routesLink.map((route) => (
          <NavLink to={route.path} onClick={handleClose}>
            {route.title}
          </NavLink>
        ))}
      </>
    ),
    [],
  );
  return (
    <HeaderWrapper>
      <span>Calculator App</span>
      <NavigationWrapper>{links}</NavigationWrapper>
      <MobileNavigation onClick={handleOpen}>
        <BiMenu />
      </MobileNavigation>
      {isModalOpen && (
        <ModalFC handleClose={handleClose}>
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
          <NavLink to={route.path} onClick={this.handleClose}>
            {route.title}
          </NavLink>
        ))}
      </>
    );
  }

  handleClose = () => {
    this.setState({ isModalOpen: false });
  };

  handleOpen = () => this.setState({ isModalOpen: true });

  render() {
    const { state, handleClose, handleOpen, links } = this;
    return (
      <HeaderWrapper>
        <span>Calculator App</span>
        <NavigationWrapper>{links}</NavigationWrapper>
        <MobileNavigation onClick={handleOpen}>
          <BiMenu />
        </MobileNavigation>
        {state.isModalOpen && (
          <ModalCC handleClose={handleClose}>
            <MobileNavigationWrapper>{links}</MobileNavigationWrapper>
          </ModalCC>
        )}
      </HeaderWrapper>
    );
  }
}

export { HeaderCC, HeaderFC };
