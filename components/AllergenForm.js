"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select } from "@chakra-ui/react";
import axios from "axios";

function AllergenForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/allergen", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <Input size="sm" variant="outline" placeholder="Allergen Name" {...register("allergenName")} />
        <Input size="sm" variant="outline" placeholder="Reaction" {...register("reaction")} />
        <Select size="sm" variant="outline" placeholder="Severity" {...register("severity")}>
          <option value="Mild">Mild</option>
          <option value="Moderate">Moderate</option>
          <option value="Severe">Severe</option>
        </Select>
        <Input size="sm" variant="outline" placeholder="Onset" {...register("onset")} type="date" />
        <Button w={150} colorScheme="green" variant="solid" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default AllergenForm;

// {
//     "allergenName": "Peanuts",
//   "reaction": "Anaphylaxis",
//   "severity": "High",
//   "onset": "2001-01-01",
//   "patientId": "65ccf745517265b9bbffc452"
// }
