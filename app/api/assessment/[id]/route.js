import connectToDatabase from "@/utils/database";
import Assessment from "@/models/assessment";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const assessment = await Assessment.findById(id);
    if (!assessment) {
      return NextResponse.json("Assessment not found", { status: 404 });
    }
    return NextResponse.json(assessment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get assessment", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const assessmentData = await NextRequest.json();
    const updatedAssessment = await Assessment.findByIdAndUpdate(id, assessmentData, { new: true });
    if (!updatedAssessment) {
      return NextResponse.json("Assessment not found", { status: 404 });
    }
    return NextResponse.json(updatedAssessment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update assessment", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedAssessment = await Assessment.findByIdAndDelete(id);
    if (!deletedAssessment) {
      return NextResponse.json("Assessment not found", { status: 404 });
    }
    return NextResponse.json(deletedAssessment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete assessment", { status: 500 });
  }
};
