import connectToDatabase from "@/utils/database";
import Assesment from "@/models/assesment";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const assesment = await Assesment.findById(id);
    if (!assesment) {
      return NextResponse.json("Assesment not found", { status: 404 });
    }
    return NextResponse.json(assesment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get assesment", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const assesmentData = await NextRequest.json();
    const updatedAssesment = await Assesment.findByIdAndUpdate(id, assesmentData, { new: true });
    if (!updatedAssesment) {
      return NextResponse.json("Assesment not found", { status: 404 });
    }
    return NextResponse.json(updatedAssesment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update assesment", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedAssesment = await Assesment.findByIdAndDelete(id);
    if (!deletedAssesment) {
      return NextResponse.json("Assesment not found", { status: 404 });
    }
    return NextResponse.json(deletedAssesment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete assesment", { status: 500 });
  }
};
