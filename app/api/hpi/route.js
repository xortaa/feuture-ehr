import connectToDatabase from "@/utils/database";
import Hpi from "@/models/hpi";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const hpis = await Hpi.find({});
    return NextResponse.json(hpis, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get hpis", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const hpiData = await NextRequest.json();
    const newHpi = await Hpi.create(hpiData);
    const patientId = hpiData.patientId;
    const patient = await Patient.findByIdAndUpdate(patientId, { $set: { hpi: newHpi._id } }, { new: true });
    return NextResponse.json({ hpi: newHpi, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create hpi", { status: 500 });
  }
};
