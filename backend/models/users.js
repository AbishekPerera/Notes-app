import mongoose from "mongoose";

const userSchema = mongoose.Schema;

const user = new userSchema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    phone: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", user);
