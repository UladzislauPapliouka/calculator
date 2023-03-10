import React, {useState} from "react";
import {HeaderWrapper, Link, MobileNavigation, MobileNavigationWrapper, NavigationWrapper} from "./styled";
import {NavLink} from "react-router-dom";
import {BiMenu} from 'react-icons/bi'
import {Modal} from "../Modal";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)
    return (
        <HeaderWrapper>
            <span>Calculator App</span>
            <NavigationWrapper >
                <NavLink to={'/'}>{({isActive})=><Link active={isActive}>Home</Link>}</NavLink>
                <NavLink to={'settings'}>{({isActive})=><Link active={isActive}>Settings</Link>}</NavLink>
            </NavigationWrapper>
            <MobileNavigation onClick={()=>setIsModalOpen(true)}><BiMenu/></MobileNavigation>
            {isModalOpen &&
                <Modal closeModal={()=>setIsModalOpen(false)}>
                        <MobileNavigationWrapper>
                            <NavLink to={'/'}>{({isActive})=><Link onClick={()=>setIsModalOpen(false)} active={isActive}>Home</Link>}</NavLink>
                            <NavLink to={'settings'}>{({isActive})=><Link onClick={()=>setIsModalOpen(false)} active={isActive}>Settings</Link>}</NavLink>
                        </MobileNavigationWrapper>
                </Modal>}
        </HeaderWrapper>
    )
}

export default  Header