"use client";

import { Heading, Input, Select, Button, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function EditIntakeOutput({ params }) {
  const router = useRouter();
  const [intakeOutputData, setIntakeOutputData] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get(`/api/intakeOutput/${params.id}`).then((res) => {
      setIntakeOutputData(res.data);
      for (const [key, value] of Object.entries(res.data)) {
        setValue(key, value);
      }
    });
  }, []);

  const onSubmit = (data) => {
    axios.patch(`/api/intakeOutput/${params.id}`, data).then((res) => {
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
          Edit IntakeOutput
        </Heading>
        <Button colorScheme="green" variant="outline" size="sm" onClick={handleRedirectBack}>
          Back To Patient
        </Button>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)} className="bg">
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Intake Time</FormLabel>
            <Input size="sm" variant="outline" {...register("intakeTime")} />
          </FormControl>
          <FormControl>
            <FormLabel>Type of Intake</FormLabel>
            <Input size="sm" variant="outline" {...register("intakeType")} />
          </FormControl>
          <FormControl>
            <FormLabel>Amount of Intake</FormLabel>
            <Input size="sm" variant="outline" {...register("intakeAmount")} />
          </FormControl>
          <FormControl>
            <FormLabel>Output Time</FormLabel>
            <Input size="sm" variant="outline" {...register("outputTime")} />
          </FormControl>
          <FormControl>
            <FormLabel>Type of Output</FormLabel>
            <Input size="sm" variant="outline" {...register("outputType")} />
          </FormControl>
          <FormControl>
            <FormLabel>Amount of Output</FormLabel>
            <Input size="sm" variant="outline" {...register("outputAmount")} />
          </FormControl>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input type="date" size="sm" variant="outline" {...register("date")} />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
export default EditIntakeOutput;
