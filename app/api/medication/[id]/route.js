import connectToDatabase from "@/utils/database";
import Medication from "@/models/medication";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, params) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const medication = await Medication.findById(id);
    if (!medication) {
      return NextResponse.json("Medication not found", { status: 404 });
    }
    return NextResponse.json(medication, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get medication", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const medicationData = await NextRequest.json();
    const updatedMedication = await Medication.findByIdAndUpdate(id, medicationData, { new: true });
    if (!updatedMedication) {
      return NextResponse.json("Medication not found", { status: 404 });
    }
    return NextResponse.json(updatedMedication, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update medication", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedMedication = await Medication.findByIdAndDelete(id);
    if (!deletedMedication) {
      return NextResponse.json("Medication not found", { status: 404 });
    }
    return NextResponse.json(deletedMedication, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete medication", { status: 500 });
  }
};
