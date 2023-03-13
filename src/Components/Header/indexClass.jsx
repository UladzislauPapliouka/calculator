import React, {useState} from "react";
import {HeaderWrapper, Link, MobileNavigation, MobileNavigationWrapper, NavigationWrapper} from "@components/Header/styled";
import {NavLink} from "react-router-dom";
import {BiMenu} from 'react-icons/bi'
import {Modal} from "@components/Modal/indexClass";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }
    setIsModalOpen = (value) => this.setState({isModalOpen:value})
    render() {
        return (
            <HeaderWrapper>
                <span>Calculator App</span>
                <NavigationWrapper>
                    <NavLink to={'/func/home'}>{({isActive})=><Link active={isActive}>HomeFC</Link>}</NavLink>
                    <NavLink to={'home'}>{({isActive})=><Link active={isActive}>HomeCC</Link>}</NavLink>
                    <NavLink to={'settings'}>{({isActive})=><Link active={isActive}>Settings</Link>}</NavLink>
                </NavigationWrapper>
                <MobileNavigation onClick={() => this.setIsModalOpen(true)}><BiMenu/></MobileNavigation>
                {this.isModalOpen &&
                    <Modal closeModal={() => this.setIsModalOpen(false)}>
                        <MobileNavigationWrapper>
                            <NavLink to={'/func/home'}>{({isActive}) => <Link onClick={() => this.setIsModalOpen(false)}
                                                                        active={isActive}>HomeFC</Link>}</NavLink>
                            <NavLink to={'home'}>{({isActive}) => <Link onClick={() => this.setIsModalOpen(false)}
                                                                     active={isActive}>HomeCC</Link>}</NavLink>
                            <NavLink to={'settings'}>{({isActive}) => <Link onClick={() => this.setIsModalOpen(false)}
                                                                            active={isActive}>Settings</Link>}</NavLink>
                        </MobileNavigationWrapper>
                    </Modal>}
            </HeaderWrapper>
        )
    }
}

export default  Header