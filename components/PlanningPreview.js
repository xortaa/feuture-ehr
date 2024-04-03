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
          <h1 className=" font-bold text-2xl mb-5">Short term</h1>
          <FormControl>
            <FormLabel>Relieve Pain</FormLabel>
            <Input size="sm" variant="outline" {...register("relievePain")} />
          </FormControl>
          <FormControl>
            <FormLabel>Infection Prevention</FormLabel>
            <Input size="sm" variant="outline" {...register("infectionPrevention")} />
          </FormControl>
          <h1 className="my-5  font-bold text-2xl">Long term</h1>
          <FormControl>
            <FormLabel>Treatment</FormLabel>
            <Input size="sm" variant="outline" {...register("treatment")} />
          </FormControl>
          <FormControl>
            <FormLabel>Cure</FormLabel>
            <Input size="sm" variant="outline" {...register("cure")} />
          </FormControl>
          <FormControl>
            <FormLabel>Promote</FormLabel>
            <Input size="sm" variant="outline" {...register("promote")} />
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
