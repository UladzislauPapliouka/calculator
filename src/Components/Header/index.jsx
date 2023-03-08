import React from "react";
import {HeaderWrapper, Link, NavigationWrapper} from "./styled";


const Header = () => {
    return (
        <HeaderWrapper>
            <span>Calculator App</span>
            <NavigationWrapper >
                <Link active>Home</Link>
                <Link >Settings</Link>
            </NavigationWrapper>
        </HeaderWrapper>
    )
}

export default  Header