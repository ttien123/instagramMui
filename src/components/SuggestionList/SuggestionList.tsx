import SuggestAccount from '../SuggestAccount/SuggestAccount';
import { StyledHelp, StyledSuggest, StyledSuggestButton, StyledSuggestText } from './SuggestionList.styled';

const SuggestionList = () => {
    return (
        <div style={{ marginTop: 36 }}>
            <SuggestAccount />
            <StyledSuggest>
                <StyledSuggestText>Suggested for you</StyledSuggestText>
                <StyledSuggestButton>See All</StyledSuggestButton>
            </StyledSuggest>
            <div style={{ padding: '8px 0', marginBottom: '8px' }}>
                <SuggestAccount isSuggestion />
                <SuggestAccount isSuggestion />
                <SuggestAccount isSuggestion />
                <SuggestAccount isSuggestion />
                <SuggestAccount isSuggestion />
            </div>
            <StyledHelp>About Help Press API Jobs Privacy Terms Locations Language Meta Verified</StyledHelp>
            <StyledHelp>© 2024 INSTAGRAM FROM META</StyledHelp>
        </div>
    );
};

export default SuggestionList;
