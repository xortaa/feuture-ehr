import connectToDatabase from "@/utils/database";
import NurseNotes from "@/models/nurseNotes";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const nurseNotes = await NurseNotes.findById(id);
    if (!nurseNotes) {
      return NextResponse.json("NurseNotes not found", { status: 404 });
    }
    return NextResponse.json(nurseNotes, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get nurseNotes", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const nurseNotesData = await NextRequest.json();
    const updatedNurseNotes = await NurseNotes.findByIdAndUpdate(id, nurseNotesData, { new: true });
    if (!updatedNurseNotes) {
      return NextResponse.json("NurseNotes not found", { status: 404 });
    }
    return NextResponse.json(updatedNurseNotes, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update nurseNotes", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedNurseNotes = await NurseNotes.findByIdAndDelete(id);
    if (!deletedNurseNotes) {
      return NextResponse.json("NurseNotes not found", { status: 404 });
    }
    return NextResponse.json(deletedNurseNotes, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete nurseNotes", { status: 500 });
  }
};
