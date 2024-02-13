"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import PatientCard from "@/components/PatientCard";
import LabForm from "@/components/LabForm";

export default function Home() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/patient").then((res) => {
      setRecords(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <main>
      <button>Add a new record</button>
      <h1>Records</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {records.map((record) => (
            <Link href={`/profile/${record._id}`} key={record.id}>
              <PatientCard name={record.name} age={record.age} />
            </Link>
          ))}
        </div>
      )}
      <LabForm />
    </main>
  );
}
