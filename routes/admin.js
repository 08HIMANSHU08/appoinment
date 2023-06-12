

const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expense');


router.post('/add-expense',expenseController.postExpense);

router.get('/get-expense',expenseController.getExpense);

router.put('/buy-expense/:id',expenseController.buyExpense);

module.exports = router;