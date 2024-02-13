"use client";

import { useForm, useFieldArray } from "react-hook-form";

function LabForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "result",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`results.${index}.testName`)} defaultValue={field.testName} placeholder="Test Name" />
          <input
            {...register(`results.${index}.testResult`)}
            defaultValue={field.testResult}
            placeholder="Test Result"
          />
        </div>
      ))}
      <button type="button" onClick={() => append({ testName: "", testResult: "" })}>
        Add input
      </button>
      <label>Test Date</label>
      <input {...register("testDate", { required: "This field is required" })} type="date" />
      {errors.testDate && <p>{errors.testDate.message}</p>}
      <input type="submit" />
    </form>
  );
}
export default LabForm;
