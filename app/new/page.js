import DemographicForm from "@/components/DemographicForm";
import Link from "next/link";
import { Heading, Button, Stack } from "@chakra-ui/react";

function NewRecord() {
  return (
    <div style={{ margin: "30px 60px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} pb={3}>
        <Heading size="xl" noOfLines={1}>
          Add A New Patient
        </Heading>
        <Link href="/">
          <Button colorScheme="green" variant="outline" size="sm">
            Back To Patient Records
          </Button>
        </Link>
      </Stack>
      <DemographicForm />
    </div>
  );
}
export default NewRecord;
