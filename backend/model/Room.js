import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unvailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

//  roomNumbers will be like that
// [
//   { number: 101, unvailableDates: [01.05.2024 , 02.05.2024] },
//   { number: 102, unvailableDates: {} },
//   { number: 103, unvailableDates: {} },
//   { number: 104, unvailableDates: {} },
//   { number: 105, unvailableDates: {} },
// ];

export default mongoose.model("Room", RoomSchema);
