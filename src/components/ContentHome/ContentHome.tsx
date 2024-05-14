import ContentItem from '../ContentItem';
import { StyledContent, StyledWrapper } from './ContentHome.styled';

const ContentHome = () => {
    return (
        <StyledWrapper>
            <StyledContent>
                <ContentItem />
                <ContentItem />
                <ContentItem />
            </StyledContent>
        </StyledWrapper>
    );
};

export default ContentHome;
