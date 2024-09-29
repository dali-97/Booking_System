import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import User from "../model/user.js";
//  register
export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);

    const newUSer = new User({
      username,
      email,
      password: hashPassword,
    });
    await newUSer.save();
    res.status(201).send("User hase been created.");
  } catch (error) {
    next(error);
  }
};
// login
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User Not found!"));
    const verifyPWD = await bcrypt.compare(req.body.password, user.password);
    if (!verifyPWD) return next(createError(400, "wrong password! or Usename"));
    // generate access token
    const token = jwt.sign(
      { id: user._id, isAdmine: user.isAdmine },
      process.env.JWT_SECRETTkeY
    );
    const { password, isAdmine, ...otherDeatails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDeatails });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
};
