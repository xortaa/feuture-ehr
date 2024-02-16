"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";

function LabForm({ id }) {
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

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/lab", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white">
        <Button w={150} colorScheme="yellow" variant="outline" onClick={() => append({ testName: "", testResult: "" })}>
          Add lab test input
        </Button>
        {fields.map((field, index) => (
          <Stack direction="row">
            <FormControl variant="floating">
              <FormLabel>Test Name</FormLabel>
              <Input size="sm" variant="outline" {...register(`results.${index}.testName`)} />
            </FormControl>
            <FormControl variant="floating">
              <FormLabel>Test Result</FormLabel>
              <Input size="sm" variant="outline" {...register(`results.${index}.testResult`)} />
            </FormControl>
          </Stack>
        ))}
        <FormControl variant="floating">
          <FormLabel>Test Date</FormLabel>
          <Input {...register("date")} type="date" />
        </FormControl>
        <Button w={150} colorScheme="green" variant="solid" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default LabForm;

// {
//   "patientId": "65ccf745517265b9bbffc452",
//   "results": [
//     {
//       "testName": "Blood Sugar",
//       "result": "Normal"
//     },
//     {
//       "testName": "Cholesterol",
//       "result": "High"
//     }
//   ],
//   "date": "2022-01-01"
// }
