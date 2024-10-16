import User from "../model/user.js";

//  update user
export const updateuser = async (req, res , next) => {
  try {
    const updateuser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateuser);
  } catch (error) {
    next(error)
  }
};
//  delet user
export const deletUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.params.id);
    res.status(200).json("user hase been deleted ");
  } catch (error) {
    next(error);
  }
};
// GEt Unique hotles
export const getUniqueUser = async (req, res , next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// GEt All users
export const getUsers = async (req, res , next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export default {
  updateuser,
  deletUser,
  getUniqueUser,
  getUsers
};
