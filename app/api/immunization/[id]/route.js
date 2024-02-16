import connectToDatabase from "@/utils/database";
import Immunization from "@/models/immunization";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const immunization = await Immunization.findById(id);
    if (!immunization) {
      return NextResponse.json("Immunization not found", { status: 404 });
    }
    return NextResponse.json(immunization, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get immunization", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const immunizationData = await NextRequest.json();
    const updatedImmunization = await Immunization.findByIdAndUpdate(id, immunizationData, { new: true });
    if (!updatedImmunization) {
      return NextResponse.json("Immunization not found", { status: 404 });
    }
    return NextResponse.json(updatedImmunization, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update immunization", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedImmunization = await Immunization.findByIdAndDelete(id);
    if (!deletedImmunization) {
      return NextResponse.json("Immunization not found", { status: 404 });
    }
    return NextResponse.json(deletedImmunization, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete immunization", { status: 500 });
  }
};
