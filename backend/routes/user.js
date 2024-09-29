import express from "express";
import {
  deletUser,
  getUniqueUser,
  getUsers,
  updateuser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const route = express.Router();

//  checkauthentication
// route.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user , you are logged in ");
// });

// route.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user , you are logged in  and you can delet you account");
// });

// route.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello user , you are logged in  and you can delet all account");
// });

// update
route.put("/:id", verifyUser, updateuser);
// delete
route.delete("/:id", verifyUser, deletUser);
// GEt Unique
route.get("/:id", verifyUser, getUniqueUser);
// GEt All Hotels
route.get("/", verifyAdmin, getUsers);

export default route;
