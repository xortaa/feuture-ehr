import connectToDatabase from "@/utils/database";
import Planning from "@/models/planning";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const plannings = await Planning.find({});
    return NextResponse.json(plannings, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get planning", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const planningData = await NextRequest.json();
    const newPlanning = await Planning.create(planningData);
    const patientId = planningData.patientId;
    const patient = await Patient.findByIdAndUpdate(patientId, { $push: { planning: newPlanning._id } }, { new: true });
    return NextResponse.json({ planning: newPlanning, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create planning", { status: 500 });
  }
};
