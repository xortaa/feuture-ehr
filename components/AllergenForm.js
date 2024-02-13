"use client";

import { useForm } from "react-hook-form";

function AllergenForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Allergen</label>
      <input {...register("allergen")} />
      <label>Reaction</label>
      <input {...register("reaction")} />
      <label>Severity</label>
      <select {...register("severity")}>
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
      </select>
      <label>Onset</label>
      <input {...register("onset")} type="date"/>
      <input type="submit" />
    </form>
  );
}
export default AllergenForm;
