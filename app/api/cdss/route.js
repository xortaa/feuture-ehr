import connectToDatabase from "@/utils/database";
import Cdss from "@/models/cdss";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const cdsss = await Cdss.find({});
    return NextResponse.json(cdsss, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get cdss", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const cdssData = await NextRequest.json();
    const newCdss = await Cdss.create(cdssData);
    const patientId = cdssData.patientId;
    const patient = await Patient.findByIdAndUpdate(patientId, { $push: { cdss: newCdss._id } }, { new: true });
    return NextResponse.json({ cdss: newCdss, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create cdss", { status: 500 });
  }
};
