"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/page.module.css";
import PatientCard from "@/components/PatientCard";
import axios from "axios";
import { Stack } from "@chakra-ui/react";

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
    <div className={styles.homePage}>
      <div
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}
      ></div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Stack>
            {records.map((record) => (
              <PatientCard
                key={record._id}
                id={record._id}
                firstName={record.firstName}
                lastName={record.lastName}
                age={record.age}
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
