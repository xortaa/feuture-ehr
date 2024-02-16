"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import IntakeOutputTable from "./IntakeOutputTable";

function IntakeOutputPreview({ intakeOutput, id }) {
  const [intakeOutputs, setIntakeOutputs] = useState(intakeOutput);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/intakeOutput", newData).then((res) => {
      if (res.status === 200) {
        setIntakeOutputs([...intakeOutputs, res.data.intakeOutput]);
      }
    });
  };

  const handleDelete = (id) => {
    setIntakeOutputs(intakeOutputs.filter((intakeOutput) => intakeOutput._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Intake/Output
      </Heading>
      <IntakeOutputTable intakeOutputs={intakeOutputs} onDelete={handleDelete} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading size="sm">Add a New Intake/Output</Heading>
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
    </Stack>
  );
}
export default IntakeOutputPreview;
