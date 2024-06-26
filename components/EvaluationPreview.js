"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import EvaluationTable from "./EvaluationTable";

function EvaluationPreview({ evaluation, id }) {
  const [evaluations, setEvaluations] = useState(evaluation);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/evaluation", newData).then((res) => {
      if (res.status === 200) {
        setEvaluations([...evaluations, res.data.evaluation]);
      }
    });
  };

  const handleDelete = (id) => {
    setEvaluations(evaluations.filter((evaluation) => evaluation._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Evaluation
      </Heading>
      <EvaluationTable setEvaluations={setEvaluations} evaluations={evaluations} onDelete={handleDelete} />;
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>MET</FormLabel>
            <Input size="sm" variant="outline" {...register("met")} />
          </FormControl>
          <FormControl>
            <FormLabel>UNMET</FormLabel>
            <Input size="sm" variant="outline" {...register("unmet")} />
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
export default EvaluationPreview;
