import {
  useColorModeValue,
  Card,
  CardHeader,
  Heading,
  Stack,
  CardBody,
  Box,
  Text,
  CardFooter,
  StackDivider,
} from "@chakra-ui/react";
import Link from "next/link";

function PatientCard({ id, firstName, lastName, phoneNumber, address }) {
  const headerBg = useColorModeValue("green.500", "green.200");

  return (
    <Link href={`/profile/${id}`}>
      <Card p={3} shadow="md" borderWidth="1px">
        <CardHeader bg="green" color="white" p={2} borderRadius={5}>
          <Heading size="md">
            {firstName} {lastName}
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="2">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Address
              </Heading>
              <Text pt="2" fontSize="sm">
                {address}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Phone Number
              </Heading>
              <Text pt="2" fontSize="sm">
                {phoneNumber}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
}

export default PatientCard;
