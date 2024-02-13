"use client";

import { useForm } from "react-hook-form";

function HPIForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Chief Complaint</label>
      <input {...register("chiefComplaint")} />
      <label>Duration</label>
      <input {...register("duration")} />
      <label>Severity</label>
      <select {...register("severity")}>
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
      </select>
      <label>Onset</label>
      <input {...register("onset")} type="date" />
      <label>Associated Symptoms</label>
      <input {...register("associatedSymptoms")} />
      <label>Current Medications</label>
      <input {...register("currentMedications")} />
      <input type="submit" />
    </form>
  );
}
export default HPIForm;

// Chief Complaint:

// Example: "Patient complains of persistent headache on the left side of the head."
// Duration:

// Example: "Symptoms have been present for approximately 5 days."
// Severity:

// Example: "The pain is moderate, interfering with daily activities."
// Associated Symptoms:

// Example: "Patient reports nausea and sensitivity to light accompanying the headache."
// Current Medications:

// Example: "Patient is currently taking acetaminophen for pain relief."
