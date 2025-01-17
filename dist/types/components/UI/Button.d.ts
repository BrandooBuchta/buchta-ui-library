import { FC, MouseEvent, CSSProperties } from "react";
interface ButtonProps {
    children?: JSX.Element | string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "shadow" | "solid" | "bordered" | "text" | "tonal";
    radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    color?: "primary" | "secondary" | string;
    className?: string;
    endContent?: JSX.Element;
    startContent?: JSX.Element;
    style?: CSSProperties;
    isIconOnly?: boolean;
    isDisabled?: boolean;
}
declare const Button: FC<ButtonProps>;
export default Button;
