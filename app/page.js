"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/page.module.css";
import PatientCard from "@/components/PatientCard";
import axios from "axios";
import { Stack, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";

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
    <div style={{ margin: "30px 60px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} pb={3}>
        <Heading size="2xl" noOfLines={1}>
          Patient Records
        </Heading>
        <Link href="/new">
          <Button colorScheme="green" variant="outline">
            Add A New Record
          </Button>
        </Link>
      </Stack>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Stack spacing={3} mb={3}>
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
          </Stack>
        )}
      </div>
    </div>
  );
}
