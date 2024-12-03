import { FC, InputHTMLAttributes, CSSProperties } from "react";
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: "bordered" | "underlined" | "filled";
    inputSize?: "xs" | "sm" | "md" | "lg" | "xl";
    radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    color?: string;
    error?: boolean;
    helperText?: string;
    label?: string;
    placeholder?: string;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    className?: string;
    style?: CSSProperties;
    rules?: ((value: string) => true | string)[];
    defaultValue?: string;
}
declare const TextInput: FC<TextInputProps>;
export default TextInput;
