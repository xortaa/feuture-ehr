import connectToDatabase from "@/utils/database";
import Measurement from "@/models/measurement";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, params) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const measurement = await Measurement.findById(id);
    if (!measurement) {
      return NextResponse.json("Measurement not found", { status: 404 });
    }
    return NextResponse.json(measurement, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get measurement", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const measurementData = await NextRequest.json();
    const updatedMeasurement = await Measurement.findByIdAndUpdate(id, measurementData, { new: true });
    if (!updatedMeasurement) {
      return NextResponse.json("Measurement not found", { status: 404 });
    }
    return NextResponse.json(updatedMeasurement, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update measurement", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedMeasurement = await Measurement.findByIdAndDelete(id);
    if (!deletedMeasurement) {
      return NextResponse.json("Measurement not found", { status: 404 });
    }
    return NextResponse.json(deletedMeasurement, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete measurement", { status: 500 });
  }
};
