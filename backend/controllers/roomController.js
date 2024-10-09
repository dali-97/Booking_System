import Room from "../model/Room.js";
import { createError } from "../utils/error.js";
import Hotel from "../model/Hotel.js";

//  create Room
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

//  update Room
export const updateRoom = async (req, res, next) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateRoom);
  } catch (error) {
    next(error);
  }
};

//  update Room Availibility
export const updateAvailibility = async (req, res, next) => {
  try {
    await Room.updateOne(
      {
        "roomNumbers._id": req.params.id,
      },
      {
        $push: {
          "roomNumbers.$.unvailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("Room status has been updated");
  } catch (error) {
    next(error);
  }
};
//  delet Room
export const deletRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndUpdate(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: {
          rooms: req.params.id,
        },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Room hase been deleted ");
  } catch (error) {
    next(error);
  }
};
// GEt Unique Room
export const getUniqueRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

// GEt All Room
export const getAllRoom = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

export default {
  createRoom,
  deletRoom,
  updateAvailibility,
  getAllRoom,
  getUniqueRoom,
  updateRoom,
};
