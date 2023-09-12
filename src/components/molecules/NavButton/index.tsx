import React, { FC } from "react";
import { NavButtonProps } from "./types";
import IconButton from "@/components/atoms/IconButton";
import Notification from "@/components/atoms/Notification";

const NavButton: FC<NavButtonProps> = ({
    isActive,
    onClick,
    notificationCount,
    category,
    ...rest
}) => {
    const isActiveSuffix = isActive ? "_active.png" : ".png";
    const categoryString = category;
    const iconPath = "/images/" + categoryString + isActiveSuffix;
    const size = isActive ? 55 : 25;
    const divSize = isActive ? 15 : 20;
    const amount = notificationCount === undefined ? 0 : notificationCount;

    return (
        <div className="max-w-none" {...rest}>
            <div className="z-1 top-3.5 left-9 relative">
                {amount > 0 && <Notification radius={1.1} amount={amount} />}
            </div>
            <IconButton
                width={size}
                height={size}
                icon={iconPath}
                onClick={onClick}
            />
        </div>
    );
};

export default NavButton;
