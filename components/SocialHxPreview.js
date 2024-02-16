"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import SocialHxTable from "./SocialHxTable";

function SocialHxPreview({ socialHx, id }) {
  const [socialHxs, setSocialHxs] = useState(socialHx);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSocialHxs([...socialHxs, data]);
    const newData = { ...data, patientId: id };
    axios.post("/api/socialHx", newData).then((res) => {
      console.log(res);
    });
  };
  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        SocialHx
      </Heading>
      <SocialHxTable socialHxs={socialHxs} />;
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading size="sm">Add a New SocialHx</Heading>
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
    </Stack>
  );
}
export default SocialHxPreview;
