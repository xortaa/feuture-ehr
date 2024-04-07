"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import AssessmentTable from "./AssessmentTable";

function AssessmentPreview({ assessment, id }) {
  const [assessments, setAssessments] = useState(assessment);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/assessment", newData).then((res) => {
      if (res.status === 200) {
        setAssessments([...assessments, res.data.assessment]);
      }
    });
  };

  const handleDelete = (id) => {
    setAssessments(assessments.filter((assessment) => assessment._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Assessment
      </Heading>
      <AssessmentTable setAssessments={setAssessments} assessments={assessments} onDelete={handleDelete} />;
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Subjective</FormLabel>
            <Input size="sm" variant="outline" {...register("subjective")} />
          </FormControl>
          <FormControl>
            <FormLabel>Objective</FormLabel>
            <Input size="sm" variant="outline" {...register("objective")} />
          </FormControl>
          <FormControl>
            <FormLabel>Deciding Triggers</FormLabel>
            <Input size="sm" variant="outline" {...register("decidingTrigger")} />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default AssessmentPreview;
