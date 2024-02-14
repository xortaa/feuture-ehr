import connectToDatabase from "@/utils/database";
import Lab from "@/models/lab";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const labs = await Lab.find({});
    return NextResponse.json(labs, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get labs", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const labData = await NextRequest.json();
    const newLab = await Lab.create(labData);
    const patientId = labData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { lab: newLab._id } },
      { new: true }
    );
    return NextResponse.json({ lab: newLab, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create lab", { status: 500 });
  }
};
