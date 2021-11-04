import { Router } from "express";
import { AuthenticateUserControllers } from "./controllers/AuthenticateUserControllers";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessageController } from "./controllers/GetLast3MessageController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router()

router.post("/authenticate", new AuthenticateUserControllers().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

router.get("/messages/last3", new GetLast3MessageController().handle)

router.get("/profile",ensureAuthenticated, new ProfileUserController().handle)
export { router }
