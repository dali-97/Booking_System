import express from "express";
import {
  createHotel,
  deletHotle,
  updateHotel,
  getUniqueHotel,
  getAllHotel,
  countByCity,
  countByType,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const route = express.Router();

// create
route.post("/", verifyAdmin, createHotel);
// update
route.put("/:id", verifyAdmin, updateHotel);
// delete
route.delete("/:id", verifyAdmin, deletHotle);
// GEt Unique hotles
route.get("/find/:id", getUniqueHotel);
// GEt All Hotels
route.get("/", getAllHotel);
route.get("/countByCity", countByCity);
route.get("/countByType", countByType);

export default route;
