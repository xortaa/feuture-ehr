import connectToDatabase from "@/utils/database";
import Assessment from "@/models/assessment";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const assessments = await Assessment.find({});
    return NextResponse.json(assessments, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get assessment", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const assessmentData = await NextRequest.json();
    const newAssessment = await Assessment.create(assessmentData);
    const patientId = assessmentData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { assessment: newAssessment._id } },
      { new: true }
    );
    return NextResponse.json({ assessment: newAssessment, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create assessment", { status: 500 });
  }
};
