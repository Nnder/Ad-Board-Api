import { Router } from "express";
import userController from "../Controller/UserController.js";
import adController from "../Controller/AdController.js";
const router = new Router();

// User
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getOne);
router.post('/users', userController.createMany);
router.post('/user', userController.createOne);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);


// Ad
router.get('/ads', adController.getAll);
router.get('/ads/:id', adController.getOne);
router.post('/ads', adController.createMany);
router.post('/ad', adController.createOne);
router.put('/ads/:id', adController.update);
router.delete('/ads/:id', adController.delete);

export default router;