import connectToDatabase from "@/utils/database";
import SocialHx from "@/models/socialHx";
import Patient from "@/models/patient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest) => {
  try {
    await connectToDatabase();
    const socialHxs = await SocialHx.find({});
    return NextResponse.json(socialHxs, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get socialHxs", { status: 500 });
  }
};

export const POST = async (NextRequest) => {
  try {
    await connectToDatabase();
    const socialHxData = await NextRequest.json();
    const newSocialHx = await SocialHx.create(socialHxData);
    const patientId = socialHxData.patientId;
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { socialHx: newSocialHx._id } },
      { new: true }
    );
    return NextResponse.json({ socialHx: newSocialHx, patient }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create socialHx", { status: 500 });
  }
};
