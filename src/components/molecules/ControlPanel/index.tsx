import React, { FC } from "react";
import { ControlPanelProps } from "./types";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import MuiIconButton from "@mui/material/IconButton";

const ControlPanel: FC<ControlPanelProps> = () => {
    return (
        <div>
            <MuiIconButton>
                <SettingsIcon />
            </MuiIconButton>
            <MuiIconButton>
                <InfoIcon />
            </MuiIconButton>
        </div>
    );
};

export default ControlPanel;
