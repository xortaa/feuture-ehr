import connectToDatabase from "@/utils/database";
import Diagnosis from "@/models/diagnosis";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const diagnoses = await Diagnosis.find({});
    return NextResponse.json(diagnoses, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get diagnosis", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const diagnosisData = await NextRequest.json();
    const newDiagnosis = await Diagnosis.create(diagnosisData);
    const patientId = diagnosisData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { diagnosis: newDiagnosis._id } },
      { new: true }
    );
    return NextResponse.json({ diagnosis: newDiagnosis, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create diagnosis", { status: 500 });
  }
};
