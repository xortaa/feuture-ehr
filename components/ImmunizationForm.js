"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";

function ImmunizationForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/hpi", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl variant="floating">
          <FormLabel>Name</FormLabel>
          <Input size="sm" variant="outline" {...register("name")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Date</FormLabel>
          <Input type="date" />
        </FormControl>
        <Button w={150} colorScheme="green" variant="solid" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default ImmunizationForm;

// {
//   "name": "Hepatitis B",
//   "date": "2022-01-01",
//   "patientId": "65ccf745517265b9bbffc452"
// }
