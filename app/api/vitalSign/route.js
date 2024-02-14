import connectToDatabase from "@/utils/database";
import VitalSign from "@/models/vitalSign";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const vitalSigns = await VitalSign.find({});
    return NextResponse.json(vitalSigns, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get vitalSigns", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const vitalSignData = await NextRequest.json();
    const newVitalSign = await VitalSign.create(vitalSignData);
    const patientId = vitalSignData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { vitalSign: newVitalSign._id } },
      { new: true }
    );
    return NextResponse.json({ vitalSign: newVitalSign, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create vitalSign", { status: 500 });
  }
};
