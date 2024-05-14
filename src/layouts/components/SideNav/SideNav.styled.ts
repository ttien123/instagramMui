import { device } from 'src/components/media_query';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`;

export const StyledLogo = styled.div`
    height: 73px;
    display: flex;
    align-items: center;
    padding: 25px 12px 16px;
    margin-bottom: 20px;
`;

export const StyledLogoPc = styled.div`
    @media (${device.breakpoint_ultra_tablet_max}) {
        display: none;
    }
`;

export const StyledLogoMobi = styled.div`
    display: none;
    @media (${device.breakpoint_ultra_tablet_max}) {
        display: block;
    }
`;

export const StyledItemNav = styled.div<{ $active?: number }>`
    display: flex;
    align-items: center;
    margin: 4px 0;
    padding: 12px;
    border-radius: 8px;
    width: 100%;
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

export const StyledItemAvatar = styled.img`
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;
