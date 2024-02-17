"use client";

import { Heading, Input, Select, Button, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function EditHPI({ params }) {
  const router = useRouter();
  const [hpiData, setHpiData] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get(`/api/hpi/${params.id}`).then((res) => {
      setHpiData(res.data);
      for (const [key, value] of Object.entries(res.data)) {
        setValue(key, value);
      }
    });
  }, []);

  const onSubmit = (data) => {
    axios.patch(`/api/hpi/${params.id}`, data).then((res) => {
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
          Edit HPI
        </Heading>
        <Button colorScheme="green" variant="outline" size="sm" onClick={handleRedirectBack}>
          Back To Patient
        </Button>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl variant="floating">
            <FormLabel>Chief Complaint</FormLabel>
            <Input size="sm" variant="outline" {...register("chiefComplaint")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Duration</FormLabel>
            <Input size="sm" variant="outline" {...register("duration")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Severity</FormLabel>
            <Select size="sm" variant="outline" {...register("severity")}>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </Select>
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Onset</FormLabel>
            <Input size="sm" variant="outline" {...register("onset")} type="date" />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Associated Symptoms</FormLabel>
            <Input size="sm" variant="outline" {...register("associatedSymptoms")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Current Medications</FormLabel>
            <Input size="sm" variant="outline" {...register("currentMedications")} />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
export default EditHPI;
