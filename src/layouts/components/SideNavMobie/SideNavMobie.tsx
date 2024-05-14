import Logo from 'src/assets/Logo';
import { StyledWrapper, StyledItemNav, StyledItemNavName } from './SideNavMobie.styled';
import iconAvatarNav from 'src/assets/avatarNav.jpg';
import IconHome from 'src/assets/IconHome';
import IconSearch from 'src/assets/IconSearch';
import IconReel from 'src/assets/IconReel';
import IconCreate from 'src/assets/IconCreate';
import { StyledItemAvatar } from '../SideNav/SideNav.styled';

const SideNavMobie = () => {
    const ListNav = [
        {
            icon: <IconHome />,
            name: 'Home',
        },
        {
            icon: <IconSearch />,
            name: 'Search',
        },

        {
            icon: <IconReel />,
            name: 'Reels',
        },

        {
            icon: <IconCreate />,
            name: 'Create',
        },
    ];

    return (
        <StyledWrapper>
            {ListNav.map((item, index) => {
                return (
                    <StyledItemNav key={index} $active={700}>
                        <div>{item.icon}</div>
                        <StyledItemNavName>{item.name}</StyledItemNavName>
                    </StyledItemNav>
                );
            })}
            <StyledItemNav>
                <div>
                    <StyledItemAvatar src={iconAvatarNav} alt="avatar" />
                </div>
                <StyledItemNavName>Profile</StyledItemNavName>
            </StyledItemNav>
        </StyledWrapper>
    );
};

export default SideNavMobie;
