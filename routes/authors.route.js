const {
  Router
} = require('express');
const {
  authorController
} = require('../controllers/authors.controller.js');

const router = Router();

router.get('/authors', authorController.getAuthor)
router.get('/authors/:id', authorController.getAuthorById)
router.post('/authors', authorController.postAuthor)
router.delete('/authors/:id', authorController.deleteAuthorById)
router.patch('/authors/:id', authorController.patchAuthorById)

module.exports = router;