import React, {
  MouseEventHandler,
  useState,
  useRef,
  FC,
  MouseEvent,
  CSSProperties,
  useMemo,
  AriaAttributes,
} from "react";
import { motion } from "framer-motion";
import { darken, lighten } from "polished";

interface ButtonProps {
  children?: JSX.Element | string; // `children` je volitelné, protože u `isIconOnly` může být jen ikonka
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "shadow" | "solid" | "bordered" | "text" | "tonal";
  radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => Promise<void>);
  color?: string;
  className?: string;
  endContent?: JSX.Element;
  startContent?: JSX.Element;
  style?: CSSProperties;
  "aria-label"?: string;
  isIconOnly?: boolean; // Přidána prop isIconOnly
}

const Button: FC<ButtonProps & AriaAttributes> = ({
  children,
  size = "md",
  variant = "shadow",
  onClick,
  color = "#006fee",
  radius = "lg",
  className,
  endContent,
  startContent,
  style: customStyle,
  "aria-label": ariaLabel,
  isIconOnly = false, // Výchozí hodnota
}) => {
  const [rippleArray, setRippleArray] = useState<any[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const variantStyles = useMemo(() => {
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
          },
        };
      default:
        return {
          className: "",
          style: {},
        };
    }
  }, [variant, color, isHovered]);

  const buttonStyles = useMemo(() => {
    if (isIconOnly) {
      return {
        className: "w-[40px] h-[40px] flex items-center justify-center", // Pevný 1:1 poměr stran
        style: {
          padding: 0, // Zrušení vnitřního paddingu
        },
      };
    }

    switch (size) {
      case "xs":
        return { className: "px-[15px] py-[7.5px] text-xs h-fit" };
      case "sm":
        return { className: "px-[20px] py-[8px] text-sm h-fit" };
      case "md":
        return { className: "px-[25px] py-[8px] text-md h-fit" };
      case "lg":
        return { className: "px-[25px] py-[8px] text-lg h-fit" };
      case "xl":
        return { className: "px-[25px] py-[10px] text-xl h-fit" };
      default:
        return { className: "" };
    }
  }, [size, isIconOnly]);

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
      aria-label={ariaLabel || "Button"}
      className={`
        font-semibold
        ${className}
        ${variantStyles.className}
        ${buttonStyles.className}
        rounded-${radius}
        relative
        transition-all
        overflow-hidden
      `}
      style={{
        ...variantStyles.style,
        ...buttonStyles.style,
        ...customStyle,
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
      {isIconOnly ? (
        children
      ) : (
        <div className="flex gap-2">{[startContent, children, endContent]}</div>
      )}
    </button>
  );
};

export default Button;
