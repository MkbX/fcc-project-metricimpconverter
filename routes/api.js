'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', function (req, res) {
    //console.log('dfghj ', convertHandler.getNum(req.query.input));
    let returnedString = convertHandler.getString(
      convertHandler.getNum(req.query.input),
      convertHandler.getUnit(req.query.input),
      convertHandler.convert(convertHandler.getNum(req.query.input),convertHandler.getUnit(req.query.input)),
      convertHandler.getReturnUnit(convertHandler.getUnit(req.query.input))
    );

    if(returnedString.includes('invalid')) {
      res.send(returnedString);
    } else {
      res.json({initNum: Number(convertHandler.getNum(req.query.input)),
        initUnit: convertHandler.getUnit(req.query.input),
        returnNum: Number(convertHandler.convert(convertHandler.getNum(req.query.input),convertHandler.getUnit(req.query.input))),
        returnUnit: convertHandler.getReturnUnit(convertHandler.getUnit(req.query.input)),
      string: returnedString});
    }

    
  });

};
