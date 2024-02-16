"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import HPITable from "./HPITable";

function HPIPreview({ hpi, id }) {
  const [hpis, setHpis] = useState(hpi);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/hpi", newData).then((res) => {
      if (res.status === 200) {
        setHpis([...hpis, res.data.hpi]);
      }
    });
  };

  const handleDelete = (id) => {
    setHpis(hpis.filter((hpi) => hpi._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        HPI
      </Heading>

      <HPITable hpis={hpis} onDelete={handleDelete} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl variant="floating">
            <FormLabel>Chief Complaint</FormLabel>
            <Input size="sm" variant="outline" {...register("chiefComplaint")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Duration</FormLabel>
            <Input size="sm" variant="outline" {...register("duration")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Severity</FormLabel>
            <Select size="sm" variant="outline" {...register("severity")}>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </Select>
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Onset</FormLabel>
            <Input size="sm" variant="outline" {...register("onset")} type="date" />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Associated Symptoms</FormLabel>
            <Input size="sm" variant="outline" {...register("associatedSymptoms")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Current Medications</FormLabel>
            <Input size="sm" variant="outline" {...register("currentMedications")} />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default HPIPreview;
