"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";

function SocialHxForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/socialHx", newData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl>
          <FormLabel>Occupation</FormLabel>
          <Input size="sm" variant="outline" {...register("occupation")} />
        </FormControl>
        <FormControl>
          <FormLabel>Marital Status</FormLabel>
          <Select size="sm" variant="outline" {...register("maritalStatus")}>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Living Situation</FormLabel>
          <Input size="sm" variant="outline" {...register("livingSituation")} />
        </FormControl>
        <FormControl>
          <FormLabel>Educational Background</FormLabel>
          <Input size="sm" variant="outline" {...register("educationalBackground")} />
        </FormControl>
        <FormControl>
          <FormLabel>Financial Status</FormLabel>
          <Input size="sm" variant="outline" {...register("financialStatus")} />
        </FormControl>
        <FormControl>
          <FormLabel>Substance Use</FormLabel>
          <Input size="sm" variant="outline" {...register("substanceUse")} />
        </FormControl>
        <FormControl>
          <FormLabel>Diet and Exercise</FormLabel>
          <Input size="sm" variant="outline" {...register("dietAndExercise")} />
        </FormControl>
        <FormControl>
          <FormLabel>Cultural and Religious Background</FormLabel>
          <Input size="sm" variant="outline" {...register("culturalAndReligiousBackground")} />
        </FormControl>
        <FormControl>
          <FormLabel>Hobbies and Interests</FormLabel>
          <Input size="sm" variant="outline" {...register("hobbiesAndInterests")} />
        </FormControl>
        <Button w={150} colorScheme="green" variant="solid" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default SocialHxForm;

// {
//   "patientId": "65ccf745517265b9bbffc452",
//   "occupation": "Software Developer",
//   "maritalStatus": "Single",
//   "livingSituation": "Living alone in a rented apartment",
//   "educationalBackground": "Bachelor's degree in Computer Science",
//   "financialStatus": "Stable",
//   "substanceUse": "Occasional alcohol, no tobacco or drugs",
//   "dietAndExercise": "Vegetarian diet, exercises 3 times a week",
//   "culturalAndReligiousBackground": "Atheist, Caucasian",
//   "hobbiesAndInterests": "Reading, coding, hiking"
// }
