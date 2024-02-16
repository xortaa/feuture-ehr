"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import VitalSignTable from "./VitalSignTable";

function VitalSignPreview({ vitalSign, id }) {
  const [vitalSigns, setVitalSigns] = useState(vitalSign);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/vitalSign", newData).then((res) => {
      if (res.status === 200) {
        setVitalSigns([...vitalSigns, res.data.vitalSign]);
      }
    });
  };

  const handleDelete = (id) => {
    setVitalSigns(vitalSigns.filter((vitalSign) => vitalSign._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        VitalSigns
      </Heading>
      <VitalSignTable vitalSigns={vitalSigns} onDelete={handleDelete} />;
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
    </Stack>
  );
}
export default VitalSignPreview;
