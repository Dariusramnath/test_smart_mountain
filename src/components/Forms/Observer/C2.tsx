import { useState } from "react";

interface FormData {
  category: string;
  subCategory: string;
  potentialFutureEngagement: string;
  otherPotentialFutureEngagement: string;
  otherPreferredInfoAccess: string;
  organization: string;
  department: string;
  primaryContact: string;
  position: string;
  emailPhone: string;
  areaOfInterest: string;
  otherAreaOfInterest: string;
  purposeOfObservation: string;
  otherPurposeOfObservation: string;
  geographicFocus: string;
  timeline: string;
  registrationDate: string;
  howDidYouHearAboutUs: string;
  preferredInformationAccess: string;
  ndaRequired: boolean;
  futureEngagement: string;
  jamaicaPilotInterest: string;
  additionalComments: string;
}

const PolicyRegulatoryObserverForm = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "Observer",
    subCategory: "C2",
    potentialFutureEngagement: "",
    otherPotentialFutureEngagement: "",
    otherPreferredInfoAccess: "",
    organization: "",
    department: "",
    primaryContact: "",
    position: "",
    emailPhone: "",
    areaOfInterest: "",
    otherAreaOfInterest: "",
    purposeOfObservation: "",
    otherPurposeOfObservation: "",
    geographicFocus: "",
    timeline: "",
    registrationDate: "",
    howDidYouHearAboutUs: "",
    preferredInformationAccess: "",
    ndaRequired: false,
    futureEngagement: "",
    jamaicaPilotInterest: "",
    additionalComments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        category: "Observer",
        subCategory: "C2",
        potentialFutureEngagement: "",
        otherPotentialFutureEngagement: "",
        otherPreferredInfoAccess: "",
        organization: "",
        department: "",
        primaryContact: "",
        position: "",
        emailPhone: "",
        areaOfInterest: "",
        otherAreaOfInterest: "",
        purposeOfObservation: "",
        otherPurposeOfObservation: "",
        geographicFocus: "",
        timeline: "",
        registrationDate: "",
        howDidYouHearAboutUs: "",
        preferredInformationAccess: "",
        ndaRequired: false,
        futureEngagement: "",
        jamaicaPilotInterest: "",
        additionalComments: "",
      });
    } else {
      alert("Error submitting form.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 w-full mx-auto bg-white rounded shadow text-black"
    >
      <label className="block font-semibold mb-3">
        Organization:
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Department:
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Primary Contact:
        <input
          type="text"
          name="primaryContact"
          value={formData.primaryContact}
          onChange={handleChange}
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
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Email/Phone:
        <input
          type="text"
          name="emailPhone"
          value={formData.emailPhone}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <div className="flex flex-col">
        <label className="font-semibold block mt-3">Area of Interest:</label>
        {[
          "Market Development",
          "Environmental Regulation",
          "Financial Innovation",
          "Technology Standards",
          "Other",
        ].map((option) => (
          <label className="block font-semibold mb-3" key={option}>
            <input
              type="radio"
              className="mr-2"
              name="areaOfInterest"
              value={option}
              checked={formData.areaOfInterest === option}
              onChange={handleChange}
            />
            <span>{option}</span>
          </label>
        ))}
        {formData.areaOfInterest === "Other" && (
          <input
            type="text"
            name="otherAreaOfInterest"
            value={formData.otherAreaOfInterest || ""}
            onChange={handleChange}
            placeholder="Please specify"
            className="w-full p-2 border rounded mb-3"
          />
        )}
      </div>

      <div className="flex flex-col">
        <label className="font-semibold block mt-3">
          Purpose of Observation:
        </label>
        {[
          "Policy Development",
          "Regulatory Framework",
          "Market Assessment",
          "Other",
        ].map((option) => (
          <label className="block font-semibold mb-3" key={option}>
            <input
              type="radio"
              className="mr-2"
              name="purposeOfObservation"
              value={option}
              checked={formData.purposeOfObservation === option}
              onChange={handleChange}
            />
            <span>{option}</span>
          </label>
        ))}
        {formData.purposeOfObservation === "Other" && (
          <input
            type="text"
            name="otherPurposeOfObservation"
            value={formData.otherPurposeOfObservation || ""}
            onChange={handleChange}
            placeholder="Please specify"
            className="w-full p-2 border rounded mb-3"
          />
        )}
      </div>

      <label className="block font-semibold mb-3">
        Geographic Focus:
        <input
          type="text"
          name="geographicFocus"
          value={formData.geographicFocus}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Timeline:
        <input
          type="text"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Registration Date:
        <input
          type="date"
          name="registrationDate"
          value={formData.registrationDate}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        How did you hear about us?:
        <input
          type="text"
          name="howDidYouHearAboutUs"
          value={formData.howDidYouHearAboutUs}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Preferred Information Access */}
      <div className="block mt-2">
        <label className="font-semibold block mt-3">
          Preferred Information Access:
        </label>
        {[
          "Regular Updates",
          "Quarterly Reports",
          "Case Studies",
          "Technical Documentation",
        ].map((option) => (
          <label className="block font-semibold mb-3" key={option}>
            <input
              type="radio"
              name="preferredInformationAccess"
              value={option}
              checked={formData.preferredInformationAccess === option}
              onChange={handleChange}
              className="mr-2"
            />
            <span>{option}</span>
          </label>
        ))}
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="preferredInformationAccess"
            value="Other"
            checked={formData.preferredInformationAccess === "Other"}
            onChange={handleChange}
            className="mr-2"
          />
          <span>Other:</span>
          {formData.preferredInformationAccess === "Other" && (
            <input
              type="text"
              name="otherPreferredInfoAccess"
              value={formData.otherPreferredInfoAccess}
              onChange={handleChange}
              placeholder="Please specify"
              className="w-full p-2 border rounded"
            />
          )}
        </label>
      </div>

      <div className="block mt-2">
        <label className="block font-semibold mb-3">
          Non-Disclosure Agreement Required?:
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="ndaRequired"
            value="true"
            checked={formData.ndaRequired === true}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="ndaRequired"
            value="false"
            checked={formData.ndaRequired === false}
            onChange={handleChange}
            className="mr-2"
          />
          No
        </label>
      </div>

      {/* Potential Future Engagement */}
      <div className="block mt-2">
        <label className="font-semibold block mt-3">
          Potential Future Engagement:
        </label>
        {["Potential Investor", "Potential Customer", "Research Partner"].map(
          (option) => (
            <label className="block font-semibold mb-3" key={option}>
              <input
                type="radio"
                name="potentialFutureEngagement"
                value={option}
                checked={formData.potentialFutureEngagement === option}
                onChange={handleChange}
                className="mr-2"
              />
              <span>{option}</span>
            </label>
          )
        )}
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="potentialFutureEngagement"
            value="Other"
            checked={formData.potentialFutureEngagement === "Other"}
            onChange={handleChange}
            className="mr-2"
          />
          <span>Other:</span>
          {formData.potentialFutureEngagement === "Other" && (
            <input
              type="text"
              name="otherPotentialFutureEngagement"
              value={formData.otherPotentialFutureEngagement}
              onChange={handleChange}
              placeholder="Please specify"
              className="w-full p-2 border rounded"
            />
          )}
        </label>
      </div>

      <div className="block mt-2">
        <label className="block font-semibold mb-3">
          Jamaica Pilot Interest:
        </label>
        {["Yes", "No", "Maybe"].map((option) => (
          <label className="block font-semibold mb-3" key={option}>
            <input
              type="radio"
              name="jamaicaPilotInterest"
              value={option}
              checked={formData.jamaicaPilotInterest === option}
              onChange={handleChange}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

      <label className="block font-semibold mb-3">
        Additional Comments:
        <textarea
          name="additionalComments"
          value={formData.additionalComments}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default PolicyRegulatoryObserverForm;
