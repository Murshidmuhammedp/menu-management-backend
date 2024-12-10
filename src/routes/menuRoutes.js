import express from "express";
import { createMenu, viewMenu } from "../controller/menuController.js";

const router = express.Router(); 

router.post('/', createMenu);

router.get('/', viewMenu);

export default router;
