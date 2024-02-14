import connectToDatabase from "@/utils/database";
import Allergen from "@/models/allergen";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const allergens = await Allergen.find({});
    return NextResponse.json(allergens, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get allergens", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const allergenData = await NextRequest.json();
    const newAllergen = await Allergen.create(allergenData);
    const patientId = allergenData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { allergens: newAllergen._id } },
      { new: true }
    );
    return NextResponse.json({ allergen: newAllergen, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create allergen", { status: 500 });
  }
};
