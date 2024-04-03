"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/page.module.css";
import PatientCard from "@/components/PatientCard";
import axios from "axios";
import {
  Stack,
  Heading,
  Button,
  Grid,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/patient");
      setRecords(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleRedirectPatient = (id) => {
    router.push(`/profile/${id}`);
  };

  return (
    <div style={{ margin: "30px 60px" }} className="bg">
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} pb={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo} width={80} height={80} alt="logo" />
          <Heading size="lg" noOfLines={1} color="green">
            Tamaraw Medical Center Patient Records
          </Heading>
        </Flex>
        <Link href="/new">
          <Button colorScheme="green" variant="outline" size="sm">
            Add A New Record
          </Button>
        </Link>
      </Stack>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Box boxShadow="base" borderRadius="md" bgColor="white" p={4}>
            <TableContainer>
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th>Patient Name</Th>
                    <Th>Occupation</Th>
                    <Th>Address</Th>
                    <Th>Phone Number</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {records.map((record) => (
                    <Tr
                      key={record._id}
                      onClick={() => handleRedirectPatient(record._id)}
                      cursor="pointer"
                      _hover={{
                        background: "green.50",
                      }}
                    >
                      <Td>
                        <div className="flex flex-col justify-center items-start">
                          <p>
                            {record.firstName} {record.lastName}
                          </p>
                          <p className="text-xs text-slate-600">{record.age}</p>
                        </div>
                      </Td>
                      <Td>{record.occupation}</Td>
                      <Td>{record.address}</Td>
                      <Td>{record.phoneNumber}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </div>
    </div>
  );
}
