import React, { FC, useState, CSSProperties, useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion

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

const Select: FC<SelectProps> = ({
  options,
  label,
  multiple = false,
  helperText,
  error = false,
  variant = "bordered",
  color = "#006fee",
  inputSize = "md",
  radius = "md",
  className,
  style,
  placeholder,
  onChange, // Přidání onChange do props
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Handle selection of an option
  const handleSelectOption = (value: string) => {
    let updatedValues: string[] = [];

    if (multiple) {
      if (selectedValues.includes(value)) {
        updatedValues = selectedValues.filter((item) => item !== value);
      } else {
        updatedValues = [...selectedValues, value];
      }
      setSelectedValues(updatedValues);
      onChange &&
        onChange(options.filter((opt) => updatedValues.includes(opt.value))); // Emitovat pole options
      setIsOpen(false);
    } else {
      updatedValues = [value];
      setSelectedValues(updatedValues);
      onChange &&
        onChange(options.find((opt) => opt.value === value) as Option); // Emitovat jednu option
      setIsOpen(true);
    }
  };

  const isSelected = (value: string) => selectedValues.includes(value);

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

  const variantStyles = () => {
    switch (variant) {
      case "bordered":
        return `border-[1.35px] ${
          error ? "border-red-500" : "border-gray-300"
        } focus:border-${color} focus:ring-${color}`;
      case "underlined":
        return `border-b-[1.35px] rounded-none ${
          error ? "border-red-500" : "border-gray-300"
        } focus:border-${color} focus:ring-${color}`;
      case "filled":
        return `${
          error ? "bg-red-50" : "bg-gray-100"
        } focus:bg-white border-none`;
      default:
        return "";
    }
  };

  // Click outside logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Animace
  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className={`relative flex flex-col ${className}`}>
      {label && (
        <label
          className={`mb-1 ml-2 text-sm font-semibold ${
            error ? "text-red-500" : "text-gray-700"
          }`}
        >
          {label}
        </label>
      )}
      {/* eslint-disable */}
      <div
        ref={dropdownRef}
        className={`relative w-full cursor-pointer rounded-${radius} ${variantStyles()} ${sizing()}`}
        style={style}
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-between pl-2 pr-2">
          <span className={`text-${error ? "red-500" : "gray-700"}`}>
            {selectedValues.length > 0
              ? selectedValues
                  .map((val) => options.find((opt) => opt.value === val)?.label)
                  .join(", ")
              : placeholder}
          </span>
          <i
            className={`mdi mdi-chevron-${isOpen ? "up" : "down"} text-${error ? "red" : "gray"}-900`}
          />
        </div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md mt-[15px] overflow-hidden"
          initial="closed"
          variants={dropdownVariants}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`p-2 hover:bg-gray-200 cursor-pointer ${
                isSelected(option.value) ? "bg-blue-100" : ""
              }`}
              onClick={() => handleSelectOption(option.value)}
            >
              {option.label}
            </div>
          ))}
        </motion.div>
      </div>
      {!error && helperText && (
        <span className="mt-1 ml-2 text-xs text-gray-500">{helperText}</span>
      )}
    </div>
  );
};

export default Select;
