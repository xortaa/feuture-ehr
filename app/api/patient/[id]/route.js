import connectToDatabase from "@/utils/database";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const patient = await Patient.findById(id)
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
      .exec();
    if (!patient) {
      return NextResponse.json("Patient not found", { status: 404 });
    }
    return NextResponse.json(patient, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get patient", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const patientData = await NextRequest.json();
    const updatedPatient = await Patient.findByIdAndUpdate(id, patientData, { new: true });
    if (!updatedPatient) {
      return NextResponse.json("Patient not found", { status: 404 });
    }
    return NextResponse.json(updatedPatient, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update patient", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (!deletedPatient) {
      return NextResponse.json("Patient not found", { status: 404 });
    }
    return NextResponse.json(deletedPatient, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete patient", { status: 500 });
  }
};
