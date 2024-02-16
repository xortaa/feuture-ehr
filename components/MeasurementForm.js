"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";

function MeasurementForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/measurement", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl>
          <FormLabel>Height</FormLabel>
          <Input size="sm" variant="outline" {...register("height")} />
        </FormControl>
        <FormControl>
          <FormLabel>Weight</FormLabel>
          <Input size="sm" variant="outline" {...register("weight")} />
        </FormControl>
        <FormControl>
          <FormLabel>BMI</FormLabel>
          <Input size="sm" variant="outline" {...register("bmi")} />
        </FormControl>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input size="sm" variant="outline" {...register("date")} type="date" />
        </FormControl>
        <Button type="submit" colorScheme="green" variant="solid" w={150}>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default MeasurementForm;

// {
//   "patientId": "65ccf745517265b9bbffc452",
//   "height": 180,
//   "weight": 75,
//   "bmi": 23.15,
//   "date": "2022-01-01"
// }
