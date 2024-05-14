import styled from 'styled-components';

export const StyleWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 6px;
    gap: 16px;
    cursor: pointer;
    margin-bottom: 24px;
`;

export const StyledItem = styled.div`
    width: 66px;
`;

export const StyledWrapperImg = styled.div`
    padding: 2px;
    width: 100%;
    border-radius: 50%;
    border: 2px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px 0 8px;
    height: 66px;
`;

export const StyledImg = styled.img`
    display: block;
    border-radius: 50%;
    width: 56px;
    height: 56px;
`;

export const StyledName = styled.div`
    padding: 0 2px;
    font-size: 12px;
    color: #737373;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;
