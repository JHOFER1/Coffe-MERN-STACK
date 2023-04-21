import { Router } from 'express';
import { getTopics } from './topics.controllers.js';
import { createTopics } from './topics.controllers.js';
import { updateTopics } from './topics.controllers.js';
import { deleteTopics } from './topics.controllers.js';
import { getTopic } from './topics.controllers.js';
import { isLoggedIn } from "../lib/auth.js";



const router = Router();
router.get('/topics', isLoggedIn, getTopics);
router.post('/topics/add', isLoggedIn, createTopics);
router.get('/topics/:id', isLoggedIn, getTopic);
router.put('/topics/:id', isLoggedIn, updateTopics);
router.delete('/topics/:id', isLoggedIn, deleteTopics);


export default router;

