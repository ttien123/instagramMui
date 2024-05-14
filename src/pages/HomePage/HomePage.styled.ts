import { device } from 'src/components/media_query';
import styled from 'styled-components';

export const StyleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 44px;
`;

export const StyleMain = styled.div`
    width: 100%;
    max-width: 630px;
    margin-top: 16px;
`;

export const StyleSuggestion = styled.div`
    width: 100%;
    max-width: 383px;
    padding-left: 64px;
    height: 100vh;

    @media (${device.breakpoint_ultra_tablet_max}) {
        display: none;
    }
`;
