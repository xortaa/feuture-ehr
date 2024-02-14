import connectToDatabase from "@/utils/database";
import FamilyHx from "@/models/familyHx";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const familyHxs = await FamilyHx.find({});
    return NextResponse.json(familyHxs, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get familyHxs", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const familyHxData = await NextRequest.json();
    const newFamilyHx = await FamilyHx.create(familyHxData);
    const patientId = familyHxData.patientId;
    const patient = await Patient.findByIdAndUpdate(patientId, { $push: { familyHx: newFamilyHx._id } }, { new: true });
    return NextResponse.json({ familyHx: newFamilyHx, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create familyHx", { status: 500 });
  }
};
