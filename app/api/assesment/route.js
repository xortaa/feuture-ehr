import connectToDatabase from "@/utils/database";
import Assesment from "@/models/assesment";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const assesments = await Assesment.find({});
    return NextResponse.json(assesments, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get assesment", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const assesmentData = await NextRequest.json();
    const newAssesment = await Assesment.create(assesmentData);
    const patientId = assesmentData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { assesment: newAssesment._id } },
      { new: true }
    );
    return NextResponse.json({ assesment: newAssesment, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create assesment", { status: 500 });
  }
};
