import connectToDatabase from "@/utils/database";
import Diagnosis from "@/models/diagnosis";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const diagnosis = await Diagnosis.findById(id);
    if (!diagnosis) {
      return NextResponse.json("Diagnosis not found", { status: 404 });
    }
    return NextResponse.json(diagnosis, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get diagnosis", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const diagnosisData = await NextRequest.json();
    const updatedDiagnosis = await Diagnosis.findByIdAndUpdate(id, diagnosisData, { new: true });
    if (!updatedDiagnosis) {
      return NextResponse.json("Diagnosis not found", { status: 404 });
    }
    return NextResponse.json(updatedDiagnosis, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update diagnosis", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedDiagnosis = await Diagnosis.findByIdAndDelete(id);
    if (!deletedDiagnosis) {
      return NextResponse.json("Diagnosis not found", { status: 404 });
    }
    return NextResponse.json(deletedDiagnosis, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete diagnosis", { status: 500 });
  }
};
