"use client";

import { useForm } from "react-hook-form";

function DemographicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const maritalStatus = watch("maritalStatus");

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Last Name</label>
      <input {...register("lastName")} />
      <label>Age</label>
      <input {...register("age", { valueAsNumber: true })} />
      <label>Date of Birth</label>
      <input {...register("dob", { valueAsDate: true })} type="date" />
      <label>Address</label>
      <input {...register("address")} />
      <label>Religion</label>
      <input {...register("religion")} />
      <label>ethnicity</label>
      <input {...register("ethnicity")} />
      <label>occupation</label>
      <input {...register("occupation")} />
      <label>maritalStatus</label>
      <select {...register("maritalStatus")}>
        <option value="">Select marital status</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
        <option value="widowed">Widowed</option>
      </select>
      <label>Spouse Name</label>
      <input {...register("spouseName")} disabled={maritalStatus === "single"} />
      <label>Number of Children</label>
      <input {...register("numberOfChildren", { valueAsNumber: true })} />
      <input {...register("emergencyContactName")} />
      <label>Emergency Contact Relationship</label>
      <input {...register("emergencyContactRelationship")} />
      <label>Emergency Contact Number</label>
      <input {...register("emergencyContactNumber")} />
      <input type="submit" />
    </form>
  );
}
export default DemographicForm;
