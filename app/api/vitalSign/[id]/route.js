import connectToDatabase from "@/utils/database";
import VitalSign from "@/models/vitalSign";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const vitalSign = await VitalSign.findById(id);
    if (!vitalSign) {
      return NextResponse.json("VitalSign not found", { status: 404 });
    }
    return NextResponse.json(vitalSign, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get vitalSign", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const vitalSignData = await NextRequest.json();
    const updatedVitalSign = await VitalSign.findByIdAndUpdate(id, vitalSignData, { new: true });
    if (!updatedVitalSign) {
      return NextResponse.json("VitalSign not found", { status: 404 });
    }
    return NextResponse.json(updatedVitalSign, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update vitalSign", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedVitalSign = await VitalSign.findByIdAndDelete(id);
    if (!deletedVitalSign) {
      return NextResponse.json("VitalSign not found", { status: 404 });
    }
    return NextResponse.json(deletedVitalSign, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete vitalSign", { status: 500 });
  }
};
