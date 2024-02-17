"use client";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";

function NurseNotesForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/nurseNotes", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input size="sm" variant="outline" {...register("date")} type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Time</FormLabel>
          <Input size="sm" variant="outline" {...register("time")} />
        </FormControl>
        <FormControl>
          <FormLabel>Nurse Notes</FormLabel>
          <Input size="sm" variant="outline" {...register("nurseNotes")} />
        </FormControl>
        <Button w={150} colorScheme="green" variant="solid" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default NurseNotesForm;

// {
//   "patientId": "65ccf745517265b9bbffc452",
//   "name": "Ibuprofen",
//   "dose": "200mg",
//   "frequency": "Every 6 hours",
//   "route": "Oral",
//   "startDate": "2022-01-01",
//   "endDate": "2022-01-07",
//   "purpose": "Pain relief",
//   "status": "Completed"
// }
