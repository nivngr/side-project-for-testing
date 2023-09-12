import React, { FC } from "react";
import { UserPanelProps } from "./types";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MuiIconButton from "@mui/material/IconButton";

const UserPanel: FC<UserPanelProps> = ({}) => {
    return (
        <>
            <MuiIconButton>
                <AccountCircleIcon />
            </MuiIconButton>
        </>
    );
};

export default UserPanel;
