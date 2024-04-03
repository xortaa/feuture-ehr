import connectToDatabase from "@/utils/database";
import Intervention from "@/models/intervention";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const intervention = await Intervention.findById(id);
    if (!intervention) {
      return NextResponse.json("Intervention not found", { status: 404 });
    }
    return NextResponse.json(intervention, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get intervention", { status: 500 });
}
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const interventionData = await NextRequest.json();
    const updatedIntervention = await Intervention.findByIdAndUpdate(id, interventionData, { new: true });
    if (!updatedIntervention) {
      return NextResponse.json("Intervention not found", { status: 404 });
    }
    return NextResponse.json(updatedIntervention, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update intervention", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedIntervention = await Intervention.findByIdAndDelete(id);
    if (!deletedIntervention) {
      return NextResponse.json("Intervention not found", { status: 404 });
    }
    return NextResponse.json(deletedIntervention, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete intervention", { status: 500 });
  }
};
