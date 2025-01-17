import { FC } from "react";
import React from "react";
import Link from "next/link";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";
import TextInput from "@/components/UI/TextInput"; // Import the TextInput component
import SelectInput from "@/components/UI/Select"; // Import the SelectInput component
import CookiesBar from "@/components/utils/CookiesBar";
import FAQ from "@/components/mocks/FAQ";

const templates = [
  "click-through-page",
  "landing-page",
  "lead-capture-page",
  "sales-page",
  "squeeze-page",
  "thank-you-page",
];

const Home: FC = () => {
  const callMercedes = async (): Promise<void> => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("mercedes");
        resolve();
      }, 5000);
    });
  };

  return (
    <div className="p-10">
      <CookiesBar />
      <p>Overall TODO: Colors</p>
      <ThemeSwitcher />

      <p className="text-2xl font-bold text-default-900">Button</p>
      {/* Buttons with different sizes */}
      <div className="gap-2 flex items-center mb-5">
        {["xs", "sm", "md", "lg", "xl"].map((e) => (
          <Button
            key={e}
            endContent={<i className="mdi mdi-heart" />}
            size={e as "xs" | "sm" | "md" | "lg" | "xl"}
            onClick={callMercedes}
            color="#e13784"
          >
            Button
          </Button>
        ))}
      </div>

      {/* Buttons with different variants */}
      <div className="gap-2 flex items-center mb-5">
        {["shadow", "solid", "tonal", "bordered", "text"].map((e) => (
          <Button
            key={e}
            color="red"
            variant={e as "shadow" | "solid" | "tonal" | "bordered" | "text"}
            onClick={callMercedes}
          >
            {e}
          </Button>
        ))}
      </div>

      {/* Icon-only buttons */}
      <p className="text-lg font-bold text-default-900">Icon-Only Buttons</p>
      <div className="gap-2 flex items-center mb-5">
        {["xs", "sm", "md", "lg", "xl"].map((e) => (
          <Button
            key={e}
            isIconOnly
            aria-label={`Icon-only button (${e})`}
            color="#007BFF"
            size={e as "xs" | "sm" | "md" | "lg" | "xl"}
            onClick={callMercedes}
          >
            <i className="mdi mdi-magnify" />
          </Button>
        ))}
      </div>

      <div className="gap-2 flex items-center mb-5">
        {["shadow", "solid", "tonal", "bordered", "text"].map((variant) => (
          <Button
            key={variant}
            isIconOnly
            aria-label={`Icon-only button (${variant})`}
            color="#FF5733"
            variant={
              variant as "shadow" | "solid" | "tonal" | "bordered" | "text"
            }
            onClick={callMercedes}
          >
            <i className="mdi mdi-heart" />
          </Button>
        ))}
      </div>

      <p className="text-2xl font-bold text-default-900">Card</p>
      {/* Card examples */}
      <div className="flex gap-5 my-3">
        <Card>Mercedes</Card>
      </div>

      {/* Links */}
      <div className="flex flex-col">
        {templates.map((e) => (
          <Link key={e} href={`/templates/${e}`}>
            {e}
          </Link>
        ))}
      </div>

      <p className="text-2xl font-bold text-default-900">TextInput</p>
      {/* Render TextInput component with different sizes */}
      <div className="gap-2 flex flex-col mb-5">
        {["xs", "sm", "md", "lg", "xl"].map((size) => (
          <TextInput
            key={size}
            inputSize={size as "xs" | "sm" | "md" | "lg" | "xl"}
            label={`Input (${size})`}
            placeholder={`Size ${size}`}
            rules={[
              (value) => !!value || "Email is required.",
              (value) =>
                /\S+@\S+\.\S+/.test(value) || "Please enter a valid email.",
            ]}
            onChange={(event) => console.log(event.target.value)} // Logs the value like a normal input
          />
        ))}
      </div>

      {/* Render TextInput with different variants */}
      <div className="gap-2 flex flex-col mb-5">
        {["bordered", "underlined", "filled"].map((variant) => (
          <TextInput
            key={variant}
            helperText="This is helper text"
            label={`Input (${variant})`}
            placeholder={`Variant ${variant}`}
            variant={variant as "bordered" | "underlined" | "filled"}
          />
        ))}
      </div>

      <p className="text-2xl font-bold text-default-900">SelectInput</p>
      {/* Example usage of SelectInput component */}
      <div className="gap-2 flex flex-col mb-5">
        {["xs", "sm", "md", "lg", "xl"].map((size) => (
          <SelectInput
            key={size}
            inputSize={size as "xs" | "sm" | "md" | "lg" | "xl"}
            label={`Select (${size})`}
            options={[
              { label: "Landing Page", value: "landing-page" },
              { label: "Sales Page", value: "sales-page" },
              { label: "Thank You Page", value: "thank-you-page" },
            ]}
          />
        ))}
      </div>

      {/* Render SelectInput with different variants */}
      <div className="gap-2 flex flex-col mb-5">
        {["bordered", "underlined", "filled"].map((variant) => (
          <SelectInput
            key={variant}
            multiple
            label={`Select (${variant})`}
            options={[
              { label: "Option 1", value: "1" },
              { label: "Option 2", value: "2" },
              { label: "Option 3", value: "3" },
            ]}
            variant={variant as "bordered" | "underlined" | "filled"}
          />
        ))}
      </div>

      <div>
        <h1>Accordion</h1>
        <FAQ />
      </div>

      <p>TODO: Create a variant: like shadow, minimalistic, ...</p>
    </div>
  );
};

export default Home;
