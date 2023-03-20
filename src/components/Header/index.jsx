import React, { useCallback, useMemo, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import {
  HeaderWrapper,
  Link,
  MobileNavigation,
  MobileNavigationWrapper,
  NavigationWrapper,
} from '@components/Header/styled';
import { ClassModal, FuncModal } from '@components/Modal';
import routesLink from '@constants/links';

const HeaderFC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = useCallback(() => setIsModalOpen(false), []);
  const handleOpen = useCallback(() => setIsModalOpen(true), []);
  const links = useMemo(
    () => (
      <>
        {routesLink.map((route) => (
          <NavLink to={route.path}>
            {({ isActive }) => (
              <Link href="replace" onClick={handleClose} active={isActive}>
                {route.title}
              </Link>
            )}
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
        <FuncModal handleClose={handleClose}>
          <MobileNavigationWrapper>{links}</MobileNavigationWrapper>
        </FuncModal>
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
          <NavLink to={route.path}>
            {({ isActive }) => (
              <Link href="replace" onClick={this.handleClose} active={isActive}>
                {route.title}
              </Link>
            )}
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
          <ClassModal handleClose={handleClose}>
            <MobileNavigationWrapper>{links}</MobileNavigationWrapper>
          </ClassModal>
        )}
      </HeaderWrapper>
    );
  }
}

export { HeaderCC, HeaderFC };
