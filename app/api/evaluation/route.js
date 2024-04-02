import connectToDatabase from "@/utils/database";
import Evaluation from "@/models/evaluation";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const evaluations = await Evaluation.find({});
    return NextResponse.json(evaluations, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get evaluation", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const evaluationData = await NextRequest.json();
    const newEvaluation = await Evaluation.create(evaluationData);
    const patientId = evaluationData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { evaluation: newEvaluation._id } },
      { new: true }
    );
    return NextResponse.json({ evaluation: newEvaluation, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create evaluation", { status: 500 });
  }
};
