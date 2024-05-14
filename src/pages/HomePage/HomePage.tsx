import Story from 'src/components/Story';
import { StyleMain, StyleSuggestion, StyleWrapper } from './HomePage.styled';
import ContentHome from 'src/components/ContentHome';
import SuggestionList from 'src/components/SuggestionList';

const HomePage = () => {
    return (
        <StyleWrapper>
            <StyleMain>
                <Story />
                <ContentHome />
            </StyleMain>
            <StyleSuggestion>
                <SuggestionList />
            </StyleSuggestion>
        </StyleWrapper>
    );
};

export default HomePage;
