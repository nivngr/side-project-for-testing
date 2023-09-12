import React, { FC } from "react";
import { HeaderProps } from "./types";
import IconButton from "@/components/atoms/IconButton";
import Divider from "@mui/material/Divider";
import ControlPanel from "@/components/molecules/ControlPanel";
import UserPanel from "@/components/molecules/UserPanel";

const Header: FC<HeaderProps> = () => {
    return (
        <header className="fixed flex flex-row h-[4.5rem] w-full bg-header z-20 px-4">
            <IconButton icon="/images/logo.svg" width={200} height={10} />
            <div className="flex flex-row absolute right-0 items-center">
                <ControlPanel />
                <Divider
                    className="h-[3rem] my-3"
                    variant="inset"
                    orientation="vertical"
                />
                <UserPanel />
            </div>
        </header>
    );
};

export default Header;
