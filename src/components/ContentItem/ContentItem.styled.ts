import styled from 'styled-components';
import { device } from 'src/components/media_query';

export const StyleBoxContent = styled.div`
    padding-bottom: 16px;
    margin-bottom: 20px;
    @media (${device.breakpoint_ultra_tablet_max}) {
        margin-bottom: 0;
    }
`;

export const StyledInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px 12px;
`;

export const StyledInfoIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`;

export const StyledInfoIconName = styled.div`
    margin-left: 12px;
    font-weight: 500;
`;

export const StyledImgPost = styled.img`
    display: block;
    width: 100%;
`;

export const StyledBoxCommentAll = styled.div`
    @media (${device.breakpoint_mobile_max}) {
        padding: 0 16px;
    }
`;

export const StyledBoxReact = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4px 0;
`;

export const StyledListReact = styled.div`
    display: flex;
    align-items: center;
    margin-left: -8px;
`;

export const StyedTotalLike = styled.div`
    font-size: 14px;
    font-weight: 600;
`;

export const StyedInputComment = styled.input`
    display: block;
    outline: none;
    border: none;
    font-size: 14px;
`;

export const StyledBoxComment = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 16px;
`;
