import styled from 'styled-components';

export const StyleWrapper = styled.div`
    width: 266px;
    min-height: 400px;
    padding: 8px;
    border-radius: 16px;
    overflow: hidden;
`;

export const StyleItemAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
    padding: 16px;
    border-radius: 8px;
    &:hover {
        background: #f4f4f4;
    }
`;

export const StyleUnderline = styled.div`
    background: #f4f4f4;
    height: 6px;
    margin: 0 -8px;
`;

export const StyleItemIcon = styled.div`
    margin-right: 12px;
`;
