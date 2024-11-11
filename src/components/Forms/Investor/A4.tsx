import React, { useState } from "react";

type FormData = {
  parentCompany: string;
  investmentDivision: string;
  primaryContact: string;
  positionTitle: string;
  emailPhone: string;
  strategicObjectives: {
    financialReturns: boolean;
    technologyAccess: boolean;
    marketDevelopment: boolean;
    environmentalImpact: boolean;
    other: string;
  };
  investmentParameters: {
    size: string;
    stagePreference: string;
  };
  strategicAlignmentRequirements: string;
  unSdgRequirements: string;
  corporateEsgGoals: string;
};

const A4Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    parentCompany: "",
    investmentDivision: "",
    primaryContact: "",
    positionTitle: "",
    emailPhone: "",
    strategicObjectives: {
      financialReturns: false,
      technologyAccess: false,
      marketDevelopment: false,
      environmentalImpact: false,
      other: "",
    },
    investmentParameters: {
      size: "",
      stagePreference: "",
    },
    strategicAlignmentRequirements: "",
    unSdgRequirements: "",
    corporateEsgGoals: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Check if e.target is an HTMLInputElement and of type "checkbox"
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      const checked = e.target.checked; // Now TypeScript knows `checked` exists
      setFormData((prevState) => ({
        ...prevState,
        strategicObjectives: {
          ...prevState.strategicObjectives,
          [name]: checked,
        },
      }));
    } else {
      // Otherwise handle as a text input or textarea
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      investmentParameters: {
        ...prevState.investmentParameters,
        [name]: value,
      },
    }));
  };

  return (
    <form className="p-4 w-full mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        Corporate Investment Arm Registration
      </h2>

      <div className="mb-4">
        <label className="block font-semibold">Parent Company:</label>
        <input
          type="text"
          name="parentCompany"
          value={formData.parentCompany}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Investment Division:</label>
        <input
          type="text"
          name="investmentDivision"
          value={formData.investmentDivision}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Primary Contact:</label>
        <input
          type="text"
          name="primaryContact"
          value={formData.primaryContact}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Position/Title:</label>
        <input
          type="text"
          name="positionTitle"
          value={formData.positionTitle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Email/Phone:</label>
        <input
          type="text"
          name="emailPhone"
          value={formData.emailPhone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Strategic Objectives:</label>
        <div className="space-y-2">
          {[
            "financialReturns",
            "technologyAccess",
            "marketDevelopment",
            "environmentalImpact",
          ].map((objective) => (
            <label key={objective} className="flex items-center">
              <input
                type="checkbox"
                name={objective}
                checked={Boolean(
                  formData.strategicObjectives[
                    objective as keyof typeof formData.strategicObjectives
                  ]
                )}
                onChange={handleChange}
                className="mr-2"
              />
              {objective
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </label>
          ))}
          <label className="block">
            <span>Other:</span>
            <input
              type="text"
              name="other"
              value={formData.strategicObjectives.other}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Investment Parameters:</label>
        <label className="block font-semibold mt-2">Typical Size (USD):</label>
        {["<$1M", "$1M-$5M", ">$5M"].map((size) => (
          <label key={size} className="flex items-center">
            <input
              type="radio"
              name="size"
              value={size}
              checked={formData.investmentParameters.size === size}
              onChange={handleRadioChange}
              className="mr-2"
            />
            {size}
          </label>
        ))}

        <label className="block font-semibold mt-4">Stage Preference:</label>
        <input
          type="text"
          name="stagePreference"
          value={formData.investmentParameters.stagePreference}
          onChange={handleRadioChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">
          Strategic Alignment Requirements:
        </label>
        <textarea
          name="strategicAlignmentRequirements"
          value={formData.strategicAlignmentRequirements}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">UN SDG Requirements:</label>
        <textarea
          name="unSdgRequirements"
          value={formData.unSdgRequirements}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Corporate ESG Goals:</label>
        <textarea
          name="corporateEsgGoals"
          value={formData.corporateEsgGoals}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default A4Form;
