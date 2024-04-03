"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import CdssTable from "./CdssTable";

function CdssPreview({ cdss, id }) {
  const [cdsss, setCdsss] = useState(cdss);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/cdss", newData).then((res) => {
      if (res.status === 200) {
        setCdsss([...cdsss, res.data.cdss]);
      }
    });
  };

  const handleDelete = (id) => {
    setCdsss(cdsss.filter((cdss) => cdss._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        CDSS
      </Heading>
      <CdssTable setCdsss={setCdsss} cdsss={cdsss} onDelete={handleDelete} />;
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Alert</FormLabel>
            <Input size="sm" variant="outline" {...register("alert")} />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default CdssPreview;
