import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

import {
  HeaderWrapper,
  MobileNavigation,
  MobileNavigationWrapper,
  NavigationWrapper,
  Title,
} from '@components/Header/styled';
import { ModalCC } from '@components/Modal';
import routesLink from '@constants/links';

class HeaderCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleIsModalOpen = () =>
    this.setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));

  render() {
    const { state, toggleIsModalOpen } = this;
    const links = (
      <>
        {routesLink.map(({ path, title }) => (
          <NavLink
            to={path}
            data-cy={title}
            onClick={this.state.isModalOpen && toggleIsModalOpen}
          >
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
        {state.isModalOpen && (
          <ModalCC handleClose={toggleIsModalOpen}>
            <MobileNavigationWrapper>{links}</MobileNavigationWrapper>
          </ModalCC>
        )}
      </HeaderWrapper>
    );
  }
}
export default HeaderCC;
