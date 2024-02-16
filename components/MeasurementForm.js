"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";

function MeasurementForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const weight = watch("weight");
  const height = watch("height");

  const bmi = weight && height ? (weight / (height / 100) ** 2).toFixed(2) : "";

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id, bmi };
    axios.post("/api/measurement", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl>
          <FormLabel>Height (cm)</FormLabel>
          <Input size="sm" variant="outline" {...register("height")} />
        </FormControl>
        <FormControl>
          <FormLabel>Weight (kg)</FormLabel>
          <Input size="sm" variant="outline" {...register("weight")} />
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
