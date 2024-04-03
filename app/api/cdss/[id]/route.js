import connectToDatabase from "@/utils/database";
import Cdss from "@/models/cdss";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const cdss = await Cdss.findById(id);
    if (!cdss) {
      return NextResponse.json("Cdss not found", { status: 404 });
    }
    return NextResponse.json(cdss, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get cdss", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const cdssData = await NextRequest.json();
    const updatedCdss = await Cdss.findByIdAndUpdate(id, cdssData, { new: true });
    if (!updatedCdss) {
      return NextResponse.json("Cdss not found", { status: 404 });
    }
    return NextResponse.json(updatedCdss, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update cdss", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedCdss = await Cdss.findByIdAndDelete(id);
    if (!deletedCdss) {
      return NextResponse.json("Cdss not found", { status: 404 });
    }
    return NextResponse.json(deletedCdss, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete cdss", { status: 500 });
  }
};
