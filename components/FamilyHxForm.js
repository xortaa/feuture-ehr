"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select } from "@chakra-ui/react";
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
        <Input size="sm" variant="outline" placeholder="First Name" {...register("firstName")} />
        <Input size="sm" variant="outline" placeholder="Last Name" {...register("lastName")} />
        <Input size="sm" variant="outline" placeholder="Relationship" {...register("relationship")} />
        <Input size="sm" variant="outline" placeholder="Age" {...register("age")} />
        <Input size="sm" variant="outline" placeholder="Related Diseases" {...register("relatedDiseases")} />
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
