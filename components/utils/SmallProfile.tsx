import React from "react";

interface SmallProfileProps {
  title: string;
  subtitle: string;
  avatar: string | JSX.Element;
  icon?: JSX.Element;
  fallback: string;
}

const SmallProfile: React.FC<SmallProfileProps> = ({
  title,
  subtitle,
  avatar,
  fallback,
  icon,
}) => {
  return (
    <div className="flex items-center">
      <div className="h-fit w-fit gradient-border ig-gradient rounded-full p-1">
        {typeof avatar === "string" ? (
          <img
            alt={fallback}
            className="bg-white rounded-full w-[50px] h-[50px] shadow-md"
            src={avatar}
          />
        ) : (
          avatar
        )}
      </div>
      <div className="flex flex-col ml-3">
        <span className="text-lg font-bold">
          {title} {icon}
        </span>
        <span className="text-neutral-600 text-sm">{subtitle}</span>
      </div>
    </div>
  );
};

export default SmallProfile;
