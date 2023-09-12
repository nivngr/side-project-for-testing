import React, { FC } from "react";
import { ButtonVariant, TextButtonProps } from "./types";
import Button from "@mui/material/Button";

const TextButton: FC<TextButtonProps> = ({
    text,
    buttonVariant,
    onClick,
    disabeled,
    children,
    className,
}) => {
    const basicButtonStyles = {
        textTransform: "none",
        color: "white",
        border: "none",
        backgroundColor: "none",
        borderColor: "none",
    };

    const styleButton = () => {
        const primaryColor: string = "#A54CFF";
        const disabeledColor: string = "#808080";
        const color = disabeled ? disabeledColor : primaryColor;

        switch (buttonVariant) {
            case ButtonVariant.SIMPLE: {
                basicButtonStyles.color = color;
                break;
            }

            case ButtonVariant.PRIMARY: {
                basicButtonStyles.backgroundColor = color;
                break;
            }

            case ButtonVariant.SECONDARY: {
                basicButtonStyles.color = color;
                basicButtonStyles.border = "1px solid";
                break;
            }
        }
    };

    return (
        <>
            {styleButton()}
            <Button
                onClick={onClick}
                style={basicButtonStyles}
                className={`w-fit font-poppins ${className}`}
            >
                {children}
            </Button>
        </>
    );
};

export default TextButton;
