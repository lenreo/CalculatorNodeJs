'use strict';

var utils = require('../utils/writer.js');
var Basic = require('../service/BasicService');

module.exports.calculateoperation = function calculateoperation (req, res, next) {
  var operand1 = req.swagger.params['operand1'].value;
  var operator = req.swagger.params['operator'].value;
  var operand2 = req.swagger.params['operand2'].value;
  Basic.calculateoperation(operand1,operator,operand2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storeData = function storeData (req, res, next) {
  var value = req.swagger.params['value'].value;
  Basic.storeData(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
