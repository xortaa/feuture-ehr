"use client";

import { Heading, Input, Select, Button, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function EditMeasurement({ params }) {
  const router = useRouter();
  const [measurementData, setMeasurementData] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get(`/api/measurement/${params.id}`).then((res) => {
      setMeasurementData(res.data);
      for (const [key, value] of Object.entries(res.data)) {
        setValue(key, value);
      }
    });
  }, []);

  const onSubmit = (data) => {
    axios.patch(`/api/measurement/${params.id}`, data).then((res) => {
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
          Edit Measurement
        </Heading>
        <Button colorScheme="green" variant="outline" size="sm" onClick={handleRedirectBack}>
          Back To Patient
        </Button>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Height</FormLabel>
            <Input size="sm" variant="outline" {...register("height")} />
          </FormControl>
          <FormControl>
            <FormLabel>Weight</FormLabel>
            <Input size="sm" variant="outline" {...register("weight")} />
          </FormControl>
          <FormControl>
            <FormLabel>BMI</FormLabel>
            <Input size="sm" variant="outline" {...register("bmi")} />
          </FormControl>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input size="sm" variant="outline" {...register("date")} type="date" />
          </FormControl>
          <Button type="submit" colorScheme="green" variant="solid" w={150}>
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
export default EditMeasurement;
