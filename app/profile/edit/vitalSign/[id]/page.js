"use client";

import { Heading, Input, Select, Button, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function EditVitalSign({ params }) {
  const router = useRouter();
  const [vitalSignData, setVitalSignData] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get(`/api/vitalSign/${params.id}`).then((res) => {
      setVitalSignData(res.data);
      for (const [key, value] of Object.entries(res.data)) {
        setValue(key, value);
      }
    });
  }, []);

  const onSubmit = (data) => {
    axios.patch(`/api/vitalSign/${params.id}`, data).then((res) => {
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
          Edit VitalSign
        </Heading>
        <Button colorScheme="green" variant="outline" size="sm" onClick={handleRedirectBack}>
          Back To Patient
        </Button>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Temp</FormLabel>
            <Input size="sm" variant="outline" {...register("temp")} />
          </FormControl>
          <FormControl>
            <FormLabel>Pulse</FormLabel>
            <Input size="sm" variant="outline" {...register("pulse")} />
          </FormControl>
          <FormControl>
            <FormLabel>BP</FormLabel>
            <Input size="sm" variant="outline" {...register("bp")} />
          </FormControl>
          <FormControl>
            <FormLabel>Position</FormLabel>
            <Input size="sm" variant="outline" {...register("position")} />
          </FormControl>
          <FormControl>
            <FormLabel>Respirations</FormLabel>
            <Input size="sm" variant="outline" {...register("respirations")} />
          </FormControl>
          <FormControl>
            <FormLabel>Spo2</FormLabel>
            <Input size="sm" variant="outline" {...register("spo2")} />
          </FormControl>
          <FormControl>
            <FormLabel>Oxygen Source</FormLabel>
            <Input size="sm" variant="outline" {...register("oxygenSource")} />
          </FormControl>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input size="sm" variant="outline" {...register("date")} type="date" />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
export default EditVitalSign;
