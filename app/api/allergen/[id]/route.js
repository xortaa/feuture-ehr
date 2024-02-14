import connectToDatabase from "@/utils/database";
import Allergen from "@/models/allergen";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, params) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const allergen = await Allergen.findById(id);
    if (!allergen) {
      return NextResponse.json("Allergen not found", { status: 404 });
    }
    return NextResponse.json(allergen, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get allergen", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  await connectToDatabase();
  try {
    const allergenData = await NextRequest.json();
    const updatedAllergen = await Allergen.findByIdAndUpdate(id, allergenData, { new: true });
    if (!updatedAllergen) {
      return NextResponse.json("Allergen not found", { status: 404 });
    }
    return NextResponse.json(updatedAllergen, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update allergen", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedAllergen = await Allergen.findByIdAndDelete(id);
    if (!deletedAllergen) {
      return NextResponse.json("Allergen not found", { status: 404 });
    }
    return NextResponse.json(deletedAllergen, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete allergen", { status: 500 });
  }
};
