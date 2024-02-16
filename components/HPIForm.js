"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";

function HPIForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/hpi", newData).then((res) => {
      console.log(res);
    });
  };

  return (
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
  );
}
export default HPIForm;

// {
//   "chiefComplaint": "Severe headache",
//   "duration": "2 days",
//   "severity": "High",
//   "onset": "2022-12-01T00:00:00.000Z",
//   "associatedSymptoms": "Nausea, blurred vision",
//   "currentMedications": "Ibuprofen",
//   "patientId": "65ccf745517265b9bbffc452"
// }
