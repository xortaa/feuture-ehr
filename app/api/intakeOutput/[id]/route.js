import connectToDatabase from "@/utils/database";
import IntakeOutput from "@/models/intakeOutput";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const intakeOutput = await IntakeOutput.findById(id);
    if (!intakeOutput) {
      return NextResponse.json("IntakeOutput not found", { status: 404 });
    }
    return NextResponse.json(intakeOutput, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get intakeOutput", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const intakeOutputData = await NextRequest.json();
    const updatedIntakeOutput = await IntakeOutput.findByIdAndUpdate(id, intakeOutputData, { new: true });
    if (!updatedIntakeOutput) {
      return NextResponse.json("IntakeOutput not found", { status: 404 });
    }
    return NextResponse.json(updatedIntakeOutput, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update intakeOutput", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedIntakeOutput = await IntakeOutput.findByIdAndDelete(id);
    if (!deletedIntakeOutput) {
      return NextResponse.json("IntakeOutput not found", { status: 404 });
    }
    return NextResponse.json(deletedIntakeOutput, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete intakeOutput", { status: 500 });
  }
};
