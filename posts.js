import express from 'express'
import {getPosts, getSinglePost, createPost, updatePost, deletePost} from './controllers/postControllers.js'
const router = express.Router()

//Get all posts
router.get('/', getPosts);

//Get single posts
router.get('/:id', getSinglePost);


//create post
router.post('/', createPost);

//update post
router.put('/:id', updatePost)

//delete post
router.delete('/:id', deletePost)

export default router;