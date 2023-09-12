import { FC, ReactNode } from "react";

export interface TextButtonProps {
    className?: string;
    text?: string;
    buttonVariant?: ButtonVariant;
    disabeled?: boolean;
    children: ReactNode;
    onClick?: () => void;
}

export enum ButtonVariant {
    PRIMARY,
    SECONDARY,
    SIMPLE,
}
