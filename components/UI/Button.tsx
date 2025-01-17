import React, {
  FC,
  MouseEvent,
  CSSProperties,
  useState,
  useRef,
  useMemo,
} from "react";
import { motion } from "framer-motion";

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

const Button: FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "shadow",
  onClick,
  color = "primary",
  radius = "lg",
  className = "",
  endContent,
  startContent,
  style: customStyle,
  isIconOnly = false,
  isDisabled = false,
}) => {
  const [rippleArray, setRippleArray] = useState<any[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const resolveColor = (color: string) => {
    if (color === "primary")
      return "bg-primary text-white hover:bg-primary-dark";
    if (color === "secondary")
      return "bg-secondary text-white hover:bg-secondary-dark";
    if (/^[a-zA-Z]+$/.test(color))
      return `bg-${color}-500 text-white hover:bg-${color}-600`;
    if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) return "";

    return "bg-gray-500 text-white hover:bg-gray-600";
  };

  const getStyle = (color: string) => {
    if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) {
      return { backgroundColor: color, color: "#fff" };
    }

    return {};
  };

  const getShadowStyle = (color: string): CSSProperties => {
    if (/^[a-zA-Z]+$/.test(color)) {
      return {
        boxShadow: `0px 4px 10px rgba(var(--tw-color-${color}-rgb, 0, 0, 0), 0.5)`,
      };
    } else if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) {
      const hexToRgb = (hex: string): string => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
      };
      return {
        boxShadow: `0px 4px 10px rgba(${hexToRgb(color)}, 0.5)`,
      };
    }
    return {};
  };

  const colorClass = resolveColor(color);
  const inlineStyle = getStyle(color);
  const inlineShadowStyle = variant === "shadow" ? getShadowStyle(color) : {};

  const buttonStyles = useMemo(() => {
    if (isIconOnly) {
      return {
        className: "w-[40px] h-[40px] flex items-center justify-center",
      };
    }
    switch (size) {
      case "xs":
        return { className: "px-[10px] py-[5px] text-xs" };
      case "sm":
        return { className: "px-[15px] py-[7px] text-sm" };
      case "md":
        return { className: "px-[20px] py-[10px] text-md" };
      case "lg":
        return { className: "px-[25px] py-[12px] text-lg" };
      case "xl":
        return { className: "px-[30px] py-[15px] text-xl" };
      default:
        return { className: "" };
    }
  }, [size, isIconOnly]);

  const variantStyles = useMemo(() => {
    switch (variant) {
      case "shadow":
        return `hover:shadow-md transition-shadow`;
      case "solid":
        return "hover:opacity-90";
      case "bordered":
        return "border-2 hover:opacity-90";
      case "text":
        return "hover:underline";
      case "tonal":
        return "bg-opacity-75";
      default:
        return "";
    }
  }, [variant]);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
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

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    if (onClick) onClick(event);
  };

  return (
    <button
      ref={buttonRef}
      className={`rounded-${radius} relative overflow-hidden transition-all font-semibold ${className} ${colorClass} ${buttonStyles.className} ${variantStyles}`}
      disabled={isDisabled}
      style={{ ...customStyle, ...inlineStyle, ...inlineShadowStyle }}
      onClick={handleClick}
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
      {isIconOnly ? (
        children
      ) : (
        <div className="flex gap-2 items-center">
          {startContent}
          {children}
          {endContent}
        </div>
      )}
    </button>
  );
};

export default Button;
