import postImg from 'src/assets/imgPost.jpg';
import { Avatar, Divider } from '@mui/material';
import IconDot from 'src/assets/IconDot';
import avatar from 'src/assets/imgStory.jpg';
import {
    StyedInputComment,
    StyedTotalLike,
    StyleBoxContent,
    StyledBoxComment,
    StyledBoxCommentAll,
    StyledBoxReact,
    StyledImgPost,
    StyledInfo,
    StyledInfoIcon,
    StyledInfoIconName,
    StyledListReact,
} from './ContentItem.styled';
import IconHeart from 'src/assets/IconHeart';
import IconComment from 'src/assets/IconComment';
import IconShare from 'src/assets/IconShare';
import IconSave from 'src/assets/IconSave';
import IconSmile from 'src/assets/IconSmile';
const ContentItem = () => {
    return (
        <StyleBoxContent>
            <StyledInfo>
                <StyledInfoIcon>
                    <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 32, height: 32 }} />
                    <StyledInfoIconName>zy.phwg</StyledInfoIconName>
                    <span style={{ margin: '0 4px', color: '#737373' }}>•</span>
                    <div style={{ color: '#737373' }}>1d</div>
                </StyledInfoIcon>
                <div>
                    <IconDot />
                </div>
            </StyledInfo>
            <div>
                <StyledImgPost src={postImg} alt="img" />
            </div>
            <StyledBoxCommentAll>
                <StyledBoxReact>
                    <StyledListReact>
                        <button style={{ padding: 8 }}>
                            <IconHeart />
                        </button>
                        <button style={{ padding: 8 }}>
                            <IconComment />
                        </button>
                        <button style={{ padding: 8 }}>
                            <IconShare />
                        </button>
                    </StyledListReact>
                    <div style={{ marginRight: -8 }}>
                        <button style={{ padding: 8 }}>
                            <IconSave />
                        </button>
                    </div>
                </StyledBoxReact>
                <StyedTotalLike>54 likes</StyedTotalLike>
                <StyledBoxComment>
                    <StyedInputComment placeholder="Add a comment..." />
                    <div>
                        <IconSmile />
                    </div>
                </StyledBoxComment>
            </StyledBoxCommentAll>
            <Divider component="div" />
        </StyleBoxContent>
    );
};

export default ContentItem;
