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
            <FormLabel>Method/Cause of Injury</FormLabel>
            <Input size="sm" variant="outline" {...register("method")} />
          </FormControl>
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input size="sm" variant="outline" {...register("location")} />
          </FormControl>
          <FormControl>
            <FormLabel>Damage Caused</FormLabel>
            <Input size="sm" variant="outline" {...register("damageCaused")} />
          </FormControl>
          <FormControl>
            <FormLabel>Type of Injury</FormLabel>
            <Input size="sm" variant="outline" {...register("typeOfInjury")} />
          </FormControl>
          <FormControl>
            <FormLabel>Location of Injury</FormLabel>
            <Input size="sm" variant="outline" {...register("locationOfInjury")} />
          </FormControl>
          <FormControl>
            <FormLabel>Size of Injury</FormLabel>
            <Input size="sm" variant="outline" {...register("sizeOfInjury")} />
          </FormControl>
          <FormControl>
            <FormLabel>Degree of Injury</FormLabel>
            <Select size="sm" variant="outline" {...register("degreeOfInjury")}>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Color of Injury</FormLabel>
            <Input size="sm" variant="outline" {...register("colorOfInjury")} />
          </FormControl>
          <FormControl>
            <FormLabel>Drainage</FormLabel>
            <Select size="sm" variant="outline" {...register("drainage")}>
              <option value="None">None</option>
              <option value="Serous">Serous</option>
              <option value="Purulent">Purulent</option>
            </Select>
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
