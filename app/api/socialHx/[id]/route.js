import connectToDatabase from "@/utils/database";
import SocialHx from "@/models/socialHx";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (NextRequest, params) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const socialHx = await SocialHx.findById(id);
    if (!socialHx) {
      return NextResponse.json("SocialHx not found", { status: 404 });
    }
    return NextResponse.json(socialHx, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get socialHx", { status: 500 });
  }
};

export const PATCH = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const socialHxData = await NextRequest.json();
    const updatedSocialHx = await SocialHx.findByIdAndUpdate(id, socialHxData, { new: true });
    if (!updatedSocialHx) {
      return NextResponse.json("SocialHx not found", { status: 404 });
    }
    return NextResponse.json(updatedSocialHx, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to update socialHx", { status: 500 });
  }
};

export const DELETE = async (NextRequest, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();
    const deletedSocialHx = await SocialHx.findByIdAndDelete(id);
    if (!deletedSocialHx) {
      return NextResponse.json("SocialHx not found", { status: 404 });
    }
    return NextResponse.json(deletedSocialHx, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete socialHx", { status: 500 });
  }
};
