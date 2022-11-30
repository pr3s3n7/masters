import {Router} from 'express'
import userController from "../controllers/UserController";
import {body} from "express-validator";
import authMiddleware from "../middleware/AuthMiddleware";

const userRouter = Router()

userRouter.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 4, max: 32 }),
    userController.registration)
userRouter.post('/login', userController.login)
userRouter.post('/logout', userController.logout)
userRouter.get('/activate/:link', userController.activate)
userRouter.get('/refresh', userController.refresh)
userRouter.delete('/delete', userController.delete)
userRouter.post('/save',
    body('name').isLength({ min: 4, max: 32 }),
    body('login').isLength({ min: 4, max: 32 }),
    body('email').isEmail(),
    body('about').isLength({ min: 4 }),
    userController.save)

export default userRouter