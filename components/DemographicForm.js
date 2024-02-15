"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Stack,
  Input,
  Button,
  Select,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import axios from 'axios'

function DemographicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [dateInputType, setDateInputType] = useState("text");

  const maritalStatus = watch("maritalStatus");

  const onSubmit = (data) => {
    axios.post("/api/patient", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
        <Input size="sm" variant="outline" placeholder="First Name" {...register("firstName")} />
        <Input size="sm" variant="outline" placeholder="Last Name" {...register("lastName")} />
        <Input size="sm" variant="outline" placeholder="Age" {...register("age")} />
        <Input
          size="sm"
          variant="outline"
          placeholder="Date of Birth"
          {...register("dob")}
          type={dateInputType}
          onFocus={() => setDateInputType("date")}
          onBlur={() => setDateInputType("text")}
        />
        <Input size="sm" variant="outline" placeholder="Address" {...register("address")} />
        <Input size="sm" variant="outline" placeholder="Phone Number" {...register("phoneNumber")} />
        <Input size="sm" variant="outline" placeholder="Religion" {...register("religion")} />
        <Input size="sm" variant="outline" placeholder="Ethinicity" {...register("ethnicity")} />
        <Input size="sm" variant="outline" placeholder="Occupation" {...register("occupation")} />
        <Select size="sm" variant="outline" placeholder="Marital Status" {...register("maritalStatus")}>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </Select>
        <Input
          disabled={!maritalStatus === "married"}
          size="sm"
          variant="outline"
          placeholder="Spouse Name"
          {...register("spouseName")}
        />
        <Input size="sm" variant="outline" placeholder="Number of Children" {...register("numberOfChildren")} />
        <Input
          size="sm"
          variant="outline"
          placeholder="Emergency Contact First Name"
          {...register("emergencyContactFirstName")}
        />
        <Input
          size="sm"
          variant="outline"
          placeholder="Emergency Contact Last Name"
          {...register("emergencyContactLastName")}
        />
        <Input
          size="sm"
          variant="outline"
          placeholder="Emergency Contact Relationship"
          {...register("emergencyContactRelationship")}
        />
        <Input
          size="sm"
          variant="outline"
          placeholder="Emergency Contact Number"
          {...register("emergencyContactNumber")}
        />
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
