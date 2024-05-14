import { Avatar } from '@mui/material';
import { StyleWrapper, StyledImg, StyledItem, StyledName, StyledWrapperImg } from './Story.styled';
import imgStory from 'src/assets/imgStory.jpg';
const Story = () => {
    return (
        <StyleWrapper>
            <StyledItem>
                <StyledWrapperImg>
                    <Avatar alt="Remy Sharp" src={imgStory} sx={{ width: 56, height: 56 }} />
                </StyledWrapperImg>
                <StyledName>phamnhuy.20</StyledName>
            </StyledItem>
            <StyledItem>
                <StyledWrapperImg>
                    <Avatar alt="Remy Sharp" src={imgStory} sx={{ width: 56, height: 56 }} />
                </StyledWrapperImg>
                <StyledName>phamnhuy.20</StyledName>
            </StyledItem>
            <StyledItem>
                <StyledWrapperImg>
                    <Avatar alt="Remy Sharp" src={imgStory} sx={{ width: 56, height: 56 }} />
                </StyledWrapperImg>
                <StyledName>phamnhuy.20</StyledName>
            </StyledItem>
            <StyledItem>
                <StyledWrapperImg>
                    <Avatar alt="Remy Sharp" src={imgStory} sx={{ width: 56, height: 56 }} />
                </StyledWrapperImg>
                <StyledName>phamnhuy.20</StyledName>
            </StyledItem>
            <StyledItem>
                <StyledWrapperImg>
                    <Avatar alt="Remy Sharp" src={imgStory} sx={{ width: 56, height: 56 }} />
                </StyledWrapperImg>
                <StyledName>phamnhuy.20</StyledName>
            </StyledItem>
        </StyleWrapper>
    );
};

export default Story;
