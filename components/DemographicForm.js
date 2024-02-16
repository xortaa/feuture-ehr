"use client";

import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";

function DemographicForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("/api/patient", data).then((res) => {
      console.log(res);
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <FormControl variant="floating">
          <FormLabel>First Name</FormLabel>
          <Input size="sm" variant="outline" {...register("firstName")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Last Name</FormLabel>
          <Input size="sm" variant="outline" {...register("lastName")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Age</FormLabel>
          <Input size="sm" variant="outline" {...register("age")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Date of Birth</FormLabel>
          <Input size="sm" variant="outline" {...register("dob")} type="date" />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Address</FormLabel>
          <Input size="sm" variant="outline" {...register("address")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Phone Number</FormLabel>
          <Input size="sm" variant="outline" {...register("phoneNumber")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Religion</FormLabel>
          <Input size="sm" variant="outline" {...register("religion")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Ethinicity</FormLabel>
          <Input size="sm" variant="outline" {...register("ethnicity")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Occupation</FormLabel>
          <Input size="sm" variant="outline" {...register("occupation")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Marital Status</FormLabel>
          <Select size="sm" variant="outline" {...register("maritalStatus")}>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </Select>
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Spouse Name</FormLabel>
          <Input size="sm" variant="outline" {...register("spouseName")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Number of Children</FormLabel>
          <Input size="sm" variant="outline" {...register("numberOfChildren")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Emergency Contact First Name</FormLabel>
          <Input size="sm" variant="outline" {...register("emergencyContactFirstName")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Emergency Contact Last Name</FormLabel>
          <Input size="sm" variant="outline" {...register("emergencyContactLastName")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Emergency Contact Relationship</FormLabel>
          <Input size="sm" variant="outline" {...register("emergencyContactRelationship")} />
        </FormControl>
        <FormControl variant="floating">
          <FormLabel>Emergency Contact Number</FormLabel>
          <Input size="sm" variant="outline" {...register("emergencyContactNumber")} />
        </FormControl>
        <Button w={150} colorScheme="green" variant="solid" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default DemographicForm;

// {
//   "firstName": "John",
//   "lastName": "Doe",
//   "age": 30,
//   "dob": "1991-06-24",
//   "address": "123 Main St",
//   "religion": "Atheist",
//   "ethnicity": "Caucasian",
//   "occupation": "Software Developer",
//   "maritalStatus": "Single",
//   "spouseName": "",
//   "numberOfChildren": 0,
//   "emergencyContactFirstName": "Jane",
//   "emergencyContactLastName": "Doe",
//   "emergencyContactRelationship": "Sister",
//   "emergencyContactNumber": "123-456-7890"
// }
