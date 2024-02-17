"use client";

import { Heading, Input, Select, Button, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function EditFamilyHx({ params, patientId }) {
  const router = useRouter();
  const [familyHxData, setFamilyHxData] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get(`/api/familyHx/${params.id}`).then((res) => {
      setFamilyHxData(res.data);
      for (const [key, value] of Object.entries(res.data)) {
        setValue(key, value);
      }
    });
  }, []);

  const onSubmit = (data) => {
    axios.patch(`/api/familyHx/${params.id}`, data).then((res) => {
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
    <div style={{ margin: "30px 60px" }} className="bg">
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} pb={3}>
        <Heading size="xl" noOfLines={1}>
          Edit FamilyHx
        </Heading>
        <Button colorScheme="green" variant="outline" size="sm" onClick={handleRedirectBack}>
          Back To Patient
        </Button>
      </Stack>

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
    </div>
  );
}
export default EditFamilyHx;
