import connectToDatabase from "@/utils/database";
import Lab from "@/models/lab";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const lab = await Lab.findById(id);
    if (!lab) {
      return NextResponse.json("Lab not found", { status: 404 });
    }
    return NextResponse.json(lab, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get lab", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const labData = await NextRequest.json();
    const updatedLab = await Lab.findByIdAndUpdate(id, labData, { new: true });
    if (!updatedLab) {
      return NextResponse.json("Lab not found", { status: 404 });
    }
    return NextResponse.json(updatedLab, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update lab", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedLab = await Lab.findByIdAndDelete(id);
    if (!deletedLab) {
      return NextResponse.json("Lab not found", { status: 404 });
    }
    return NextResponse.json(deletedLab, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete lab", { status: 500 });
  }
};
