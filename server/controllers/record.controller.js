const Record = require('../models/record.model');

const getAllRecords = (_, res) => {
    Record.find()
        .then((records) => res.status(200).json(records))
        .catch((err) => res.status(400).json(err));
};

const getOneRecord = (req, res) => {
    Record.findById({ _id: req.params.id })
        .then((record) => res.status(200).json(record))
        .catch((err) => res.status(400).json(err));
};

const insertRecord = (req, res) => {
    Record.create(req.body)
        .then((record) => res.status(201).json(record))
        .catch((err) => res.status(400).json(err));
};

const updateRecord = (req, res) => {
    Record.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((record) => res.status(201).json(record))
        .catch((err) => res.status(400).json(err));
};

const deleteRecord = (req, res) => {
    Record.findByIdAndDelete({ _id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    getAllRecords,
    getOneRecord,
    insertRecord,
    updateRecord,
    deleteRecord,
};