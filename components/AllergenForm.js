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
      <Stack spacing={3}>
        <Input
          size="lg"
          variant="filled"
          placeholder="Allergen Name"
          {...register("allergenName", { required: true })}
        />
        <Input size="lg" variant="filled" placeholder="Reaction" {...register("reaction", { required: true })} />
        <Select size="lg" variant="filled" placeholder="Severity" {...register("severity", { required: true })}>
          <option value="Mild">Mild</option>
          <option value="Moderate">Moderate</option>
          <option value="Severe">Severe</option>
        </Select>
        <Input size="lg" variant="filled" placeholder="Onset" {...register("onset", { required: true })} type="date" />
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
