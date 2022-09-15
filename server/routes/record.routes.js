const express = require('express');
const recordRouter = express.Router();
const { getAllRecords, getOneRecord, insertRecord, updateRecord, deleteRecord } = require('../controllers/record.controller')

recordRouter.route('/')
    .get(getAllRecords)
    .post(insertRecord);

recordRouter.route('/:id')
    .get(getOneRecord)
    .put(updateRecord)
    .delete(deleteRecord);

module.exports = recordRouter;