const router = require('express').Router();
const { getAllCategories, createCategory, updateCategory, deleteCategory } =  require('../controller/categoryController')

router.get('/:id', getAllCategories);

router.post('/', createCategory);

router.put('/:id', updateCategory);

router.delete('/:id',  deleteCategory);

module.exports = router;