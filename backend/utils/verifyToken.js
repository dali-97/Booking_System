import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  //  get token from cookier
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated! "));
  jwt.verify(token, process.env.JWT_SECRETTkeY, (err, user) => {
    if (err) return next(createError(403, "token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmine) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmine) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};
