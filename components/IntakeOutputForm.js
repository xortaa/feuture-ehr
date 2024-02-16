"use client";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";

function IntakeOutputForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/intakeOutput", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading size="sm">Add a New IntakeOutput</Heading>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl>
          <FormLabel>Intake Time</FormLabel>
          <Input size="sm" variant="outline" {...register("intakeTime")} />
        </FormControl>
        <FormControl>
          <FormLabel>Type of Intake</FormLabel>
          <Input size="sm" variant="outline" {...register("intakeType")} />
        </FormControl>
        <FormControl>
          <FormLabel>Amount of Intake</FormLabel>
          <Input size="sm" variant="outline" {...register("intakeAmount")} />
        </FormControl>
        <FormControl>
          <FormLabel>Output Time</FormLabel>
          <Input size="sm" variant="outline" {...register("outputTime")} />
        </FormControl>
        <FormControl>
          <FormLabel>Type of Output</FormLabel>
          <Input size="sm" variant="outline" {...register("outputType")} />
        </FormControl>
        <FormControl>
          <FormLabel>Amount of Output</FormLabel>
          <Input size="sm" variant="outline" {...register("outputAmount")} />
        </FormControl>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input type="date" size="sm" variant="outline" {...register("date")} />
        </FormControl>
        <Button w={150} colorScheme="green" variant="solid" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default IntakeOutputForm;

