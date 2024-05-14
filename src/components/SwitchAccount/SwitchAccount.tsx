import { Avatar, Divider } from '@mui/material';
import imgAvatar from 'src/assets/imgStory.jpg';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
    StyledAccount,
    StyledAccountInfo,
    StyledLogout,
    StyledTitle,
    StyledTitleIcon,
    StyledTitleName,
    StyledWrapper,
} from './SwitchAccount.styled';
import IconClose from 'src/assets/IconClose';

interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwitchAccount = ({ setOpen }: Props) => {
    return (
        <StyledWrapper>
            <StyledTitle>
                <StyledTitleName>Switch accounts</StyledTitleName>
                <StyledTitleIcon onClick={() => setOpen(false)}>
                    <IconClose />
                </StyledTitleIcon>
            </StyledTitle>
            <Divider component="div"></Divider>
            <div style={{ flex: 1 }}>
                <StyledAccount>
                    <Avatar alt="Remy Sharp" src={imgAvatar} sx={{ width: 56, height: 56 }} />
                    <StyledAccountInfo>
                        <div>t.tien_01</div>
                        <div>
                            <CheckCircleRoundedIcon />
                        </div>
                    </StyledAccountInfo>
                </StyledAccount>
            </div>
            <Divider component="div" />
            <StyledLogout type="button">Log into an Existing Account</StyledLogout>
        </StyledWrapper>
    );
};

export default SwitchAccount;
