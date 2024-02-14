import connectToDatabase from "@/utils/database";
import Medication from "@/models/medication";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const medications = await Medication.find({});
    return NextResponse.json(medications, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get medications", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const medicationData = await NextRequest.json();
    const newMedication = await Medication.create(medicationData);
    const patientId = medicationData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { medication: newMedication._id } },
      { new: true }
    );
    return NextResponse.json({ medication: newMedication, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create medication", { status: 500 });
  }
};
