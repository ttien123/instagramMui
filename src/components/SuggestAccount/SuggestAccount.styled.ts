import styled from 'styled-components';

export const StyledBoxAccount = styled.div<{ $isSuggestion?: string }>`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 16px;
    padding: ${({ $isSuggestion }) => $isSuggestion};
`;

export const StyledInfoAccount = styled.div`
    flex: 1;
    h4 {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
    }
`;

export const StyledInfoAccountName = styled.div<{ $isSuggestion?: string }>`
    font-size: 14px;
    font-weight: 500;
    color: #737373;
    font-size: ${({ $isSuggestion }) => $isSuggestion};
    margin-top: ${({ $isSuggestion }) => ($isSuggestion ? '4px' : 0)};
`;

export const StyledButton = styled.button`
    font-size: 12px;
    cursor: pointer;
    font-weight: 500;
    color: #0095f6;
    font-weight: 600;

    &:hover {
        color: #00376b;
    }
`;
