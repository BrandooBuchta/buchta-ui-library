import { FC, CSSProperties } from "react";
interface Option {
    label: string;
    value: string;
}
interface SelectProps {
    options: Option[];
    label?: string;
    placeholder?: string;
    multiple?: boolean;
    helperText?: string;
    error?: boolean;
    variant?: "bordered" | "underlined" | "filled";
    inputSize?: "xs" | "sm" | "md" | "lg" | "xl";
    radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    color?: string;
    className?: string;
    style?: CSSProperties;
    onChange?: (value: Option | Option[]) => void;
}
declare const Select: FC<SelectProps>;
export default Select;
