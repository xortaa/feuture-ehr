"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select } from "@chakra-ui/react";
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
        <Input size="sm" variant="outline" placeholder="Chief Complaint" {...register("chiefComplaint")} />
        <Input size="sm" variant="outline" placeholder="Duration" {...register("duration")} />
        <Select size="sm" variant="outline" placeholder="Severity" {...register("severity")}>
          <option value="Mild">Mild</option>
          <option value="Moderate">Moderate</option>
          <option value="Severe">Severe</option>
        </Select>
        <Input size="sm" variant="outline" placeholder="Onset" {...register("onset")} type="date" />
        <Input size="sm" variant="outline" placeholder="Associated Symptoms" {...register("associatedSymptoms")} />
        <Input size="sm" variant="outline" placeholder="Current Medications" {...register("currentMedications")} />
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
