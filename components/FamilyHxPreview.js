import { useForm } from "react-hook-form";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import FamilyHxTable from "./FamilyHxTable";

function FamilyHxPreview({ familyHx, id }) {
  const [familyHxs, setFamilyHxs] = useState(familyHx);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, patientId: id };
    axios.post("/api/familyHx", newData).then((res) => {
      if (res.status === 200) {
        setFamilyHxs([...familyHxs, res.data.familyHx]);
      }
    });
  };

  const handleDelete = (id) => {
    setFamilyHxs(familyHxs.filter((familyHx) => familyHx._id !== id));
  };

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        FamilyHx
      </Heading>
      <FamilyHxTable familyHxs={familyHxs} onDelete={handleDelete} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
          <FormControl variant="floating">
            <FormLabel>First Name</FormLabel>
            <Input size="sm" variant="outline" placeholder="First Name" {...register("firstName")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Last Name</FormLabel>
            <Input size="sm" variant="outline" placeholder="Last Name" {...register("lastName")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Relationship</FormLabel>
            <Input size="sm" variant="outline" placeholder="Relationship" {...register("relationship")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Age</FormLabel>
            <Input size="sm" variant="outline" placeholder="Age" {...register("age")} />
          </FormControl>
          <FormControl variant="floating">
            <FormLabel>Related Diseases</FormLabel>
            <Input size="sm" variant="outline" placeholder="Related Diseases" {...register("relatedDiseases")} />
          </FormControl>
          <Button w={150} colorScheme="green" variant="solid" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default FamilyHxPreview;
