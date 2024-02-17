"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/page.module.css";
import PatientCard from "@/components/PatientCard";
import axios from "axios";
import { Stack, Heading, Button, Grid, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Home() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/patient");
      setRecords(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div style={{ margin: "30px 60px" }} className="bg">
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} pb={3}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo} width={80} height={80} alt="logo" />
          <Text size="xl" noOfLines={1}>
            Tamaraw Medical Center Patient Records
          </Text>
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
          <Grid mx={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={3}>
            {records.map((record) => (
              <PatientCard
                id={record._id}
                key={record._id}
                firstName={record.firstName}
                lastName={record.lastName}
                address={record.address}
                phoneNumber={record.phoneNumber}
              />
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
