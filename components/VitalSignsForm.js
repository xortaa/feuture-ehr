"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";

function VitalSignsForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/vitalSign", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl>
          <FormLabel>Temp</FormLabel>
          <Input size="sm" variant="outline" {...register("temp")} />
        </FormControl>
        <FormControl>
          <FormLabel>Pulse</FormLabel>
          <Input size="sm" variant="outline" {...register("pulse")} />
        </FormControl>
        <FormControl>
          <FormLabel>BP</FormLabel>
          <Input size="sm" variant="outline" {...register("bp")} />
        </FormControl>
        <FormControl>
          <FormLabel>Position</FormLabel>
          <Input size="sm" variant="outline" {...register("position")} />
        </FormControl>
        <FormControl>
          <FormLabel>Respirations</FormLabel>
          <Input size="sm" variant="outline" {...register("respirations")} />
        </FormControl>
        <FormControl>
          <FormLabel>Spo2</FormLabel>
          <Input size="sm" variant="outline" {...register("spo2")} />
        </FormControl>
        <FormControl>
          <FormLabel>Oxygen Source</FormLabel>
          <Input size="sm" variant="outline" {...register("oxygenSource")} />
        </FormControl>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input size="sm" variant="outline" {...register("date")} type="date" />
        </FormControl>
        <Button w={150} colorScheme="green" variant="solid" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default VitalSignsForm;

// {
//   "patientId": "65ccf745517265b9bbffc452",
//   "date": "2022-01-01",
//   "temp": 36.6,
//   "pulse": 72,
//   "bp": "120/80",
//   "position": "Sitting",
//   "respirations": 16,
//   "spo2": 98,
//   "oxygenSource": "Room air"
// }
