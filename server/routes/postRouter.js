const express = require('express')
const postController = require('../controllers/postController')
const router = express.Router()

router.get('/home', postController.getAllUserPosts)

router.post('/home', postController.createPost)

// router.get('/home/:id', postsController.getPostById)

router.put('/home/', postController.updatePostById)

router.delete('/home/:id', postController.deletePostById)

module.exports = router;