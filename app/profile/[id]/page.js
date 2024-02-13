"use client";

function PatientProfile({ params }) {
  // console.log params
  const { id } = params;

  return <div>Id: {id}</div>;
}
export default PatientProfile;
