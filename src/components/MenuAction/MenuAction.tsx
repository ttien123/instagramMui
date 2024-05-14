import IconSetting from 'src/assets/IconSetting';
import { StyleItemAction, StyleItemIcon, StyleUnderline, StyleWrapper } from './MenuAction.styled';
import IconSaved from 'src/assets/IconSaved';
import IconActivity from 'src/assets/IconActivity';
import IconAppearance from 'src/assets/IconAppearance';
import IconReport from 'src/assets/IconReport';
import AlertDialog from '../AlertDialog';
import SwitchAccount from '../SwitchAccount';
import { useState } from 'react';

const MenuAction = () => {
    const [openSwitchAccount, setOpenSwitchAccount] = useState(false);

    const listAction = [
        {
            icon: <IconSetting />,
            text: 'Settings',
        },
        {
            icon: <IconActivity />,
            text: 'Your activity',
        },
        {
            icon: <IconSaved />,
            text: 'Saved',
        },
        {
            icon: <IconAppearance />,
            text: 'Switch appearance',
        },
        {
            icon: <IconReport />,
            text: 'Report a problem',
        },
    ];
    return (
        <StyleWrapper>
            <div style={{ paddingBottom: 8 }}>
                {listAction.map((item, index) => (
                    <StyleItemAction key={index}>
                        <StyleItemIcon>{item.icon}</StyleItemIcon>
                        <div>{item.text}</div>
                    </StyleItemAction>
                ))}
            </div>
            <StyleUnderline></StyleUnderline>
            <div style={{ paddingTop: 8 }}>
                <AlertDialog
                    open={openSwitchAccount}
                    setOpen={setOpenSwitchAccount}
                    content={<SwitchAccount setOpen={setOpenSwitchAccount} />}
                >
                    <StyleItemAction>
                        <div style={{ fontSize: 16 }}>Switch accounts</div>
                    </StyleItemAction>
                </AlertDialog>
                <StyleItemAction>
                    <div>Log out</div>
                </StyleItemAction>
            </div>
        </StyleWrapper>
    );
};

export default MenuAction;
