import connectToDatabase from "@/utils/database";
import Measurement from "@/models/measurement";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const measurements = await Measurement.find({});
    return NextResponse.json(measurements, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get measurements", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const measurementData = await NextRequest.json();
    const newMeasurement = await Measurement.create(measurementData);
    const patientId = measurementData.patientId;
    const patient = await Patient.findByIdAndUpdate(patientId, { $push: { measurement: newMeasurement._id } }, { new: true });
    return NextResponse.json({ measurement: newMeasurement, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create measurement", { status: 500 });
  }
};
