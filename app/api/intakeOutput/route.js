import connectToDatabase from "@/utils/database";
import IntakeOutput from "@/models/intakeOutput";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const intakeOutputs = await IntakeOutput.find({});
    return NextResponse.json(intakeOutputs, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get intakeOutputs", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const intakeOutputData = await NextRequest.json();
    const newIntakeOutput = await IntakeOutput.create(intakeOutputData);
    const patientId = intakeOutputData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { intakeOutput: newIntakeOutput._id } },
      { new: true }
    );
    return NextResponse.json({ intakeOutput: newIntakeOutput, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create intakeOutput", { status: 500 });
  }
};
