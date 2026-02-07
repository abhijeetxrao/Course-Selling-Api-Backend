import express from 'express'
const router = express.Router()
import {handleSignup} from "../Controller/auth.controller"

router.post('/signup', handleSignup);

