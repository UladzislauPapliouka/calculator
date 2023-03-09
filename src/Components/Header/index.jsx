import React from "react";
import {HeaderWrapper, Link, MobileNavigation, NavigationWrapper} from "./styled";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <HeaderWrapper>
            <span>Calculator App</span>
            <NavigationWrapper >
                <NavLink to={'/'}>{({isActive})=><Link active={isActive}>Home</Link>}</NavLink>
                <NavLink to={'settings'}>{({isActive})=><Link active={isActive}>Settings</Link>}</NavLink>
            </NavigationWrapper>
            <MobileNavigation>trash</MobileNavigation>
        </HeaderWrapper>
    )
}

export default  Header