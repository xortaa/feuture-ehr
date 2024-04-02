import connectToDatabase from "@/utils/database";
import Intervention from "@/models/intervention";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const interventions = await Intervention.find({});
    return NextResponse.json(interventions, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get intervention", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const interventionData = await NextRequest.json();
    const newIntervention = await Intervention.create(interventionData);
    const patientId = interventionData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { intervention: newIntervention._id } },
      { new: true }
    );
    return NextResponse.json({ intervention: newIntervention, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create intervention", { status: 500 });
  }
};
