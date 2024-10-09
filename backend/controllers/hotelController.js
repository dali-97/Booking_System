import Hotel from "../model/Hotel.js";
import Room from "../model/Room.js";

//  create a hotel
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json({ message: "hotel hase been saved " });
  } catch (error) {
    next(error);
  }
};

//  update hotel
export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
};
//  delet Hotel
export const deletHotle = async (req, res, next) => {
  try {
    await Hotel.findByIdAndUpdate(req.params.id);
    res.status(200).json("hotel hase been deleted ");
  } catch (error) {
    next(error);
  }
};
// GEt Unique hotles
export const getUniqueHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// GEt All Hotels
export const getAllHotel = async (req, res, next) => {
  const { min, max, limit,...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min ? min : 1, $lt: max ? max : 999 },
    }).limit(limit);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
// count hotel by city
export const countByCity = async (req, res, next) => {
  // this how wa use querry
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        //  we can use somthing like this but it mush time it will be search and have much time
        // return Hotel.find({city}).length
        return Hotel.countDocuments({ city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
// count hotel by type
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villageCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    res.status(200).json([
      {
        type: "hotel",
        count: hotelCount,
      },
      {
        type: "apartments",
        count: apartmentCount,
      },
      {
        type: "resorts",
        count: resortCount,
      },
      {
        type: "villas",
        count: villageCount,
      },
      {
        type: "cabins",
        count: cabinCount,
      },
    ]);
  } catch (error) {
    next(error);
  }
};

export const getHotelRoom = async (req,res,next) => {
  try {
    const hotel = await Hotel.findById(req.params.id)
    const rooms = await Promise.all(hotel.rooms.map(room => {
      return Room.findById(room)
    }))
    res.status(200).json(rooms)
  } catch (error) {
    next(error)
  }
}

export default {
  createHotel,
  updateHotel,
  deletHotle,
  getUniqueHotel,
  getAllHotel,
  countByCity,
  countByType,
  getHotelRoom
};
