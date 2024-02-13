"use client";
import { useForm } from "react-hook-form";
// refresh every submit

function MedicationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return <form onSubmit={handleSubmit(onSubmit)}>
    <label>Medication Name</label>
    <input {...register("medicationName")} type="text" />
    <label>Dosage</label>
    <input {...register("dosage")} type="text" />
    <label>Frequency</label>
    <input {...register("frequency")} type="text" />
    <label>Route of Administration</label>
    <input {...register("routeOfAdministration")} type="text" />
    <label>Start Date</label>
    <input {...register("startDate")} type="date" />
    <label>End Date</label>
    <input {...register("endDate")} type="date" />
    <label>Purpose/Indication</label>
    <input {...register("purposeIndication")} type="text" />
    <label>Adverse Reactions/Allergies</label>
    <input {...register("adverseReactionsAllergies")} type="text" />
    <label>Current Status</label>
    <select {...register("currentStatus")}>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
      <option value="completed">Completed</option>
      <option value="on-hold">On-Hold</option>
      <option value="cancelled">Cancelled</option>
      <option value="stopped">Stopped</option>
    </select>
    <input {...register("currentStatus")} type="text" />
    <input type="submit" />
  </form>;
}
export default MedicationForm;


