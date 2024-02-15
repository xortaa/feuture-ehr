"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/page.module.css";
import PatientCard from "@/components/PatientCard";
import axios from "axios";
import { Typography, Button } from "@mui/material";

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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <Typography variant="h4" component="div">
          Patients Record
        </Typography>
        <Button variant="contained">+ Add New Patient</Button>
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          records.map((record) => (
            <PatientCard
              key={record._id}
              id={record._id}
              firstName={record.firstName}
              lastName={record.lastName}
              age={record.age}
              occupation={record.occupation}
              address={record.address}
              emergencyContactFirstName={record.emergencyContactFirstName}
              emergencyContactLastName={record.emergencyContactLastName}
              emergencyContactNumber={record.emergencyContactNumber}
            />
          ))
        )}
      </div>
    </div>
  );
}
