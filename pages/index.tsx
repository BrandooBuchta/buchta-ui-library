import { FC } from "react";
import React from "react";

import ThemeSwitcher from "@/components/ThemeSwitcher";

const Home: FC = () => {
  return (
    <div>
      <p className="text-default-500">Mercedes</p>
      <ThemeSwitcher />
    </div>
  );
};

export default Home;
