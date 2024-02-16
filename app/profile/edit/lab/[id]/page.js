"use client";

import { Heading, Input, Select, Button, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function EditLab({ params }) {
  const router = useRouter();
  const [labData, setLabData] = useState([]);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "result",
  });

  useEffect(() => {
    axios.get(`/api/lab/${params.id}`).then((res) => {
      setLabData(res.data);
      for (const [key, value] of Object.entries(res.data)) {
        setValue(key, value);
      }
    });
  }, []);

  const onSubmit = (data) => {
    axios.patch(`/api/lab/${params.id}`, data).then((res) => {
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
          Edit Lab
        </Heading>
        <Button colorScheme="green" variant="outline" size="sm" onClick={handleRedirectBack}>
          Back To Patient
        </Button>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white">
          <Button
            w={150}
            colorScheme="yellow"
            variant="outline"
            onClick={() => append({ testName: "", testResult: "" })}
          >
            Add lab test input
          </Button>
          {fields.map((field, index) => (
            <Stack direction="row">
              <FormControl variant="floating">
                <FormLabel>Test Name</FormLabel>
                <Input size="sm" variant="outline" {...register(`results.${index}.testName`)} />
              </FormControl>
              <FormControl variant="floating">
                <FormLabel>Test Result</FormLabel>
                <Input size="sm" variant="outline" {...register(`results.${index}.testResult`)} />
              </FormControl>
            </Stack>
          ))}
          <FormControl variant="floating">
            <FormLabel>Test Date</FormLabel>
            <Input {...register("date")} type="date" />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
export default EditLab;
