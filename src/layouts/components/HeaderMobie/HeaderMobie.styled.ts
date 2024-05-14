import { device } from 'src/components/media_query';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: none;
    height: 44px;
    background: white;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    right: 0;
    padding: 0 16px;
    border-bottom: 1px solid #dbdbdb;
    @media (${device.breakpoint_mobile_max}) {
        display: flex;
    }
`;

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
`;

export const StyledFeature = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;
`;
