"use client";

import { useForm } from "react-hook-form";

function ImmunizationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Vaccine Name</label>
      <input {...register("vaccineName")} />
      <label htmlFor="">Date</label>
      <input {...register("date")} />
    </form>
  );
}
export default ImmunizationForm;
