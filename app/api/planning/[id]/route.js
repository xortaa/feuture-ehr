import connectToDatabase from "@/utils/database";
import Planning from "@/models/planning";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const planning = await Planning.findById(id);
    if (!planning) {
      return NextResponse.json("Planning not found", { status: 404 });
    }
    return NextResponse.json(planning, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get planning", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const planningData = await NextRequest.json();
    const updatedPlanning = await Planning.findByIdAndUpdate(id, planningData, { new: true });
    if (!updatedPlanning) {
      return NextResponse.json("Planning not found", { status: 404 });
    }
    return NextResponse.json(updatedPlanning, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update planning", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedPlanning = await Planning.findByIdAndDelete(id);
    if (!deletedPlanning) {
      return NextResponse.json("Planning not found", { status: 404 });
    }
    return NextResponse.json(deletedPlanning, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete planning", { status: 500 });
  }
};
