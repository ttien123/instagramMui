import { device } from 'src/components/media_query';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: none;
    height: 48px;
    background: white;
    justify-content: space-evenly;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    @media (${device.breakpoint_mobile_max}) {
        display: flex;
    }
`;

export const StyledItemNav = styled.div<{ $active?: number }>`
    display: flex;
    align-items: center;
    margin: 4px 0;
    padding: 12px;
    border-radius: 8px;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    &:first-child div {
        font-weight: ${({ $active }) => $active};
    }
`;

export const StyledItemNavName = styled.div`
    font-size: 16px;
    font-weight: 300;
    padding-left: 16px;
    display: block;

    @media (${device.breakpoint_ultra_tablet_max}) {
        display: none;
    }
`;
