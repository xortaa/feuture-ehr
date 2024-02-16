"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import ImmunizationTable from "./ImmunizationTable";

function ImmunizationPreview({ immunization, id }) {
  const [immunizations, setImmunizations] = useState(immunization);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setImmunizations([...immunizations, data]);
    const newData = { ...data, patientId: id };
    axios.post("/api/immunization", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Immunizations
      </Heading>

      <ImmunizationTable immunizations={immunizations} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading size="sm">Add a New Allergen</Heading>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl variant="floating">
            <FormLabel>Name</FormLabel>
            <Input size="sm" variant="outline" {...register("name")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Date</FormLabel>
            <Input type="date" {...register("date")} />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default ImmunizationPreview;
