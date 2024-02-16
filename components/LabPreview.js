"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import LabTable from "./LabTable";

function LabPreview({ lab, id }) {
  const [labs, setLabs] = useState(lab);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "result",
  });

  const onSubmit = (data) => {
    setLabs([...labs, data]);
    const newData = { ...data, patientId: id };
    axios.post("/api/lab", newData).then((res) => {
      console.log(res);
    });
  };

   const handleDelete = (id) => {
     setLabs(labs.filter((lab) => lab._id !== id));
   };
  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Lab Results
      </Heading>

      <LabTable labs={labs} onDelete={handleDelete}/>

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
                <Input size="sm" variant="outline" {...register(`results.${index}.result`)} />
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
    </Stack>
  );
}
export default LabPreview;
