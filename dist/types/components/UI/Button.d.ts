import { MouseEventHandler, FC, CSSProperties, AriaAttributes } from "react";
interface ButtonProps {
    children?: JSX.Element | string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "shadow" | "solid" | "bordered" | "text" | "tonal";
    radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    onClick?: MouseEventHandler<HTMLButtonElement> | (() => Promise<void>);
    color?: "primary" | "secondary" | string;
    className?: string;
    endContent?: JSX.Element;
    startContent?: JSX.Element;
    style?: CSSProperties;
    "aria-label"?: string;
    isIconOnly?: boolean;
    isDisabled?: boolean;
}
declare const Button: FC<ButtonProps & AriaAttributes>;
export default Button;
