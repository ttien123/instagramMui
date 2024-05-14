import * as React from 'react';
import Popover from '@mui/material/Popover';
import { useMediaQuery } from '@mui/material';
import { device } from '../media_query';

interface Props {
    buttonOpen: React.ReactNode;
    content: React.ReactNode;
}

export default function PopoverCst({ buttonOpen, content }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const isMobi = useMediaQuery(`(${device.breakpoint_ultra_tablet_max})`);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <button aria-describedby={id} onClick={handleClick}>
                {buttonOpen}
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: `${isMobi ? 'bottom' : 'top'}`,
                    horizontal: `${isMobi ? 'right' : 'left'}`,
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {content}
            </Popover>
        </div>
    );
}
