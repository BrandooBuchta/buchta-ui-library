import React from "react";

import SmallProfile from "./SmallProfile";

export interface Reference {
  author: string;
  company: string;
  href: string;
  text: string;
  avatar: string;
  icon?: string | JSX.Element;
}

interface ReferenceCardProps {
  reference: Reference;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({ reference }) => {
  return (
    <div className="bg-neutral-100 rounded-xl shadow-xl p-5 w-full">
      <SmallProfile
        avatar={reference.avatar}
        fallback={reference.author[0]}
        icon={<i className={`mdi ${reference.icon} text-sky-600`} />}
        subtitle={reference.author}
        title={reference.company}
      />
      <button className="mt-3 text-left">{reference.text}</button>
    </div>
  );
};

export default ReferenceCard;
