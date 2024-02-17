"use client";

import { Heading, Input, Select, Button, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function EditMedication({ params }) {
  const router = useRouter();
  const [medicationData, setMedicationData] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get(`/api/medication/${params.id}`).then((res) => {
      setMedicationData(res.data);
      for (const [key, value] of Object.entries(res.data)) {
        setValue(key, value);
      }
    });
  }, []);

  const onSubmit = (data) => {
    axios.patch(`/api/medication/${params.id}`, data).then((res) => {
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
          Edit Medication
        </Heading>
        <Button colorScheme="green" variant="outline" size="sm" onClick={handleRedirectBack}>
          Back To Patient
        </Button>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input size="sm" variant="outline" {...register("name")} />
          </FormControl>
          <FormControl>
            <FormLabel>Dose</FormLabel>
            <Input size="sm" variant="outline" {...register("dose")} />
          </FormControl>
          <FormControl>
            <FormLabel>Frequency</FormLabel>
            <Input size="sm" variant="outline" {...register("frequency")} />
          </FormControl>
          <FormControl>
            <FormLabel>Route</FormLabel>
            <Input size="sm" variant="outline" {...register("route")} />
          </FormControl>
          <FormControl>
            <FormLabel>Start Date</FormLabel>
            <Input size="sm" variant="outline" {...register("startDate")} type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>End Date</FormLabel>
            <Input size="sm" variant="outline" {...register("endDate")} type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>Purpose</FormLabel>
            <Input size="sm" variant="outline" {...register("purpose")} />
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select size="sm" variant="outline" {...register("status")}>
              <option value="Stopped">Stopped</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </Select>
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
export default EditMedication;
