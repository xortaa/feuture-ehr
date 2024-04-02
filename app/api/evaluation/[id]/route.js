import connectToDatabase from "@/utils/database";
import Evaluation from "@/models/evaluation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const evaluation = await Evaluation.findById(id);
    if (!evaluation) {
      return NextResponse.json("Evaluation not found", { status: 404 });
    }
    return NextResponse.json(evaluation, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get evaluation", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const evaluationData = await NextRequest.json();
    const updatedAssessment = await Assessment.findByIdAndUpdate(id, evaluationData, { new: true });
    if (!updatedEvaluation) {
      return NextResponse.json("Evaluation not found", { status: 404 });
    }
    return NextResponse.json(updatedEvaluation, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update evaluation", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedEvaluation = await Evaluation.findByIdAndDelete(id);
    if (!deletedEvaluation) {
      return NextResponse.json("Evaluation not found", { status: 404 });
    }
    return NextResponse.json(deletedEvaluation, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete evaluation", { status: 500 });
  }
};
