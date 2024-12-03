import React, { FC, useEffect, useState } from "react";

import TextInput from "@/components/UI/TextInput";
import Button from "@/components/UI/Button";

interface Option {
  label: string;
  value: string;
}

interface FormData {
  email: string;
  jmenoAPrijmeni: string;
  telefonniCislo: string;
  sluzby: string[]; // Array for selected services
  privacyPolicy: boolean;
}

const OfferForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    jmenoAPrijmeni: "",
    telefonniCislo: "",
    sluzby: [],
    privacyPolicy: false,
  });

  const [options, setOptions] = useState<Option[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Fetching available service options (mocked)
  useEffect(() => {
    const fetchedOptions = [
      { label: "Služba 1", value: "service1" },
      { label: "Služba 2", value: "service2" },
    ];

    setOptions(fetchedOptions);
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle multiple select changes
  const handleSelectChange = (selectedOptions: string[]) => {
    setFormData((prev) => ({
      ...prev,
      sluzby: selectedOptions, // Update selected services
    }));
  };

  // Validation logic
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.jmenoAPrijmeni) newErrors.jmenoAPrijmeni = "Name is required";
    if (!formData.telefonniCislo)
      newErrors.telefonniCislo = "Phone number is required";
    if (formData.sluzby.length === 0)
      newErrors.sluzby = "Please select at least one service";
    if (!formData.privacyPolicy)
      newErrors.privacyPolicy = "You must agree to the terms";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className="flex flex-col gap-4 w-1/2 mx-auto" onSubmit={handleSubmit}>
      {/* Email Input */}
      <TextInput
        color="#006fee"
        error={!!errors.email}
        helperText={errors.email}
        inputSize="md"
        label="Email"
        name="email"
        radius="md"
        value={formData.email}
        variant="bordered"
        onChange={handleChange}
      />

      {/* Name Input */}
      <TextInput
        color="#006fee"
        error={!!errors.jmenoAPrijmeni}
        helperText={errors.jmenoAPrijmeni}
        inputSize="md"
        label="Jméno a příjmení"
        name="jmenoAPrijmeni"
        radius="md"
        value={formData.jmenoAPrijmeni}
        variant="bordered"
        onChange={handleChange}
      />

      {/* Phone Number Input */}
      <TextInput
        color="#006fee"
        error={!!errors.telefonniCislo}
        helperText={errors.telefonniCislo}
        inputSize="md"
        label="Telefonní číslo"
        name="telefonniCislo"
        radius="md"
        value={formData.telefonniCislo}
        variant="bordered"
        onChange={handleChange}
      />

      {/* Multi-select Input */}

      {/* Privacy Policy Checkbox */}
      <label className="flex items-center space-x-2">
        <input
          checked={formData.privacyPolicy}
          className="border border-gray-300 p-2 rounded"
          name="privacyPolicy"
          type="checkbox"
          onChange={handleChange}
        />
        <span>Souhlasím se zpracováním osobních údajů</span>
      </label>
      {errors.privacyPolicy && (
        <p className="text-red-500">{errors.privacyPolicy}</p>
      )}

      {/* Submit Button */}
      <Button color="#ff4081" radius="lg" size="md" variant="solid">
        Zajistěte si svoji exkluzivní nabídku
      </Button>
    </form>
  );
};

export default OfferForm;
