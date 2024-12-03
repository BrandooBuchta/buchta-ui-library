import React, {
  FC,
  InputHTMLAttributes,
  useState,
  ChangeEvent,
  CSSProperties,
} from "react";

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
  rules?: ((value: string) => true | string)[]; // Validation rules array
  defaultValue?: string;
}

const TextInput: FC<TextInputProps> = ({
  variant = "bordered",
  inputSize = "md",
  radius = "md",
  color = "#006fee",
  error = false,
  helperText,
  label,
  startIcon,
  endIcon,
  className,
  style: customStyle,
  rules = [],
  defaultValue,
  onChange, // Accept external onChange handler
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue || ""); // Track the input value
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Track validation error message

  // Validation function to handle rules
  const validateAndSetErrorMessage = (value: string) => {
    for (let rule of rules) {
      const result = rule(value);

      if (result !== true) {
        setErrorMessage(result); // Set the first validation error

        return;
      }
    }
    setErrorMessage(null); // Clear errors if all rules pass
  };

  // Handle input changes and apply validation rules
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setInputValue(value); // Update local state with the new value

    validateAndSetErrorMessage(value); // Validate and set any error message

    // Call external onChange if provided, passing the original event
    if (onChange) {
      onChange(event);
    }
  };

  const inputStyles = `border-[1.35px] ${
    error || errorMessage ? "border-red-500" : "border-gray-300"
  } focus:border-${color} focus:ring-${color}`;

  const sizing = () => {
    switch (inputSize) {
      case "xs":
        return "px-2 py-1 text-xs";
      case "sm":
        return "px-3 py-2 text-sm";
      case "md":
        return "px-4 py-2 text-md";
      case "lg":
        return "px-5 py-3 text-lg";
      case "xl":
        return "px-6 py-3 text-xl";
      default:
        return "";
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          className={`mb-1 ml-2 text-sm font-semibold ${
            error || errorMessage ? "text-red-500" : "text-gray-700"
          }`}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {startIcon && <span className="absolute left-2">{startIcon}</span>}
        <input
          className={`
            w-full
            ${inputStyles}
            ${sizing()}
            rounded-${radius}
            outline-none
            transition-all
            pl-${startIcon ? 8 : 4} pr-${endIcon ? 8 : 4}
            ${error || errorMessage ? "text-red-500" : ""}
          `}
          style={customStyle}
          value={inputValue} // Controlled value
          onChange={handleInputChange} // Use custom handler
          {...props}
        />
        {endIcon && <span className="absolute right-2">{endIcon}</span>}
      </div>
      {errorMessage && (
        <span className="text-xs text-red-500 mt-1 ml-2">{errorMessage}</span>
      )}
      {!errorMessage && helperText && (
        <span
          className={`mt-1 ml-2 text-xs ${
            error || errorMessage ? "text-red-500" : "text-gray-500"
          }`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextInput;
