import { Avatar } from '@mui/material';
import ImgAccount from 'src/assets/imgStory.jpg';
import { StyledBoxAccount, StyledButton, StyledInfoAccount, StyledInfoAccountName } from './SuggestAccount.styled';

interface Props {
    isSuggestion?: boolean;
}

const SuggestAccount = ({ isSuggestion }: Props) => {
    return (
        <StyledBoxAccount $isSuggestion={`${isSuggestion && '8px 16px'}`}>
            <div style={{ marginRight: 12 }}>
                <Avatar alt="Remy Sharp" src={ImgAccount} sx={{ width: 44, height: 44 }} />
            </div>
            <StyledInfoAccount>
                <h4>t.tien_01</h4>
                <StyledInfoAccountName $isSuggestion={`${isSuggestion && '12px'}`}>
                    {isSuggestion ? 'Suggested for you' : 'Nguyễn Thế Tiến'}
                </StyledInfoAccountName>
            </StyledInfoAccount>
            <div>
                <StyledButton>Switch</StyledButton>
            </div>
        </StyledBoxAccount>
    );
};

export default SuggestAccount;
