"use client";

import { Heading, Input, Select, Button, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function EditSocialHx({ params }) {
  const router = useRouter();
  const [socialHxData, setSocialHxData] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get(`/api/socialHx/${params.id}`).then((res) => {
      setSocialHxData(res.data);
      for (const [key, value] of Object.entries(res.data)) {
        setValue(key, value);
      }
    });
  }, []);

  const onSubmit = (data) => {
    axios.patch(`/api/socialHx/${params.id}`, data).then((res) => {
      console.log(res);
      if (res.status === 200) {
        router.back();
      }
    });
  };

  const handleRedirectBack = () => {
    router.back();
  };

  return (
    <div style={{ margin: "30px 60px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} pb={3}>
        <Heading size="xl" noOfLines={1}>
          Edit SocialHx
        </Heading>
        <Button colorScheme="green" variant="outline" size="sm" onClick={handleRedirectBack}>
          Back To Patient
        </Button>
      </Stack>

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
    </div>
  );
}
export default EditSocialHx;
