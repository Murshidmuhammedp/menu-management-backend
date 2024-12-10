import express from "express";
import { newMenuItem, viewItems } from "../controller/menuItemController.js";

const router = express.Router();

router.post('/:id', newMenuItem);  

router.get('/:id', viewItems);  

export default router;
