"use client";

import Link from "next/link";
import styles from "@/styles/patientCard.module.css";
import { Typography, Card, CardContent } from "@mui/material";

function PatientCard({
  id,
  firstName,
  lastName,
  age,
  occupation,
  address,
  emergencyContactFirstName,
  emergencyContactLastName,
  emergencyContactNumber,
}) {
  return (
    <Link href={`/profile/${id}`}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {firstName} {lastName}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Age: {age}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Occupation: {occupation}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Address: {address}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Emergency Contact: {emergencyContactFirstName} {emergencyContactLastName}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Emergenc Contact #: {emergencyContactNumber}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
export default PatientCard;
