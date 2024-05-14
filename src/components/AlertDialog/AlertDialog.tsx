import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogActions } from '@mui/material';
import Divider from '@mui/material/Divider';

interface Props {
    children: React.ReactNode;
    content: React.ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AlertDialog({ children, content, open, setOpen }: Props) {
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <button onClick={handleClickOpen}>{children}</button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {content}
            </Dialog>
        </React.Fragment>
    );
}
