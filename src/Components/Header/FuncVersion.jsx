import React, {useState} from "react";
import {HeaderWrapper, Link, MobileNavigation, MobileNavigationWrapper, NavigationWrapper} from "./styled";
import {NavLink} from "react-router-dom";
import {BiMenu} from 'react-icons/bi'
import {FuncModal} from "@components/Modal";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <HeaderWrapper>
            <span>Calculator App</span>
            <NavigationWrapper >
                <NavLink to={'home'}>{({isActive})=><Link active={isActive}>HomeFC</Link>}</NavLink>
                <NavLink to={'/class/home'}>{({isActive})=><Link active={isActive}>HomeCC</Link>}</NavLink>
                <NavLink to={'settings'}>{({isActive})=><Link active={isActive}>Settings</Link>}</NavLink>
            </NavigationWrapper>
            <MobileNavigation onClick={()=>setIsModalOpen(true)}><BiMenu/></MobileNavigation>
            {isModalOpen &&
                <FuncModal closeModal={()=>setIsModalOpen(false)}>
                        <MobileNavigationWrapper>
                            <NavLink to={'home'}>{({isActive})=><Link onClick={()=>setIsModalOpen(false)} active={isActive}>HomeFC</Link>}</NavLink>
                            <NavLink to={'/class/home'}>{({isActive})=><Link onClick={()=>setIsModalOpen(false)} active={isActive}>HomeCC</Link>}</NavLink>
                            <NavLink to={'settings'}>{({isActive})=><Link onClick={()=>setIsModalOpen(false)} active={isActive}>Settings</Link>}</NavLink>
                        </MobileNavigationWrapper>
                </FuncModal>}
        </HeaderWrapper>
    )
}

export   {Header}