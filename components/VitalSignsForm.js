"use client";

import { useForm } from "react-hook-form";

function VitalSignsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Date</label>
      <input {...register("date")} />
      <label htmlFor="">Temp</label>
      <input {...register("temp")} />
      <label htmlFor="">Temp Source</label>
      <input {...register("tempSource")} />
      <label htmlFor="">Pulse</label>
      <input {...register("pulse")} />
      <label htmlFor="">Pulse Source</label>
      <input {...register("pulseSource")} />
      <label htmlFor="">BP</label>
      <input {...register("bp")} />
      <label htmlFor="">Position</label>
      <select {...register("position")}>
        <option value="supine">Supine</option>
        <option value="sitting">Sitting</option>
        <option value="standing">Standing</option>
      </select>
      <label htmlFor="">Respirations</label>
      <input {...register("respirations")} />
      <label htmlFor="">SpO2</label>
      <input {...register("spO2")} />
      <label htmlFor="">Oxygen Source</label>
      <input {...register("oxygenSource")} />
      <label htmlFor="">VS Comments</label>
    </form>
  );
}
export default VitalSignsForm;
