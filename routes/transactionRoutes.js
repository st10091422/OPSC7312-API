const router = require('express').Router();
const { getAllExpenses, addExpense, updateExpense, deleteExpense } =  require('../controller/transactionContoller')

router.get('/:id', getAllExpenses);

router.post('/', addExpense);

router.put('/:id', updateExpense);

router.delete('/:id', deleteExpense);

module.exports = router;