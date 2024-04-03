import mongoose from "mongoose";

let isConnected = false;

const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MongoDB URI is must be set in the environment variables");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "feuture",
    });
    isConnected = true;
    console.log("MongoDB is connected");

    require("@/models/allergen");
    require("@/models/familyHx");
    require("@/models/hpi");
    require("@/models/immunization");
    require("@/models/lab");
    require("@/models/measurement");
    require("@/models/medication");
    require("@/models/patient");
    require("@/models/socialHx");
    require("@/models/vitalSign");
    require("@/models/intakeOutput");
    require("@/models/nurseNotes");
    require("@/models/assessment");
    require("@/models/diagnosis");
    require("@/models/planning");
    require("@/models/intervention");
    require("@/models/evaluation");
    require("@/models/cdss");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
