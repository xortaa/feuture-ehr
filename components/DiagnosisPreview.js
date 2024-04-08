"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import DiagnosisTable from "./DiagnosisTable";

function DiagnosisPreview({ diagnosis, id }) {
  const [diagnoses, setDiagnoses] = useState(diagnosis);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/diagnosis", newData).then((res) => {
      if (res.status === 200) {
        setDiagnoses([...diagnoses, res.data.diagnosis]);
      }
    });
  };

  const handleDelete = (id) => {
    setDiagnoses(diagnoses.filter((diagnosis) => diagnosis._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Diagnosis
      </Heading>
      <DiagnosisTable setDiagnoses={setDiagnoses} diagnoses={diagnoses} onDelete={handleDelete} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Nursing Diagnosis</FormLabel>
            <Input size="sm" variant="outline" {...register("nursingDiagnosis")} />
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
export default DiagnosisPreview;
