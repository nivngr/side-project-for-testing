import React, { FC } from "react";
import { CampaignCardProps, CampaignType } from "./types";
import Image from "next/image";
import Card from "@mui/material/Card";
import TextButton from "@/components/atoms/TextButton";
import { ButtonVariant } from "@/components/atoms/TextButton/types";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Notification from "@/components/atoms/Notification";

const CampaignCard: FC<CampaignCardProps> = ({
    name,
    campaignType,
    date,
    isLive,
    isOpen,
    notificationCount,
    className,
}) => {
    const notificationAmount =
        notificationCount === undefined ? 0 : notificationCount;

    return (
        <Card
            sx={{
                display: "relative",
                height: "12.25rem",
                width: "23.75rem",
                border: "0.01rem solid grey",
            }}
            className={`relative ${className}`}
        >
            <Notification
                amount={notificationAmount}
                radius={2}
                className="absolute right-[-1rem] top-[-1rem] z-10 "
            />
            <Image
                src="/images/magic_wand_icon.png"
                alt="image"
                width={40}
                height={0}
                className="absolute top-[2.1rem] left-[2.1rem]"
            />
            <Typography className="text-lg absolute left-[7rem] top-[2rem]">
                {name}
            </Typography>
            <Typography className="text-slate-400 text-sm absolute left-[7rem] top-[3.8rem]">
                {date.toDateString()}
            </Typography>
            <IconButton
                aria-label="settings"
                className="absolute right-[2rem] top-[2rem]"
            >
                <MoreVertIcon fontSize="large" />
            </IconButton>
            <TextButton
                buttonVariant={ButtonVariant.SIMPLE}
                className="absolute right-[1.6rem] bottom-[1.2rem]"
            >
                View {">"}
            </TextButton>
            <IconButton className="absolute bottom-[0.7rem] left-[7rem] ">
                {isOpen ? (
                    <LockOpenIcon fontSize="large" />
                ) : (
                    <LockIcon fontSize="large" />
                )}
            </IconButton>
            {isLive ? (
                <Typography
                    className="text-white bg-green-500 w-[3.5rem] h-[2rem] rounded absolute bottom-[1.3rem] left-[12rem]"
                    sx={{ textAlign: "center" }}
                >
                    Live
                </Typography>
            ) : (
                <></>
            )}
            <Typography className="text-white bg-green-400 text-xs/5 w-[5rem] rounded absolute bottom-[1.5rem] left-[1rem]">
                MESSAGES
            </Typography>
        </Card>
    );
};

export default CampaignCard;
