import connectToDatabase from "@/utils/database";
import NurseNotes from "@/models/nurseNotes";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const nurseNotess = await NurseNotes.find({});
    return NextResponse.json(nurseNotess, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get nurseNotess", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const nurseNotesData = await NextRequest.json();
    const newNurseNotes = await NurseNotes.create(nurseNotesData);
    const patientId = nurseNotesData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { nurseNotes: newNurseNotes._id } },
      { new: true }
    );
    return NextResponse.json({ nurseNotes: newNurseNotes, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create nurseNotes", { status: 500 });
  }
};
