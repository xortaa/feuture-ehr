import connectToDatabase from "@/utils/database";
import Immunization from "@/models/immunization";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const immunizations = await Immunization.find({});
    return NextResponse.json(immunizations, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get immunizations", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const immunizationData = await NextRequest.json();
    const newImmunization = await Immunization.create(immunizationData);
    const patientId = immunizationData.patientId;
    const patient = await Patient.findByIdAndUpdate(patientId, { $push: { immunization: newImmunization._id } }, { new: true });
    return NextResponse.json({ immunization: newImmunization, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create immunization", { status: 500 });
  }
};
