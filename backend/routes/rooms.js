import express from "express";
import {
  createRoom,
  deletRoom,
  getAllRoom,
  getUniqueRoom,
  updateAvailibility,
  updateRoom,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const route = express.Router();

// create
route.post("/:hotelid", verifyAdmin, createRoom);
// update
route.put("/:id", verifyAdmin, updateRoom);
route.put("/availability/:id", updateAvailibility);
// delete
route.delete("/:id/:hotelid", verifyAdmin, deletRoom);
// GEt Unique hotles
route.get("/:id", getUniqueRoom);
// GEt All Hotels
route.get("/", getAllRoom);

export default route;
