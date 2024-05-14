import Logo from 'src/assets/Logo';
import {
    StyledWrapper,
    StyledLogo,
    StyledItemNav,
    StyledItemNavName,
    StyledItemAvatar,
    StyledLogoPc,
    StyledLogoMobi,
} from './SideNav.styled';
import iconAvatarNav from 'src/assets/avatarNav.jpg';
import IconHome from 'src/assets/IconHome';
import IconSearch from 'src/assets/IconSearch';
import IconExplore from 'src/assets/IconExplore';
import IconReel from 'src/assets/IconReel';
import IconMessage from 'src/assets/IconMessage';
import IconCreate from 'src/assets/IconCreate';
import IconNotification from 'src/assets/IconNotification';
import IconThreads from 'src/assets/IconThreads';
import IconMenu from 'src/assets/IconMenu';
import IconLogoMobi from 'src/assets/IconLogoMobi';
import PopoverCst from 'src/components/Popover/Popover';
import MenuAction from 'src/components/MenuAction';

const SideNav = () => {
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
            icon: <IconExplore />,
            name: 'Explore',
        },
        {
            icon: <IconReel />,
            name: 'Reels',
        },
        {
            icon: <IconMessage />,
            name: 'Messages',
        },
        {
            icon: <IconNotification />,
            name: 'Notifications',
        },
        {
            icon: <IconCreate />,
            name: 'Create',
        },
    ];

    return (
        <StyledWrapper>
            <div>
                <StyledLogo>
                    <StyledLogoPc style={{ marginTop: 7 }}>
                        <Logo />
                    </StyledLogoPc>
                    <StyledLogoMobi style={{ marginTop: 7 }}>
                        <IconLogoMobi />
                    </StyledLogoMobi>
                </StyledLogo>
                <div>
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
                </div>
            </div>
            <div>
                <StyledItemNav>
                    <div>{<IconThreads />}</div>
                    <StyledItemNavName>Threads</StyledItemNavName>
                </StyledItemNav>
                <PopoverCst
                    buttonOpen={
                        <StyledItemNav>
                            <div>{<IconMenu />}</div>
                            <StyledItemNavName>More</StyledItemNavName>
                        </StyledItemNav>
                    }
                    content={<MenuAction />}
                />
            </div>
        </StyledWrapper>
    );
};

export default SideNav;
