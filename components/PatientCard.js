"use client";

import Link from "next/link";
import styles from "@/styles/patientCard.module.css";
import { Card, CardHeader, CardBody, CardFooter, Box, Heading, Text, Stack, StackDivider } from "@chakra-ui/react";

function PatientCard({
  id,
  firstName,
  lastName,
  age,
  phoneNumber,
  address,
}) {
  return (
    <Link href={`/profile/${id}`}>
      <Card>
        <CardHeader>
          <Heading size="md">{firstName} {lastName}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Age
              </Heading>
              <Text pt="2" fontSize="sm">
                {age}
              </Text>
            </Box>
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
