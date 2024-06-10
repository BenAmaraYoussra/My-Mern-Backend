const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.readPost);
router.post('/', upload.single("file"), postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/like-past/:id' , postController.likePost);
router.patch('/unlike-past/:id' , postController.unlikePost);

//comments
router.patch('/comment-post/:id' , postController.commentPost);
router.patch('/edit-comment-post/:id' , postController.editCommentPost);
router.patch('/delete-comment-post/:id' , postController.deleteCommentPost);

module.exports = router