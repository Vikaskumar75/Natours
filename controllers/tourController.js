const Tour = require('../models/tourModel');

exports.createTour = async (req, res) => {
  try {
    // This below line of code is equivalent to
    // const tour = new Tour(req.body);
    // tour.save();
    const newTour = await Tour.create(req.body);

    // Now for sending the response back we use res.json and status code used for create method is 201
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err.message,
    });
  }
};

exports.getAllTours = async (req, res) => {
  try {
    // We use find() method on Tour model to get all the documents in the collection
    const allTours = await Tour.find();

    res.status(200).json({
      status: 'success',
      results: allTours.length,
      data: {
        tours: allTours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failure',
      message: err.message,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    // This below line of code is equivalent to
    // const tour = await Tour.find({ _id: req.params.id });
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failure',
      message: err.message,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    // The commetned code is one way to update a document but we dont get the updated document back
    // await Tour.updateOne({ _id: req.params.id }, { $set: req.body });
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        updatedTour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failure',
      message: err.message,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    // This below line of code is equivalent to
    // await Tour.deleteOne({ _id: req.params.id });
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      message: 'Successfully deleted',
    });
  } catch (err) {
    res.status(404).json({
      status: 'failure',
      message: err.message,
    });
  }
};
