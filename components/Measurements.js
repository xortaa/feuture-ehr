"use client";

import { useForm } from "react-hook-form";

function Measurements() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Height</label>
      <input {...register("height")} />
      <label htmlFor="">Weight</label>
      <input {...register("weight")} />
      <label htmlFor="">BMI</label>
      <input {...register("bmi")} />
      <input type="submit" />
    </form>
  );
}
export default Measurements;
