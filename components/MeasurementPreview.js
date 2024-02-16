"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import MeasurementTable from "./MeasurementTable";

function MeasurementPreview({ measurement, id }) {
  const [measurements, setMeasurements] = useState(measurement);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/measurement", newData).then((res) => {
      if (res.status === 200) {
        setMeasurements([...measurements, res.data.measurement]);
      }
    });
  };

  const handleDelete = (id) => {
    setMeasurements(measurements.filter((measurement) => measurement._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Measurements
      </Heading>
      <MeasurementTable measurements={measurements} onDelete={handleDelete} />;
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
    </Stack>
  );
}
export default MeasurementPreview;
