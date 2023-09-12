import React, { FC } from "react";
import { NotificationProps } from "./types";

const Notification: FC<NotificationProps> = ({
    className,
    radius,
    amount,
    ...rest
}) => {
    const circleStyle = {
        width: `${radius}rem`,
        height: `${radius}rem`,
    };

    const textSize = radius * 0.6;
    const textStyle = {
        fontSize: `${textSize}rem`,
    };

    return (
        <div
            className={`bg-notification rounded-full flex justify-center items-center ${className}`}
            style={circleStyle}
        >
            <span
                className="text-white text-center"
                style={textStyle}
                {...rest}
            >
                {amount}
            </span>
        </div>
    );
};

export default Notification;
