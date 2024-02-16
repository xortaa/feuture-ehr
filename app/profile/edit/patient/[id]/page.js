"use client";

import { Heading, Input, Select, Button, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function EditPatientPage({ params }) {
  const router = useRouter();
  const [patientData, setPatientData] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get(`/api/patient/${params.id}`).then((res) => {
      setPatientData(res.data);
      for (const [key, value] of Object.entries(res.data)) {
        setValue(key, value);
      }
    });
  }, []);

  const onSubmit = (data) => {
    axios.patch(`/api/patient/${params.id}`, data).then((res) => {
      console.log(res);
      if (res.status === 200) {
        router.back();
      }
    });
  };

  const handleRedirectBack = () => {
    router.push(`/profile/${params.id}`);
  };

  return (
    <div style={{ margin: "30px 60px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} pb={3}>
        <Heading size="xl" noOfLines={1}>
          Edit Patient
        </Heading>
        <Button colorScheme="green" variant="outline" size="sm" onClick={handleRedirectBack}>
          Back To Patient
        </Button>
      </Stack>

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
    </div>
  );
}
export default EditPatientPage;
