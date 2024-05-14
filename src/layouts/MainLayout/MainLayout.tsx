import { Outlet } from 'react-router-dom';
import { StyledSideNav, StyledWrapper, StyleMain } from './MainLayout.styled';
import SideNav from '../components/SideNav';
import SideNavMobie from '../components/SideNavMobie';
import HeaderMobie from '../components/HeaderMobie';
const MainLayout = () => {
    return (
        <StyledWrapper>
            <StyledSideNav>
                <SideNav />
            </StyledSideNav>
            <StyleMain>
                <HeaderMobie />
                <Outlet />
                <SideNavMobie />
            </StyleMain>
        </StyledWrapper>
    );
};

export default MainLayout;
