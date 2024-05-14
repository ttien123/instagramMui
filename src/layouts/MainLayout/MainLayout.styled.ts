import { device } from 'src/components/media_query';
import styled from 'styled-components';

export const StyledWrapper = styled.main`
    display: flex;
    min-height: 100vh;
`;

export const StyledSideNav = styled.div<{ $isMobi?: string }>`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 244px;
    padding: 8px 12px 20px;
    border-right: 1px solid rgb(219, 219, 219);
    @media (${device.breakpoint_ultra_tablet_max}) {
        width: fit-content;
    }
    @media (${device.breakpoint_mobile_max}) {
        display: none;
    }
`;

export const StyleMain = styled.div`
    flex: 1;
    margin-left: 244px;
    @media (${device.breakpoint_ultra_tablet_max}) {
        margin-left: 73px;
    }
    @media (${device.breakpoint_mobile_max}) {
        margin-left: 0;
    }
`;
