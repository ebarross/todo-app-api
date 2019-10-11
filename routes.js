const { Router } = require("express");
const authMiddleware = require("./src/app/middlewares/auth");
const UserController = require("./src/app/controllers/UserController");
const SessionController = require("./src/app/controllers/SessionController");
const ActivityController = require("./src/app/controllers/ActivityController");

const router = new Router();

/* Public routes */
router.post("/sessions", SessionController.store);
router.post("/users", UserController.store);

router.use(authMiddleware);
/* Private routes */
router.post("/activities", ActivityController.store);
router.get("/activities", ActivityController.index);
router.get("/activities/:id", ActivityController.find);

module.exports = router;
