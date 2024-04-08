"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import InterventionTable from "./InterventionTable";

function InterventionPreview({ intervention, id }) {
  const [interventions, setInterventions] = useState(intervention);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/intervention", newData).then((res) => {
      if (res.status === 200) {
        setInterventions([...interventions, res.data.intervention]);
      }
    });
  };

  const handleDelete = (id) => {
    setInterventions(interventions.filter((intervention) => intervention._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Intervention
      </Heading>
      <InterventionTable setInterventions={setInterventions} interventions={interventions} onDelete={handleDelete} />;
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Dependent Facilitative</FormLabel>
            <Input size="sm" variant="outline" {...register("dependentFacilitative")} />
          </FormControl>
          <FormControl>
            <FormLabel>Independent Supplemental</FormLabel>
            <Input size="sm" variant="outline" {...register("independentSupplemental")} />
          </FormControl>
          <FormControl>
            <FormLabel>Collaborative Developmental</FormLabel>
            <Input size="sm" variant="outline" {...register("collaborativeDevelopmental")} />
          </FormControl>
          <FormControl>
            <FormLabel>Deciding Triggers</FormLabel>
            <Input size="sm" variant="outline" {...register("decidingTriggers")} />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default InterventionPreview;
