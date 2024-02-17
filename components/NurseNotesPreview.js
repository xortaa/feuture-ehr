"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import NurseNotesTable from "./NurseNotesTable";

function NurseNotesPreview({ nurseNotes, id }) {
  const [nurseNotess, setNurseNotess] = useState(nurseNotes);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/nurseNotes", newData).then((res) => {
      if (res.status === 200) {
        setNurseNotess([...nurseNotess, res.data.nurseNotes]);
      }
    });
  };

  const handleDelete = (id) => {
    setNurseNotess(nurseNotess.filter((nurseNotes) => nurseNotes._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Nurse Notes
      </Heading>
      <NurseNotesTable nurseNotess={nurseNotess} onDelete={handleDelete} />;
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input size="sm" variant="outline" {...register("date")} type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>Time</FormLabel>
            <Input size="sm" variant="outline" {...register("time")} />
          </FormControl>
          <FormControl>
            <FormLabel>Nurse Notes</FormLabel>
            <Input size="sm" variant="outline" {...register("nurseNotes")} />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default NurseNotesPreview;
