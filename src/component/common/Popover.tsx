import * as React from 'react';
import {ReactNode} from 'react';
import {Popover as MuiPopover} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type propsType = {
    children: ReactNode,
    content: ReactNode
}

const Popover: React.FC<propsType> = ({
                                          children,
                                          content,
                                      }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

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
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                {children}
            </Button>
            <MuiPopover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{p: 2}}>{content}</Typography>
            </MuiPopover>
        </div>
    );
}

export default Popover;