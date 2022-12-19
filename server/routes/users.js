import express from "express";
import{
    getUser,
    getUserFriends,
    addUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken} from "../middleware/auth";

const router = express.Router();

// READ 
router.get("/:id", verifyToken,getUser);
router.get("/:id/friendId", verifyToken,getUserFriends);

router.patch("/:id/:friendId" , virifyToken ,addRemoveFriend)
