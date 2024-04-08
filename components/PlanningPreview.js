"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import PlanningTable from "./PlanningTable";

function PlanningPreview({ planning, id }) {
  const [plannings, setPlannings] = useState(planning);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/planning", newData).then((res) => {
      if (res.status === 200) {
        setPlannings([...plannings, res.data.planning]);
      }
    });
  };

  const handleDelete = (id) => {
    setPlannings(plannings.filter((planning) => planning._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Planning
      </Heading>
      <PlanningTable setPlannings={setPlannings} plannings={plannings} onDelete={handleDelete} />;
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Short Term Goal</FormLabel>
            <Input size="sm" variant="outline" {...register("shortTermGoal")} />
          </FormControl>
          <FormControl>
            <FormLabel>Long Term Goal</FormLabel>
            <Input size="sm" variant="outline" {...register("longTermGoal")} />
          </FormControl>
          <h1 className=" font-bold text-2xl mb-5">Objectives</h1>
          <FormControl className="ml-9">
            <FormLabel>Cognitive Objectives</FormLabel>
            <Input size="sm" variant="outline" {...register("cognitiveObjectives")} />
          </FormControl>
          <FormControl className="ml-9">
            <FormLabel>Psychomotor Objectives</FormLabel>
            <Input size="sm" variant="outline" {...register("psychomotorObjectives")} />
          </FormControl>
          <FormControl className="ml-9">
            <FormLabel>Affective Objectives</FormLabel>
            <Input size="sm" variant="outline" {...register("affectiveObjectives")} />
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
export default PlanningPreview;
