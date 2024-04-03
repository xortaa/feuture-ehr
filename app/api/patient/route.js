import connectToDatabase from "@/utils/database";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const patients = await Patient.find({})
      .populate("allergen")
      .populate("familyHx")
      .populate("hpi")
      .populate("immunization")
      .populate("lab")
      .populate("medication")
      .populate("socialHx")
      .populate("vitalSign")
      .populate("measurement")
      .populate("intakeOutput")
      .populate("nurseNotes")
      .populate("assessment")
      .populate("diagnosis")
      .populate("planning")
      .populate("intervention")
      .populate("evaluation")
      .populate("cdss")
      .exec();
    return NextResponse.json(patients, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get patients", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const patientData = await NextRequest.json();
    const patient = await Patient.create(patientData);
    return NextResponse.json(patient, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create patient", { status: 500 });
  }
};
