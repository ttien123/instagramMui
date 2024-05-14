import IconArrowDown from 'src/assets/IconArrowDown';
import IconCreate from 'src/assets/IconCreate';
import IconHeart from 'src/assets/IconHeart';
import { StyledFeature, StyledLogo, StyledWrapper } from './HeaderMobie.styled';
import Logo from 'src/assets/Logo';

const HeaderMobie = () => {
    return (
        <StyledWrapper>
            <StyledLogo>
                <Logo />
                <IconArrowDown />
            </StyledLogo>
            <StyledFeature>
                <button style={{ padding: 12 }}>
                    <IconCreate />
                </button>
                <button>
                    <IconHeart />
                </button>
            </StyledFeature>
        </StyledWrapper>
    );
};

export default HeaderMobie;
