import connectToDatabase from "@/utils/database";
import FamilyHx from "@/models/familyHx";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const familyHx = await FamilyHx.findById(id);
    if (!familyHx) {
      return NextResponse.json("FamilyHx not found", { status: 404 });
    }
    return NextResponse.json(familyHx, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get familyHx", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const familyHxData = await NextRequest.json();
    const updatedFamilyHx = await FamilyHx.findByIdAndUpdate(id, familyHxData, { new: true });
    if (!updatedFamilyHx) {
      return NextResponse.json("FamilyHx not found", { status: 404 });
    }
    return NextResponse.json(updatedFamilyHx, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update familyHx", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedFamilyHx = await FamilyHx.findByIdAndDelete(id);
    if (!deletedFamilyHx) {
      return NextResponse.json("FamilyHx not found", { status: 404 });
    }
    return NextResponse.json(deletedFamilyHx, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete familyHx", { status: 500 });
  }
};
