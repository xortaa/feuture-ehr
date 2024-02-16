import connectToDatabase from "@/utils/database";
import Hpi from "@/models/hpi";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const hpi = await Hpi.findById(id);
    if (!hpi) {
      return NextResponse.json("Hpi not found", { status: 404 });
    }
    return NextResponse.json(hpi, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get hpi", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const hpiData = await NextRequest.json();
    const updatedHpi = await Hpi.findByIdAndUpdate(id, hpiData, { new: true });
    if (!updatedHpi) {
      return NextResponse.json("Hpi not found", { status: 404 });
    }
    return NextResponse.json(updatedHpi, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update hpi", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedHpi = await Hpi.findByIdAndDelete(id);
    if (!deletedHpi) {
      return NextResponse.json("Hpi not found", { status: 404 });
    }
    return NextResponse.json(deletedHpi, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete hpi", { status: 500 });
  }
};
