"use client";

import Link from "next/link";
import styles from "@/styles/patientCard.module.css";

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
    <Link href={`/profile/${id}`} className={styles.cardLink}>
      <div className={styles.patientCard}>
        <h3>
          {firstName} {lastName}
        </h3>
        <p>Age: {age}</p>
        <p>Occupation: {occupation}</p>
        <p>Address: {address}</p>
        <p>
          Emergency Contact: {emergencyContactFirstName} {emergencyContactLastName}, {emergencyContactNumber}
        </p>
      </div>
    </Link>
  );
}
export default PatientCard;
