import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 400px;
    min-height: 246px;
    display: flex;
    flex-direction: column;
`;

export const StyledTitle = styled.div`
    display: flex;
    align-items: center;
    height: 43px;
`;

export const StyledTitleName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    flex: 1;
`;

export const StyledTitleIcon = styled.div`
    padding: 8px;
    margin-right: 12px;
    cursor: pointer;
`;

export const StyledAccount = styled.div`
    padding: 8px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const StyledAccountInfo = styled(StyledAccount)`
    flex: 1;
    justify-content: space-between;
    padding: 0;
    padding-left: 8px;
    font-weight: 600;
    font-size: 14px;
`;

export const StyledLogout = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0095f6;
    height: 50px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: #00376b;
    }
`;
