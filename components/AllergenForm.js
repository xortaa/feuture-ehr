"use client";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
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
      <Heading size="sm">Add a New Allergen</Heading>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl>
          <FormLabel>Allergen Name</FormLabel>
          <Input size="sm" variant="outline" {...register("allergenName")} />
        </FormControl>
        <FormControl>
          <FormLabel>Reaction</FormLabel>
          <Input size="sm" variant="outline" {...register("reaction")} />
        </FormControl>
        <FormControl>
          <FormLabel>Severity</FormLabel>
          <Select size="sm" variant="outline" {...register("severity")}>
            <option value="Mild">Mild</option>
            <option value="Moderate">Moderate</option>
            <option value="Severe">Severe</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Onset</FormLabel>
          <Input type="date" size="sm" variant="outline" {...register("onset")} />
        </FormControl>
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
