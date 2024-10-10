import React, { MouseEventHandler, useState, useRef } from "react";
import { motion } from "framer-motion";
import { darken, lighten } from "polished";

interface ButtonProps {
  children: JSX.Element | string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "shadow" | "solid" | "bordered" | "text" | "tonal";
  radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => Promise<void>);
  color?: string;
  className?: string;
  endContent?: JSX.Element;
  startContent?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "shadow",
  onClick,
  color = "#006fee",
  radius = "lg",
  className = "",
  endContent,
  startContent,
}) => {
  const [rippleArray, setRippleArray] = useState<any[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [buttonWidth, setButtonWidth] = useState<number | undefined>(undefined);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = { x, y, size };

    setRippleArray((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRippleArray((prev) => prev.slice(1));
    }, 500);
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      createRipple(event);

      const clickResult = onClick(event);

      if (clickResult instanceof Promise) {
        if (buttonRef.current) {
          // Set button width before loading
          setButtonWidth(buttonRef.current.offsetWidth);
        }
        setIsLoading(true);
        try {
          await clickResult;
        } finally {
          setIsLoading(false);
          // Reset the width when loading finishes
          setButtonWidth(undefined);
        }
      }
    }
  };

  const sizing = () => {
    switch (size) {
      case "xs":
        return "px-[15px] py-[7.5px] text-xs h-fit";
      case "sm":
        return "px-[20px] py-[8px] text-sm h-fit";
      case "md":
        return "px-[25px] py-[8px] text-md h-fit";
      case "lg":
        return "px-[25px] py-[8px] text-lg h-fit";
      case "xl":
        return "px-[25px] py-[10px] text-xl h-fit";
      default:
        return "";
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "shadow":
        return {
          className: "shadow-2xl text-white hover:shadow-lg",
          style: {
            boxShadow: `0 6px 25px -3px ${darken(0.2, color)}, 0 2px 3px -2px ${lighten(0.2, color)}`,
            backgroundColor: color,
          },
        };
      case "solid":
        return {
          className: "text-white hover:opacity-[0.9]",
          style: {
            backgroundColor: color,
          },
        };
      case "bordered":
        return {
          className: "border-2 font-semibold hover:bg-opacity-[0.1]",
          style: {
            borderColor: color,
            color: color,
          },
        };
      case "text":
        return {
          className: "",
          style: {
            color: color,
            backgroundColor: isHovered ? lighten(0.46, color) : "transparent",
          },
        };
      case "tonal":
        return {
          style: {
            backgroundColor: lighten(0.45, color),
            color: color,
            backgroundColorHover: isHovered
              ? lighten(0.4, color)
              : lighten(0.45, color),
          },
        };
      default:
        return {
          className: "",
          style: {},
        };
    }
  };

  const { className: variantClassName, style: variantStyle } =
    getVariantStyles();

  return (
    <button
      ref={buttonRef}
      className={`
        relative
        overflow-hidden
        flex items-center justify-center gap-2
        transition-all
        ${sizing()}
        ${variantClassName}
        rounded-${radius}
        ${className}
      `}
      style={{
        ...variantStyle,
        backgroundColor:
          isHovered && variant === "tonal"
            ? lighten(0.4, color)
            : variantStyle.backgroundColor,
        width: buttonWidth ? `${buttonWidth}px` : "auto", // Preserve width during loading
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {rippleArray.map((ripple, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: 0,
            scale: 2,
          }}
          className="absolute bg-white opacity-50 rounded-full"
          initial={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
            opacity: 0.6,
            scale: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      ))}
      {isLoading ? (
        <motion.i
          animate={{ rotate: 360 }}
          className="mdi mdi-loading"
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      ) : (
        <div className="flex gap-1 justify-center items-center">
          {[startContent, children, endContent]}
        </div>
      )}
    </button>
  );
};

export default Button;
