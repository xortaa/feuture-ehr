"use client";

import { useForm } from "react-hook-form";
// refresh every submit

function FamilyHxForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} type="text" />
      <input {...register("lastName")} type="text" />
      <input {...register("relationship")} type="text" />
      <input {...register("age")} type="number" />
      <input {...register("relatedDiseases")} type="text" />
      <input type="submit" />
    </form>
  );
}
export default FamilyHxForm;
