"use client";

import { useForm } from "react-hook-form";

function SocialHxForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form>
      <label>Occupation</label>
      <input {...register("occupation")} />
      <label>Marital Status</label>
      <input {...register("maritalStatus")} />
      <label>Living Situation</label>
      <input {...register("livingSituation")} />
      <label>Educational Background</label>
      <input {...register("educationalBackground")} />
      <label>Financial Status</label>
      <input {...register("financialStatus")} />
      <label>Substance Use</label>
      <input {...register("substanceUse")} />
      <label>Diet and Exercise</label>
      <input {...register("dietAndExercise")} />
      <label>Cultural and Religious Background</label>
      <input {...register("culturalAndReligiousBackground")} />
      <label>Hobbies and Interests</label>
      <input {...register("hobbiesAndInterests")} />
      <input type="submit" />
    </form>
  );
}
export default SocialHxForm;
