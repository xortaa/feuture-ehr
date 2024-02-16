"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
// refresh every submit

function FamilyHxForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/familyHx", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl variant="floating">
          <FormLabel>First Name</FormLabel>
          <Input size="sm" variant="outline" placeholder="First Name" {...register("firstName")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Last Name</FormLabel>
          <Input size="sm" variant="outline" placeholder="Last Name" {...register("lastName")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Relationship</FormLabel>
          <Input size="sm" variant="outline" placeholder="Relationship" {...register("relationship")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Age</FormLabel>
          <Input size="sm" variant="outline" placeholder="Age" {...register("age")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Related Diseases</FormLabel>
          <Input size="sm" variant="outline" placeholder="Related Diseases" {...register("relatedDiseases")} />
        </FormControl>
        <Button w={150} colorScheme="green" variant="solid" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default FamilyHxForm;

// {
//     "firstName": "Grace",
//     "lastName": "Ocampo",
//     "relationship": "mother",
//     "age": 56,
//     "relatedDiseases": "diearrhea",
//     "patientId": "65ccf745517265b9bbffc452"
// }
