const Thing = require('../models/rouble');

exports.createRouble = (req, res, next) => {
  const thing = new Thing({
    UserName: req.body.UserName,
    pseudo: req.body.pseudo,
    pp: req.body.pp,
    userId: req.body.userId
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Rouble saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllrouble = (req, res, next) => {
  Thing.find().then(
    (things) => {
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};