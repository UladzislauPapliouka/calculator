import React from "react";
import {HeaderWrapper, Link, MobileNavigation, NavigationWrapper} from "./styled";
import {NavLink} from "react-router-dom";
import {BiMenu} from 'react-icons/bi'

const Header = () => {
    return (
        <HeaderWrapper>
            <span>Calculator App</span>
            <NavigationWrapper >
                <NavLink to={'/'}>{({isActive})=><Link active={isActive}>Home</Link>}</NavLink>
                <NavLink to={'settings'}>{({isActive})=><Link active={isActive}>Settings</Link>}</NavLink>
            </NavigationWrapper>
            <MobileNavigation><BiMenu/></MobileNavigation>
        </HeaderWrapper>
    )
}

export default  Header