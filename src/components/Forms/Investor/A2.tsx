import React, { useState } from "react";

interface A2FormData {
  category: string;
  subCategory: string;
  familyOfficeName: string;
  contactPerson: string;
  position: string;
  emailOrPhone: string;
  investmentApproach: string;
  investmentFocus: string;
  investmentRange: string;
  investmentTimeline: string;
  impactRequirements: string;
  registrationDate: string;
  howDidYouHear: string;
  interestInJamaicaPilot: string;
  platformAccessRequirements: string;
  additionalComments: string;
}

const A2 = () => {
  const [formData, setFormData] = useState<A2FormData>({
    category: "Investor",
    subCategory: "A2",
    familyOfficeName: "",
    contactPerson: "",
    position: "",
    emailOrPhone: "",
    investmentApproach: "",
    investmentFocus: "",
    investmentRange: "",
    investmentTimeline: "",
    impactRequirements: "",
    registrationDate: "",
    howDidYouHear: "",
    interestInJamaicaPilot: "",
    platformAccessRequirements: "",
    additionalComments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        category: "Investor",
        subCategory: "A2",
        familyOfficeName: "",
        contactPerson: "",
        position: "",
        emailOrPhone: "",
        investmentApproach: "",
        investmentFocus: "",
        investmentRange: "",
        investmentTimeline: "",
        impactRequirements: "",
        registrationDate: "",
        howDidYouHear: "",
        interestInJamaicaPilot: "",
        platformAccessRequirements: "",
        additionalComments: "",
      });
    } else {
      alert("Error submitting form: " + result.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 w-full mx-auto bg-white rounded shadow text-black"
    >
      <label className="block font-semibold mb-3">
        Family Office Name:
        <input
          type="text"
          name="familyOfficeName"
          value={formData.familyOfficeName}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>
      <label className="block font-semibold mb-3">
        Contact Person:
        <input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>
      <label className="block font-semibold mb-3">
        Position/Title:
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>
      <label className="block font-semibold mb-3">
        Email/Phone:
        <input
          type="text"
          name="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Investment Approach */}
      <label className="block font-semibold mb-3">
        Investment Approach:
        <select
          name="investmentApproach"
          value={formData.investmentApproach}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Approach</option>
          <option value="Direct Investment">Direct Investment</option>
          <option value="Fund Investment">Fund Investment</option>
          <option value="Blended Approach">Blended Approach</option>
        </select>
      </label>

      {/* Investment Focus */}
      <label className="block font-semibold mb-3">
        Investment Focus:
        <select
          name="investmentFocus"
          value={formData.investmentFocus}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Focus</option>
          <option value="Environmental Impact">Environmental Impact</option>
          <option value="Financial Returns">Financial Returns</option>
          <option value="Regional Development">Regional Development</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Investment Range */}
      <label className="block font-semibold mb-3">
        Investment Range (USD):
        <select
          name="investmentRange"
          value={formData.investmentRange}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Range</option>
          <option value="<200K">{"<200K"}</option>
          <option value="$200K-$1M">$200K-$1M</option>
          <option value=">$1M">{"> $1M"}</option>
        </select>
      </label>

      {/* Investment Timeline */}
      <label className="block font-semibold mb-3">
        Investment Timeline:
        <input
          type="text"
          name="investmentTimeline"
          value={formData.investmentTimeline}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Impact Requirements */}
      <label className="block font-semibold mb-3">
        Impact Requirements:
        <input
          type="text"
          name="impactRequirements"
          value={formData.impactRequirements}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Common Fields for All Forms */}
      <div className="mt-4">
        <label className="block font-semibold mb-3">
          Registration Date:
          <input
            type="date"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>

        <label className="block font-semibold mb-3">
          How did you hear about us?:
          <input
            type="text"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>

        {/* Interest in Jamaica Pilot */}
        <div className="block mt-2">
          <label className="block font-semibold mb-3">
            Interest in Jamaica Pilot:
          </label>
          {["Yes", "No", "Maybe"].map((option) => (
            <label className="block font-semibold mb-3" key={option}>
              <input
                type="radio"
                name="interestInJamaicaPilot"
                value={option}
                checked={formData.interestInJamaicaPilot === option}
                onChange={handleRadioChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        <label className="block font-semibold mb-3">
          Platform Access Requirements:
          <textarea
            name="platformAccessRequirements"
            value={formData.platformAccessRequirements}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>

        <label className="block font-semibold mb-3">
          Additional Comments:
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 active:bg-blue-400"
      >
        Submit
      </button>
    </form>
  );
};

export default A2;
