"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import axios from "axios";
import AllergenTable from "./AllergenTable";

function AllergenPreview({ allergen, id }) {
  const [allergens, setAllergens] = useState(allergen);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/allergen", newData).then((res) => {
      if (res.status === 200) {
        setAllergens([...allergens, res.data.allergen]);
      }
    });
  };

  const handleDelete = (id) => {
    setAllergens(allergens.filter((allergen) => allergen._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Allergens
      </Heading>
      <AllergenTable allergens={allergens} onDelete={handleDelete} />;
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl>
            <FormLabel>Allergen Name</FormLabel>
            <Input size="sm" variant="outline" {...register("allergenName")} />
          </FormControl>
          <FormControl>
            <FormLabel>Reaction</FormLabel>
            <Input size="sm" variant="outline" {...register("reaction")} />
          </FormControl>
          <FormControl>
            <FormLabel>Severity</FormLabel>
            <Select size="sm" variant="outline" {...register("severity")}>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Onset</FormLabel>
            <Input type="date" size="sm" variant="outline" {...register("onset")} />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default AllergenPreview;
