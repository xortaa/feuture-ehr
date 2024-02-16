"use client";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";

function MedicationForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/medication", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input size="sm" variant="outline" {...register("name")} />
        </FormControl>
        <FormControl>
          <FormLabel>Dose</FormLabel>
          <Input size="sm" variant="outline" {...register("dose")} />
        </FormControl>
        <FormControl>
          <FormLabel>Frequency</FormLabel>
          <Input size="sm" variant="outline" {...register("frequency")} />
        </FormControl>
        <FormControl>
          <FormLabel>Route</FormLabel>
          <Input size="sm" variant="outline" {...register("route")} />
        </FormControl>
        <FormControl>
          <FormLabel>Start Date</FormLabel>
          <Input size="sm" variant="outline" {...register("startDate")} type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>End Date</FormLabel>
          <Input size="sm" variant="outline" {...register("endDate")} type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Purpose</FormLabel>
          <Input size="sm" variant="outline" {...register("purpose")} />
        </FormControl>
        <FormControl>
          <FormLabel>Status</FormLabel>
          <Select size="sm" variant="outline" {...register("status")}>
            <option value="Stopped">Stopped</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </Select>
        </FormControl>
        <Button w={150} colorScheme="green" variant="solid" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default MedicationForm;

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
